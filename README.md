<div align="center">

<img src="public/favicon.svg" alt="" width="88" height="88">

# mori-web

**The product site for [Mori](https://github.com/hey-mori/mori).**

A static Astro site with the landing, changelog and privacy pages. It goes
live once the product's real name and domain are decided.

[Structure](#structure) ·
[Develop](#develop) ·
[Conventions](#conventions)

![status: not deployed](https://img.shields.io/badge/status-not%20deployed-6246f5)
![license: MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-1c1e22)

</div>

**The site is not deployed.** Until the name is decided there is no URL to
visit; build it locally to see it. "Mori" is a placeholder codename.

## What this is

- A static Astro site. No server, no accounts, no analytics, no
  tracking. The plan is a static host (GitHub Pages or Cloudflare Pages)
  once the real product name and domain exist; no hosting is set up yet.
- Korean-first copy, matching the product.
- Honest states only: while the app is unreleased, the site says so;
  no fake download buttons.

## Rename plan

"Mori" is a placeholder codename. Every page reads the product name
from `src/config/site.ts`; when the real name lands, change it there
and in this README. This repo itself will be renamed at that point
(GitHub redirects the old name).

## Structure

```
src/
  config/site.ts        the single rename point (name, tagline, status)
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
check commit messages. See [CLAUDE.md](CLAUDE.md). The short form: commit format identical to
the app repo (type prefix + bullet-only body), never the em dash
character, Korean-first copy, purple as brand accent only, no fake
connected/download states.

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
