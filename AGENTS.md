# mockapi-run AGENTS.md

Operational contributor guide for this project.

## Read this first

- `docs/PRODUCT.md` — product intent, boundaries, and non-goals.
- `docs/ARCHITECTURE.md` — source of truth for structure, dependency direction, and resource flow.

Use this file for workflow, commands, validation, and concise guardrails only.

## Quick workflow

1. Confirm the product boundary in `docs/PRODUCT.md` when scope is unclear.
2. Follow `docs/ARCHITECTURE.md` for file placement and dependency direction.
3. Make the smallest coherent change.
4. If runtime behavior changes, update docs preview data in the same pass.
5. Run the required validation before finishing.

## Commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Preview: `pnpm preview`
- Test: `pnpm test`
- Build: `pnpm build`
- Astro CLI: `pnpm astro`

## Code rules

- Use TypeScript strictly.
- Avoid `any`.
- Keep API responses consistent.
- Do not add external dependencies unless necessary.
- Keep one responsibility per file.
- Keep route files thin in `src/pages`; compose page UI from `src/views` and API behavior from `src/api`.
- Keep runtime mocks, types, API registration, and docs preview aligned when a resource changes.

## Short guardrails

- Respect the dependency direction documented in `docs/ARCHITECTURE.md`.
- `pages` should not be imported by other folders.
- `data` should not import from `views` or `pages`.
- `api` should not import from `views`, `components`, or `pages`.
- Keep SEO basics intact: page metadata, canonical URL, `public/robots.txt`, and `src/pages/sitemap.xml.ts`.

## Validation

Run these before finishing any task:

- `pnpm test`
- `pnpm astro check`
- `pnpm build`

When routes, mocks, API helpers, SEO files, or Astro config change, do not skip any of the commands above.

## Skills to respect

- `astro` — Astro conventions and validation.
- `accessibility` — keyboard and focus correctness.
- `frontend-design` — deliberate UI quality.
- `seo` — metadata, heading hierarchy, and crawlability.
- `typescript-advanced-types` — reusable and readable type design.

## Before finishing

- Run the current validation commands.
- Explain changed files briefly.
