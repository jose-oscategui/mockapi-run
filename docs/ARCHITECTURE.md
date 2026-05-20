# mockapi-run Architecture

This document gives a fast, practical understanding of the `mockapi-run` codebase so contributors can add new API resources without reverse-engineering the whole project.

## Quick path

1. Read the `src/` structure below.
2. Follow the resource flow: `types -> mocks -> api -> pages -> docs preview`.
3. When adding a new resource, update mock data, API registration, relations, and docs preview together.

## 1. Project Structure

```txt
mockapi-run/
├── docs/
│   └── ARCHITECTURE.md
├── public/
│   ├── robots.txt                   # Crawl policy and sitemap reference
│   └── seo/                         # Future OG/social/icon assets
├── src/
│   ├── api/                         # Runtime API support layer
│   │   ├── collections.ts           # Category -> collection registry
│   │   ├── guards.ts                # Category guards
│   │   ├── query.ts                 # Filtering, nested query, field picking
│   │   ├── relations.ts             # Resource relations map
│   │   └── response.ts              # JSON response helper
│   ├── components/                  # Reusable UI building blocks
│   ├── data/
│   │   ├── sidebar.ts               # Docs navigation model
│   │   └── endpoints/
│   │       ├── registry.ts          # Endpoint groups shown in docs
│   │       ├── factories/           # Shared endpoint preview builders
│   │       └── resources/           # Preview docs per API resource
│   ├── layouts/                     # Shared layout shells
│   ├── mocks/
│   │   └── resources/               # Runtime mock datasets per resource
│   ├── pages/                       # Astro routes, including API routes
│   │   └── sitemap.xml.ts           # Generated sitemap for crawlable pages
│   ├── types/
│   │   ├── api/                     # API-only contracts
│   │   └── resources/               # Domain/resource types
│   └── views/                       # Page compositions and page-scoped sections
├── AGENTS.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 2. High-Level System Diagram

```txt
[Docs Visitor] ------> [Astro site routes in src/pages]
                             |
                             v
                        [src/views + src/components]
                             |
                             v
                    [src/data/endpoints/registry.ts]

[API Consumer] -----> [/api/[category] routes]
                             |
                             v
                           [src/api]
                    /         |         \
                   v          v          v
         [collections]   [relations]   [query helpers]
                   \         |         /
                    v        v        v
                 [src/mocks/resources]
                             |
                             v
                    [src/types/resources]
```

## 3. Core Components

### 3.1 Frontend / Site Layer

**Name:** Documentation site

**Description:** Public Astro site that explains available mock API resources and shows sample request/response shapes.

**Technologies:** Astro, TypeScript, Astro components

**Deployment:** Vercel via Astro server output

**SEO responsibilities:** Per-page metadata via `src/layouts/layout.astro`, crawl hints via `public/robots.txt`, sitemap generation via `src/pages/sitemap.xml.ts`, and future social assets under `public/seo/`.

### 3.2 Runtime API Layer

**Name:** Mock API runtime

**Description:** Generic Astro API routes that expose resource collections, item detail, filtering, field selection, and resource relations from hardcoded datasets.

**Technologies:** Astro API routes, TypeScript

**Deployment:** Vercel server runtime

## 4. Generic API Behavior

The runtime API follows one generic route pattern:

| Route | Responsibility |
|------|----------------|
| `/api/[category]` | List a resource collection, apply field filters, search, and `fields` selection |
| `/api/[category]/[id]` | Return a single resource by ID |
| `/api/[category]/[id]/[relation]` | Resolve related resources such as `user`, `comments`, or `post` |

This design keeps route files thin and moves behavior into `src/api` plus resource datasets in `src/mocks/resources`.

## 5. Data Stores

### 4.1 In-memory mock datasets

**Name:** Resource mocks

**Type:** TypeScript in-memory collections

**Purpose:** Source of truth for mock API payloads during request handling.

**Important note:** There is currently no database. Runtime data comes directly from TypeScript files in `src/mocks/resources`.

**Key collections:** `users`, `posts`, `comments`, `todos`

## 6. External Integrations / APIs

### 5.1 Public image placeholder services

**Services:** `picsum.photos`, `pravatar.cc`

**Purpose:** Provide stable-looking mock avatars and cover images for sample data.

**Integration Method:** URL references embedded in mock data

## 7. Deployment & Infrastructure

- **Framework:** Astro
- **Output mode:** `server`
- **Target platform:** Vercel via `@astrojs/vercel`
- **API routing style:** dynamic category-based SSR routes under `src/pages/api/[category]`
- **Canonical site URL:** `https://mockapi.run`

## 8. Security Considerations

- No real authentication or authorization is implemented; this is a public mock API project.
- Main runtime concern is route clarity and avoiding duplicate dynamic route shapes in Astro.
- Public endpoints should stay deterministic and safe to consume for demos, prototypes, and tests.

## 9. Development & Testing Environment

- **Package manager:** `pnpm`
- **Primary validation:** `pnpm astro check`
- **Build verification:** `pnpm build`

### Local change workflow

1. Update resource types if shape changed.
2. Update mock data in `src/mocks/resources`.
3. Update API runtime registration in `src/api`.
4. Update docs preview in `src/data/endpoints/resources` and registry if needed.
5. If crawlable pages changed, update `public/robots.txt` or `src/pages/sitemap.xml.ts`.
6. Run validation.

## 10. Resource Extension Pattern

When adding a new resource, touch these areas together:

| Area | Purpose |
|------|---------|
| `src/types/resources` | Resource contract |
| `src/mocks/resources` | Dataset / mock behavior |
| `src/api/collections.ts` | Register collection |
| `src/api/relations.ts` | Register relations |
| `src/data/endpoints/resources` | Preview docs |
| `src/data/endpoints/registry.ts` | Add docs section |

This keeps runtime behavior and public documentation aligned.

## 11. Future Considerations / Roadmap

- If the number of resources grows significantly, consider `src/api/resources/<resource>/...` for stronger runtime cohesion by resource.
- If docs previews become more complex, consider stronger typing for endpoint examples and registry groups.
- If query logic expands, split `src/api/query.ts` into filtering, field selection, and nested access modules.

## 12. Project Identification

- **Project Name:** mockapi-run
- **Repository URL:** `https://github.com/jose-oscategui/mockapi-run`
- **Primary API Base Path:** `https://mockapi.run/api/*`
- **Last Updated:** 2026-05-20

## 13. Glossary

- **Resource:** A public API collection such as users, posts, comments, or todos.
- **Docs preview:** The documented sample request/response examples shown on the site.
- **Runtime collection:** The actual in-memory dataset exposed by the generic API routes.
