# Claude project instructions · mori-web

The product site for Mori, served at https://mori.swarea.com. Read this
before changing anything.

## Context

- This site began as workstream **W19** of the app repo's
  `docs/production-program.md` (at `hey-mori/mori`). That program is marked for
  re-baselining. Read the app repo's
  `docs/design/mori-context-workspace-architecture.md` for current direction;
  use the program's D1–D6 and launch checkpoint as historical context until
  they are reconciled.
- Never hardcode the product name or a link in a page; read them from
  `src/config/site.ts`.
- `main` is live: `.github/workflows/deploy.yml` builds it and publishes it to
  GitHub Pages, which serves `mori.swarea.com` (`public/CNAME`). A merge is a
  release of the site. The repository is public under MPL-2.0.
- To roll back, run the deploy workflow by hand with an earlier commit as
  `ref`, or revert the change on `main`.

## Hard rules (carried over from the app repo)

- **Commit format**: `<type>: <imperative lower-case summary>` (feat /
  fix / refactor / test / docs / chore), one blank line, then a
  **bullet-only body** (`- ` lines, no prose paragraphs, 3–7 bullets
  typical). Never emoji, AI footers, `Co-Authored-By:`, "Generated
  with" lines, or validation logs.
- **Never use the em dash** (U+2014) anywhere: copy, code, comments,
  commits. Use `,` or `·` or split the sentence. En dash in numeric
  ranges (`3–7`) is fine.
- **Korean-first copy** for all user-facing strings.
- **Do not push to the app repo from here**, and do not push this repo
  unless the change is committed and validated.

## Brand contract (from the app's brand identity reference)

- Purple (`--purple: #6246f5`) is **brand accent only**: the mark,
  links, one primary CTA. Never the color of every surface.
- Gradient (`--brand-gradient-start/end`) appears **only in the brand
  mark / favicon**. Everything else is flat.
- Calm, professional, honest tone. No hype, no sparkle decoration, no
  cloud-forward imagery (the product is local-first).
- **No fake states**: there is no download button until a release is
  published; the hero links to the source on GitHub instead. Never render a
  fake-connected or fake-available UI.
- Token source of truth is the app repo's `src/styles/tokens.css`;
  `src/styles/global.css` here keeps a hand-synced subset. When
  changing a shared value, change the app first, then sync.

## Validation before committing

```
npm run build
bash scripts/check-line-endings.sh
git diff --check
git status --short
```

A failed build never gets committed. There is no test suite yet; when
logic modules grow (e.g. changelog parsing), add Vitest and colocate
tests the way the app repo does.
