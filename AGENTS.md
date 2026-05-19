# AGENTS.md

Working guide for this project. This is an open-source project that will expose hardcoded APIs of many kinds for any developer to consume. The public root for the API surface is `https://mockapi.run/api/*`. The endpoints are not implemented yet, but the project should be organized so they can scale cleanly as they are added.

## General principle

Each folder in `src/` has a single responsibility. Avoid mixing data, presentation, layout, and route definition.

## Project purpose

- The project is open source.
- It will provide mock API endpoints for many domains and use cases.
- The API should be easy for any developer to consume during prototyping, testing, demos, or learning.
- The canonical public base path is `https://mockapi.run/api/*`.
- For now, endpoint content is documented, but the real route handlers are still pending.

## `src/` structure

| Folder | Responsibility | Main rule |
|---|---|---|
| `src/pages` | Defines Astro routes | Site routes compose `views`; API routes export handlers from `mocks` |
| `src/views` | Contains the actual pages and view-specific sections | Imported by `pages` |
| `src/layouts` | Shared structure across pages | Header, footer, and base layout |
| `src/components` | Reusable components across sections | Must not know about routes |
| `src/data` | Supporting data for views and navigation | Includes `sidebar.ts` |
| `src/data/endpoints` | Preview data for documented endpoints | Shows public URLs and sample endpoint structure before implementation |
| `src/mocks` | Mock endpoint source files | Keep separated by domain or category and export through `pages` |
| `src/types` | General project types | Reusable across data, mocks, views, and components |

## Rules by folder

### `src/pages`

- This is the routing layer.
- Each file represents a public route.
- Site pages must stay lightweight: import a view and render it.
- API route files should also stay thin: import endpoint behavior/data from `src/mocks` and expose it.
- It should not contain business logic or large UI structures.

**Expected responsibility:**
- `index.astro` imports the main home view.
- `docs.astro` imports the main documentation view.
- Future API route files under `src/pages/api/*` should expose the public API surface by delegating to `src/mocks`.

### `src/views`

- This is where the pages live before being imported into `pages`.
- You can organize by experience, for example `home/` and `docs/`.
- A `view` composes sections, layouts, and components.
- If a section belongs to only one page, it can live inside that page folder under `views`.

**Key rule:** `views` builds pages; `pages` only exposes routes.

### `src/layouts`

- Stores shared structural components across pages.
- Examples: `layout.astro`, `header.astro`, `footer.astro`.
- Anything global or repeated across multiple views should be handled here.
- Do not place page-specific data here unless it is truly global.

### `src/components`

- Shared code across different sections.
- They should be reusable and focused pieces.
- Ideal for UI blocks that are not global layout and do not belong exclusively to a single view.
- If a component starts depending too much on one page, consider moving it to `views/<page>/`.

### `src/data`

- Contains supporting data for rendering.
- `sidebar.ts` lives here because it represents the navigation/list structure for documentation.
- Do not mix components or layout here.
- This folder defines content, not presentation.

### `src/data/endpoints`

- This is the preview layer for endpoint documentation.
- It shows the public URL and a small sample of the structure each endpoint will expose.
- It exists before the real mock handlers are implemented in `src/mocks`.
- Keep it focused on documentation data and examples, not route behavior.
- It is the source for docs previews, not the source of truth for runtime handlers.

### `src/mocks`

- This will contain the hardcoded mock endpoints.
- Split files by category or domain to keep them scalable and readable.
- Each file should focus on one coherent endpoint collection.
- Route handlers in `src/pages` should import from here and expose the API surface.
- `src/mocks` is the implementation layer, while `src/data/endpoints` is the preview/documentation layer.
- If endpoint behavior or payloads change, the change should happen here first.

### `src/types`

- General project types belong here.
- Centralize shared interfaces and types.
- Avoid duplicating types across `data`, `views`, and `components`.
- If a type is reusable, it should live here before being repeated elsewhere.

## Recommended dependency direction

Use this mental model to avoid unnecessary coupling:

`types -> data/mocks -> components/views -> pages`

And also:

- `layouts` can be consumed by `views` and `pages`.
- `mocks` can consume `types`.
- `components` can consume `types` and transformed data.
- `pages` should not be imported from any other folder.
- `data` should not import from `views` or `pages`.
- `data/endpoints` can feed the docs experience and preview cards.
- `pages` can import from `views` for site routes and from `mocks` for API routes.

## Best practices

- Keep one responsibility per file.
- Prefer explicit names over generic names.
- When something is reused across views, move it to `components`.
- When something defines global structure, move it to `layouts`.
- When something is renderable content or configuration, move it to `data`.
- When something documents endpoint URLs or sample payload structure, move it to `data/endpoints`.
- When something defines mock API payloads or behavior, move it to `mocks`.
- When something models data shape, move it to `types`.
- Avoid large logic blocks inside `pages`.

## Separation between preview and implementation

- `src/data/endpoints` documents what an endpoint will look like.
- `src/mocks` implements the hardcoded payloads or handler behavior behind that endpoint.
- If a documented endpoint evolves, keep preview data and mock implementation aligned.
- Do not turn documentation preview files into runtime route logic.

## Local `.agents` skills

This project has local skills that should be respected when working on UI, content, and typing.

### `astro`

- Treat the project as a standard Astro app: `src/pages` defines routes and the rest supports that structure.
- When there are relevant integration or configuration changes, validate with `npx astro check`.
- If plugins/integrations are added or changed, re-run sync and project checks.
- If there is doubt about framework API or syntax, use the official Astro documentation as the source of truth.

### `accessibility`

- Every interaction must be keyboard accessible.
- Do not remove focus states; use `:focus-visible` with sufficient contrast.
- Images and interactive icons must have an accessible name (`alt`, `aria-label`, or visible/hidden text as appropriate).
- Account for sticky headers or anchor navigation: use `scroll-margin-top` when needed so focus or targets are not obscured.
- Keep interactive targets comfortably sized, ideally at least `24x24`.

### `frontend-design`

- Do not build generic interfaces: every screen should have an intentional visual direction.
- Choose typography, color, spacing, and composition as a coherent system, not isolated decisions.
- Prioritize finish details: visual hierarchy, rhythm, micro-interactions, and consistency.
- Avoid repetitive styling or “AI slop”; if something is designed, it should feel deliberate.
- Aesthetics must never break performance, clarity, or accessibility.

### `seo`

- Every public page should have a clear purpose, unique titles, and correct heading hierarchy.
- Use clean, descriptive, and consistent URLs.
- Take care of important metadata: `title`, `meta description`, canonical, and `site` where applicable.
- Images should use descriptive filenames and `alt` text.
- Internal links should use clear anchor text, not generic text like “click here”.

### `typescript-advanced-types`

- `src/types` is the main source for reusable project types.
- Avoid duplicating interfaces across `data`, `components`, and `views`.
- When an abstraction repeats, prefer generic, utility, or mapped types before copying structures.
- Design types for compile-time safety and readability, not unnecessary complexity.
- If an advanced type does not improve reuse or clarity, it probably is not needed.

## How to apply these skills in `src`

| Context | Leading skill | Practical rule |
|---|---|---|
| Creating or editing Astro routes/pages | `astro` | site pages expose routes through `views`; API routes stay thin and delegate to `mocks` |
| Building reusable UI | `frontend-design` + `accessibility` | intentional design + focus, keyboard support, and accessible names |
| Endpoint documentation and navigation | `seo` + `accessibility` | correct headings, clear links, usable anchors |
| Mock API implementation | `astro` + `typescript-advanced-types` | keep route files thin and move endpoint logic/data into `src/mocks` |
| Shared data modeling | `typescript-advanced-types` | common types in `src/types`, no duplication |
| Sidebar and endpoint preview data | `seo` + `typescript-advanced-types` | consistent content, clear naming, typed structures in `src/data/endpoints` |

## Checklist before adding code

- Does this define a route? → `src/pages`
- Does this represent a page or a page-specific section? → `src/views`
- Is this shared across pages as base structure? → `src/layouts`
- Is this reused across different sections? → `src/components`
- Is this static or semi-static content/navigation/list data? → `src/data`
- Does this document endpoint URLs or sample response structure? → `src/data/endpoints`
- Does this define mock API payloads or endpoint behavior? → `src/mocks`
- Is this a reusable type? → `src/types`

## Maintenance goal

If we respect these boundaries, the project gains:

- more clarity when adding new pages,
- less coupling between UI and data,
- better component reuse,
- and a more organized foundation for growth.
