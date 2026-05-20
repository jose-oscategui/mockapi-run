# Product

## Goal

Provide a simple public fake API for frontend demos, tutorials, prototypes, and testing.

The product should stay easy to browse, predictable to consume, and simple to extend with new resources.

Use `docs/ARCHITECTURE.md` for implementation structure and `AGENTS.md` for contributor workflow.

## Main users

- Frontend developers
- Students learning API consumption patterns
- Prototyping teams
- Content creators building demos or tutorials

## Core product characteristics

- Public mock REST endpoints under `https://mockapi.run/api/*`
- Hardcoded, deterministic resource data for predictable examples
- Lightweight documentation previews that mirror runtime behavior
- Simple resource model that is easy to understand and extend

## Non-goals

- Authentication or authorization
- Real persistence or database-backed state
- Write operations with durable storage
- Production-grade backend concerns such as multi-tenant security or business workflows
- Highly dynamic or user-customizable data generation at runtime

## Product boundaries

- This project is a mock API product, not a real backend platform.
- The main value is fast setup, stable example payloads, and clear public endpoints.
- Changes should favor clarity and consistency over backend complexity.
- Public documentation previews should stay aligned with runtime behavior.

## Success criteria

- A frontend developer can consume an endpoint without reading internal code.
- A contributor can add a new resource by following the documented architecture.
- Runtime responses and documentation previews stay aligned.
