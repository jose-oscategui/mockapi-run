# MockAPI

Public mock REST APIs for frontend demos, testing, tutorials, and prototypes. Built with [Astro](https://astro.build) and fully open source.

**Live site:** [https://mockapi.run](https://mockapi.run)

## What it is

`mockapi-run` provides deterministic, hardcoded JSON resources that you can consume right away—no signup, no tokens, no rate limits. It is designed for:

- Frontend developers building UI against realistic data shapes
- Students learning REST API consumption patterns
- Prototyping teams that need stable example payloads
- Content creators recording demos or writing tutorials

## Features

| Feature | Details |
|---------|---------|
| **6 resource collections** | Users, Posts, Comments, Products, Companies, and Todos |
| **Deterministic data** | Seeded faker datasets so responses stay predictable |
| **Generic REST routes** | One pattern covers lists, detail, search, filtering, and field selection |
| **Resource relations** | Resolve related data such as `/users/1/posts` or `/posts/1/comments` |
| **Docs site included** | Public documentation with sample requests and responses |
| **SEO ready** | Sitemap, robots.txt, and per-page metadata out of the box |
| **TypeScript strict** | No `any`; contracts kept in `src/types` |

## Tech stack

- [Astro](https://astro.build) — framework and SSR API routes
- [TypeScript](https://www.typescriptlang.org) — strict type checking
- [Vitest](https://vitest.dev) — unit testing
- [pnpm](https://pnpm.io) — package manager
- [@faker-js/faker](https://fakerjs.dev) — seeded mock data generation
- Deployed on [Vercel](https://vercel.com) via `@astrojs/vercel` with `output: server`

## Quick start

```bash
# Clone the repo
git clone https://github.com/jose-oscategui/mockapi-run.git
cd mockapi-run

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The site runs at `http://localhost:4321`. API routes are available under `/api/*`.

## Available scripts

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Start the Astro dev server |
| `pnpm build` | Build the project for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm test` | Run the Vitest test suite |
| `pnpm astro` | Run Astro CLI commands |

## API overview

### Base URL

```
https://mockapi.run/api
```

### Resources

| Category | Description |
|----------|-------------|
| `/api/users` | User profiles with roles, statuses, and related resources |
| `/api/posts` | Blog posts with authors, tags, and publishing states |
| `/api/comments` | Comments linked to posts, products, users, companies, and todos |
| `/api/products` | Catalog products with pricing, inventory, and company ownership |
| `/api/companies` | Company profiles with locations, hiring stats, and related products |
| `/api/todos` | Task items assigned to users with comment activity |

### Common route patterns

```
GET /api/{category}           # List collection
GET /api/{category}?search=term    # Search by term
GET /api/{category}?field=value   # Filter by field
GET /api/{category}?fields=id,name  # Pick specific fields
GET /api/{category}/{id}      # Single item
GET /api/{category}/{id}/{relation} # Related resources
```

### Examples

```bash
# List users
curl https://mockapi.run/api/users

# Search posts
curl "https://mockapi.run/api/posts?search=react"

# Filter by nested field
curl "https://mockapi.run/api/users?company.name=Romaguera-Crona"

# Select only specific fields
curl "https://mockapi.run/api/posts?fields=id,title,slug"

# Get a user's posts
curl https://mockapi.run/api/users/1/posts

# Get comments for a post
curl https://mockapi.run/api/posts/1/comments
```

## Project structure

```
mockapi-run/
├── docs/
│   ├── ARCHITECTURE.md          # Structure, dependency direction, resource flow
│   └── PRODUCT.md               # Product goals, boundaries, and non-goals
├── public/
│   ├── robots.txt               # Crawl policy and sitemap reference
│   └── seo/                     # OG/social/icon assets
├── src/
│   ├── api/                     # Runtime API support (collections, query, relations, response)
│   ├── components/              # Reusable UI building blocks
│   ├── data/
│   │   ├── sidebar.ts           # Docs navigation model
│   │   └── endpoints/           # Endpoint docs previews and registry
│   ├── layouts/                 # Shared layout shells
│   ├── mocks/
│   │   └── resources/           # In-memory mock datasets per resource
│   ├── pages/                   # Astro routes (site + API)
│   ├── types/
│   │   ├── api/                 # API-only contracts
│   │   └── resources/           # Domain/resource types
│   └── views/                   # Page compositions and sections
├── AGENTS.md                    # Contributor workflow, validation, and guardrails
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## How to add a new resource

When adding a resource, update these areas together so runtime behavior and docs stay aligned:

| Area | Purpose |
|------|---------|
| `src/types/resources` | Add the resource TypeScript contract |
| `src/mocks/resources` | Create the seeded mock dataset |
| `src/api/collections.ts` | Register the collection |
| `src/api/relations.ts` | Register any resource relations |
| `src/data/endpoints/resources` | Add preview docs for the new resource |
| `src/data/endpoints/registry.ts` | Include the resource in the docs registry |

## Contributing

1. Confirm the product boundary in `docs/PRODUCT.md` when scope is unclear.
2. Follow `docs/ARCHITECTURE.md` for file placement and dependency direction.
3. Make the smallest coherent change.
4. If runtime behavior changes, update docs preview data in the same pass.
5. Run the validation commands below before opening a PR.

### Code style

- Use TypeScript strictly and avoid `any`.
- Keep one responsibility per file.
- Keep route files thin; compose page UI from `src/views` and API behavior from `src/api`.
- Do not add external dependencies unless necessary.

## Validation

Run these before finishing any task or opening a PR:

```bash
pnpm test          # Run the test suite
pnpm astro check   # Type and config validation
pnpm build         # Build verification
```

When routes, mocks, API helpers, SEO files, or Astro config change, do not skip any of the commands above.

## Deployment

The project is configured for server output (`output: server`) and deploys to Vercel via `@astrojs/vercel`. You can also deploy anywhere that supports Astro SSR.

## Roadmap & non-goals

**Current direction**

- Keep the resource model simple and easy to extend
- Maintain parity between runtime responses and public documentation previews
- Keep SEO basics intact (metadata, sitemap, robots.txt)

**Out of scope**

- Authentication or authorization
- Real persistence or database-backed state
- Write operations with durable storage
- Multi-tenant security or business workflows
- Highly dynamic or user-customizable data generation at runtime

## License

[MIT](LICENSE)

---

Made with care for developers who need stable, predictable mock data.
