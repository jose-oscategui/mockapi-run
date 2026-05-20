# AGENTS.md

Working guide for this project.

For the full structural explanation, read `docs/ARCHITECTURE.md` first.

## Project purpose

- This project exposes hardcoded mock APIs for public consumption.
- The canonical public API root is `https://mockapi.run/api/*`.
- The API should stay easy to browse, predictable to consume, and simple to extend with new resources.

## Core rules

- Keep one responsibility per file.
- Keep site routes thin in `src/pages`; compose from views for pages and from API support modules for endpoints.
- Keep runtime mock data in `src/mocks/resources`.
- Keep API support logic in `src/api`.
- Keep endpoint documentation preview data in `src/data/endpoints/resources` and register groups in `src/data/endpoints/registry.ts`.
- Keep reusable domain types in `src/types/resources` and API-only types in `src/types/api`.
- When runtime behavior changes, update preview docs too.
- Keep SEO basics in place: per-page metadata, canonical URLs, `public/robots.txt`, and `src/pages/sitemap.xml.ts`.

## Current support structure

- `src/api` — runtime API helpers like collections, relations, guards, query shaping, and JSON responses.
- `src/data/endpoints/registry.ts` — docs registry for all endpoint groups.
- `src/data/endpoints/factories` — shared endpoint-doc builders.
- `src/data/endpoints/resources` — preview docs per resource.
- `src/mocks/resources` — mock datasets per resource.
- `src/types/api` — API-specific contracts.
- `src/types/resources` — resource/domain contracts.

## Dependency direction

Use this mental model:

`types -> mocks/data -> api -> pages`

And for the site side:

`data -> components/views -> pages`

Additional rules:

- `pages` should not be imported by other folders.
- `data` should not import from `views` or `pages`.
- `api` should not import from `views`, `components`, or `pages`.

## Placement checklist

- Route definition? → `src/pages`
- Page/section composition? → `src/views`
- Shared structural shell? → `src/layouts`
- Reusable UI block? → `src/components`
- Navigation/content/preview data? → `src/data`
- Endpoint preview docs? → `src/data/endpoints/resources`
- API runtime helper or registry? → `src/api`
- Mock payload/behavior? → `src/mocks/resources`
- Reusable type? → `src/types/api` or `src/types/resources`

## Validation

When changing routes, mocks, API helpers, or Astro config, run:

- `pnpm astro check`
- `pnpm build`

## SEO notes

- `src/layouts/layout.astro` is the shared SEO metadata shell.
- Define page-specific `title` and `description` at the page level.
- `astro.config.mjs` must keep the production `site` URL accurate.
- `public/robots.txt` should reference the live sitemap and keep `/api/` out of indexing.
- `src/pages/sitemap.xml.ts` is the canonical sitemap source for crawlable pages.
- Future OG/social assets should live under `public/seo/` and should only be referenced once the real files exist.

## Skills to respect

- `astro` — Astro conventions and validation.
- `accessibility` — keyboard/focus/accessibility correctness.
- `frontend-design` — deliberate UI quality.
- `seo` — metadata, heading hierarchy, and clear links.
- `typescript-advanced-types` — reusable and readable type design.
