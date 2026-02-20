# Ikwe.ai Public Site

Production web app for [ikwe.ai](https://ikwe.ai), built with Vite + React + TypeScript.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Public-Site Standards

- Public-facing language only on live pages.
- No internal implementation notes, calibration notes, or prompt mechanics on public routes.
- Reports page links to live, current pages when PDF packs are not fully refreshed.
- Research content is split into clear hubs:
  - `/research`
  - `/research/writings`
  - `/research/case-studies`
  - `/research/press`

## SEO, Metadata, and Indexing

- Route-level metadata is managed via `src/components/PageMeta.tsx`.
- Canonical URLs, Open Graph, and Twitter tags are updated per route.
- Sitemap is maintained in `public/sitemap.xml`.
- Crawl policy is in `public/robots.txt`.

## Cache and Deployment Headers

- Netlify redirects are defined in `public/_redirects`.
- Cache behavior and security headers are defined in `public/_headers`.

## Governance and Release Controls

- Public/redacted materials live in this repo (`ikweai`).
- Raw source materials live in `research`.
- Run release guard checks before publishing:

```sh
npm run release:guard
```

Release policy references:

- `governance/CANONICAL_LANGUAGE_EQSB.md`
- `governance/REDACTION_RULES_EQSB.md`
- `governance/RELEASE_WORKFLOW.md`
