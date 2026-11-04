<div align="center">

<img src="public/favicon.svg" alt="" width="88" height="88">

# Mori Web

**The website for [Mori](https://github.com/hey-mori/mori).**

The landing, changelog and privacy pages, built with Astro as a fully static
site.

[Structure](#structure) ·
[Develop](#develop) ·
[Conventions](#conventions)

[![license: MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-1c1e22)](LICENSE)

</div>

## Principles

- **Static.** No server, no accounts, no analytics and no tracking. `npm run
  build` writes plain files that any static host can serve.
- **Korean-first copy**, matching the product.
- **One place for the name.** Every page reads the product name, tagline and
  status from `src/config/site.ts`, so the whole site follows a single edit.
- **True to the product.** The pages describe what the app does, and the
  download section reflects its real release state.

## Structure

```
src/
  config/site.ts        product name, tagline and status, read by every page
  data/changelog.ts     changelog entries (typed data module)
  styles/global.css     tokens (synced by hand from the app's tokens.css) + base
  layouts/BaseLayout.astro
  components/           BrandMark, SiteHeader, SiteFooter
  pages/                index, changelog, privacy
public/favicon.svg      brand mark (gradient allowed here only)
```

## Develop

Requires Node.js 22, the version CI uses.

```bash
npm ci
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the built site
```

## Conventions

Run `scripts/setup-git-hooks.sh` once per clone; the `commit-msg` hook and CI
both check commit messages.

- Commits follow the [Mori commit format](https://github.com/hey-mori/.github/blob/main/docs/commit-format.md):
  a type prefix and a bullet-only body.
- Copy is Korean-first and never uses the em dash.
- Brand purple is an accent for the mark, links and one primary action, not a
  surface colour.

[CLAUDE.md](CLAUDE.md) holds the complete working rules.

## Relationship to the app repo

The app lives at [hey-mori/mori](https://github.com/hey-mori/mori). Its
`src/styles/tokens.css` is the source of truth for brand tokens; this site
keeps a hand-synced subset in `src/styles/global.css`, so change a shared
value in the app first. What the pages say about the product follows the
app's README and [project goal](https://github.com/hey-mori/mori/blob/main/docs/mori-project-goal.md).

## Contributing and security

Contributions follow the organization's
[contributing guide](https://github.com/hey-mori/.github/blob/main/CONTRIBUTING.md),
including the sign-off (`git commit -s`) on commits from outside the
organization. Report a vulnerability privately with this repository's
[report form](https://github.com/hey-mori/mori-web/security/advisories/new),
never in an issue.

## License

The source code in this repository is licensed under the [Mozilla Public License 2.0](LICENSE)
(`MPL-2.0`). Copyright 2026 Isaac Lee.

- Third-party dependencies keep their own licences.
- The licence grants no rights to the Mori names or logos as trademarks. A
  site built from this code must not present itself as Mori or use its mark.
- Contributions are accepted under the same licence, with the sign-off the
  organization's [contributing guide](https://github.com/hey-mori/.github/blob/main/CONTRIBUTING.md)
  describes.
