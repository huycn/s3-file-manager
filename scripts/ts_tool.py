#!/usr/bin/env python3
"""Helpers for Qt Linguist .ts files (translations/s3fm_<lang>.ts).

  ts_tool.py export <file.ts> [--all]      print messages as JSON (default: unfinished only)
  ts_tool.py apply  <file.ts> <file.json>  write translations from JSON into the .ts file
  ts_tool.py check  [--allow-unfinished] <file.ts>...
                                           validate translations (placeholders, tags, plural
                                           forms, accelerators incl. clashes within a dialog);
                                           exit 1 on problems
                                           (--allow-unfinished: untranslated strings are OK)

Export format: a list of {"id", "context", "source", "comment", "numerus", "forms"}; "forms"
is how many plural forms the language needs. Apply format: {"<id>": "text"} or, for numerus
messages, {"<id>": ["form1", "form2", ...]} with exactly "forms" entries. Message ids are
"<context>|<source>|<comment>" and stay valid across lupdate runs.

After apply, run the update_translations build target: lupdate rewrites the file in its
canonical format (the CI check compares against that).
"""

import json
import re
import sys
import xml.etree.ElementTree as ET

# Plural forms per language, as Qt defines them (src/corelib/kernel/qtranslator.cpp rules).
PLURAL_FORMS = {"zh_CN": 1, "zh": 1, "hi": 2, "es": 2, "fr": 2, "en": 2, "ar": 6, "bn": 2, "pt": 2, "ru": 3,
                "de": 2, "ja": 1, "ko": 1, "it": 2, "nl": 2, "pl": 3, "ms": 1, "vi": 1}
RTL_LANGUAGES = {"ar"}

PLACEHOLDER = re.compile(r"%L?(?:\d{1,2}|n)")
TAG = re.compile(r"</?([a-zA-Z][a-zA-Z0-9]*)[^>]*>")
# "&x" is an accelerator; "&&" is a literal ampersand.
ACCEL = re.compile(r"(?<!&)&(?!&)(?=\S)")
ACCEL_KEY = re.compile(r"(?<!&)&(?!&)(\w)")

# Accelerator uniqueness is checked per context (one class = roughly one window or tab).
# MainWindow is skipped: its menus are checked on the real window by tst_i18n.
ACCEL_SKIP_CONTEXTS = {"s3fm::MainWindow"}
# Texts of one widget that never show at the same time (a button that switches its label).
ACCEL_EXCLUSIVE = [{"&Calculate", "&Cancel"}]


def load(path):
    tree = ET.parse(path)
    return tree, tree.getroot()


def messages(root):
    for ctx in root.iter("context"):
        name = ctx.findtext("name")
        for msg in ctx.iter("message"):
            yield name, msg


def message_id(context, msg):
    return "|".join((context, msg.findtext("source") or "", msg.findtext("comment") or ""))


def forms_for(root):
    lang = root.get("language", "")
    if lang not in PLURAL_FORMS:
        lang = lang.split("_")[0]
    return PLURAL_FORMS[lang]


def is_unfinished(msg):
    tr = msg.find("translation")
    if tr is None or tr.get("type") in ("unfinished", "vanished", "obsolete"):
        return True
    if msg.get("numerus") == "yes":
        return any(not (f.text or "").strip() for f in tr.findall("numerusform"))
    return not (tr.text or "").strip()


def cmd_export(path, everything=False):
    _, root = load(path)
    forms = forms_for(root)
    out = []
    for context, msg in messages(root):
        if not everything and not is_unfinished(msg):
            continue
        numerus = msg.get("numerus") == "yes"
        out.append({
            "id": message_id(context, msg),
            "context": context,
            "source": msg.findtext("source"),
            "comment": msg.findtext("comment") or "",
            "numerus": numerus,
            "forms": forms if numerus else 1,
        })
    json.dump(out, sys.stdout, ensure_ascii=False, indent=1)
    print()


def cmd_apply(path, json_path):
    tree, root = load(path)
    forms = forms_for(root)
    with open(json_path, encoding="utf-8") as f:
        data = json.load(f)
    applied = 0
    errors = []
    for context, msg in messages(root):
        mid = message_id(context, msg)
        if mid not in data:
            continue
        value = data.pop(mid)
        tr = msg.find("translation")
        if tr is None:
            tr = ET.SubElement(msg, "translation")
        for child in list(tr):
            tr.remove(child)
        tr.text = None
        if msg.get("numerus") == "yes":
            if isinstance(value, str):
                value = [value] * forms
            if len(value) != forms:
                errors.append(f"{mid}: expected {forms} plural forms, got {len(value)}")
                continue
            for form in value:
                ET.SubElement(tr, "numerusform").text = form
        else:
            if not isinstance(value, str):
                errors.append(f"{mid}: expected a string")
                continue
            tr.text = value
        tr.attrib.pop("type", None)
        applied += 1
    for mid in data:
        errors.append(f"unknown message id: {mid}")
    tree.write(path, encoding="utf-8", xml_declaration=True)
    print(f"applied {applied} translation(s) to {path}")
    for e in errors:
        print("error:", e, file=sys.stderr)
    return 1 if errors else 0


def accelerators(text):
    return len(ACCEL.findall(text))


def accel_key(text):
    m = ACCEL_KEY.search(text or "")
    return m.group(1).lower() if m else None


def accel_clashes(context, pairs):
    """pairs: (source, shown text). Returns problem strings for shared accelerator keys."""
    if context in ACCEL_SKIP_CONTEXTS:
        return []
    seen = {}
    problems = []
    for source, text in pairs:
        key = accel_key(text)
        if not key or not accel_key(source):
            continue
        other = seen.get(key)
        if other and not any({other[0], source} <= group for group in ACCEL_EXCLUSIVE):
            problems.append(f"{context}: {other[1]!r} and {text!r} share the accelerator {key!r}")
        seen.setdefault(key, (source, text))
    return problems


def check_text(source, text, numerus):
    problems = []
    src_ph = sorted(PLACEHOLDER.findall(source))
    got_ph = sorted(PLACEHOLDER.findall(text))
    if numerus:
        # A plural form may leave out %n ("one file" spelled out), never add others.
        src_ph = [p for p in src_ph if not p.endswith("n")]
        got_ph = [p for p in got_ph if not p.endswith("n")]
    if src_ph != got_ph:
        problems.append(f"placeholders {src_ph} != {got_ph}")
    if sorted(TAG.findall(source)) != sorted(TAG.findall(text)):
        problems.append("HTML tags differ")
    if accelerators(source) != accelerators(text):
        problems.append(f"accelerator count {accelerators(source)} != {accelerators(text)}")
    if source.strip() and not text.strip():
        problems.append("empty")
    return problems


def cmd_check(paths, allow_unfinished=False):
    failed = 0
    sources_checked = False
    for path in paths:
        _, root = load(path)
        lang = root.get("language", "")
        forms = forms_for(root)
        problems = []
        by_context = {}
        for context, msg in messages(root):
            source = msg.findtext("source") or ""
            mid = message_id(context, msg)
            if is_unfinished(msg):
                if not allow_unfinished:
                    problems.append(f"{mid}: unfinished")
                continue
            tr = msg.find("translation")
            numerus = msg.get("numerus") == "yes"
            if source == "QT_LAYOUT_DIRECTION":
                want = "RTL" if lang.split("_")[0] in RTL_LANGUAGES else "LTR"
                if (tr.text or "") != want:
                    problems.append(f"{mid}: must be {want}")
                continue
            if numerus:
                texts = [f.text or "" for f in tr.findall("numerusform")]
                if len(texts) != forms:
                    problems.append(f"{mid}: {len(texts)} plural forms, need {forms}")
            else:
                texts = [tr.text or ""]
                by_context.setdefault(context, []).append((source, texts[0]))
            for t in texts:
                for p in check_text(source, t, numerus):
                    problems.append(f"{mid}: {p}: {t!r}")
        for context, pairs in by_context.items():
            problems += accel_clashes(context, pairs)
            if not sources_checked:  # the English sources (the same in every full .ts file), once
                problems += [f"(source) {p}" for p in accel_clashes(context, [(s, s) for s, _ in pairs])]
        sources_checked = sources_checked or bool(by_context)
        for p in problems:
            print(f"{path}: {p}")
        print(f"{path}: {len(problems)} problem(s)", file=sys.stderr)
        failed += bool(problems)
    return 1 if failed else 0


def main(argv):
    if len(argv) >= 2 and argv[0] == "export":
        return cmd_export(argv[1], "--all" in argv)
    if len(argv) == 3 and argv[0] == "apply":
        return cmd_apply(argv[1], argv[2])
    if len(argv) >= 2 and argv[0] == "check":
        allow = "--allow-unfinished" in argv
        return cmd_check([a for a in argv[1:] if a != "--allow-unfinished"], allow)
    print(__doc__, file=sys.stderr)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]) or 0)
