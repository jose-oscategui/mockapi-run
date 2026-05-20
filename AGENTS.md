# AGENTS.md

Working guide for this project.

For the full structural explanation, read `docs/ARCHITECTURE.md` first.

## Project overview

This is a minimal fake REST API built with Astro and TypeScript.

The project exposes hardcoded mock APIs for public consumption under `https://mockapi.run/api/*`.
The API should stay easy to browse, predictable to consume, and simple to extend with new resources.

For product intent and non-goals, read `docs/PRODUCT.md`.
For project structure, architecture, and resource flow, use `docs/ARCHITECTURE.md` as the source of truth.

## Commands

Current scripts:

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`

Planned scripts for future implementation:

- `# Test: pnpm test`
- `# Lint: pnpm lint`

## Code rules

- Use TypeScript strictly.
- Avoid `any`.
- Keep API responses consistent.
- Do not add external dependencies unless necessary.
- Keep one responsibility per file.
- Keep site routes thin in `src/pages`; compose from views for pages and from API support modules for endpoints.
- Keep runtime mock data in `src/mocks/resources`.
- Keep API support logic in `src/api`.
- Keep endpoint documentation preview data in `src/data/endpoints/resources` and register groups in `src/data/endpoints/registry.ts`.
- Keep reusable domain types in `src/types/resources` and API-only types in `src/types/api`.
- When runtime behavior changes, update preview docs too.
- Keep SEO basics in place: per-page metadata, canonical URLs, `public/robots.txt`, and `src/pages/sitemap.xml.ts`.

## Architecture guardrails

- Keep dependency direction aligned with `docs/ARCHITECTURE.md`.
- `pages` should not be imported by other folders.
- `data` should not import from `views` or `pages`.
- `api` should not import from `views`, `components`, or `pages`.
- If you add or change a resource, update types, mocks, API runtime registration, and preview docs together.

## Validation

When changing routes, mocks, API helpers, or Astro config, run:

- `pnpm astro check`
- `pnpm build`

Before finishing any task with the current repo setup, run:

- `pnpm astro check`
- `pnpm build`

Planned finishing checks for future implementation:

- `# pnpm lint`
- `# pnpm test`

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

## Before finishing

- Run the currently available validation commands.
- Keep planned `lint` and `test` commands commented until they are implemented in `package.json`.
- Explain changed files briefly.
