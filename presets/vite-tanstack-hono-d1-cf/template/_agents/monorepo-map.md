## Layout

- `apps/web` — the deployable: Vite SPA (`src/client`) **and** the Hono Worker (`src/worker`) in one package, deployed as a single Cloudflare Worker + Static Assets.
- `packages/db` — Drizzle schema + D1 helpers (`@<project>/db`). Imported by the worker via `workspace:*`.
- Generated config (`tsconfig`, oxlint, oxfmt, vitest, commitlint, semantic-release) extends the published `@kalpam/*` packages — edit those upstream in `rozomod/kalpam`, not here.
