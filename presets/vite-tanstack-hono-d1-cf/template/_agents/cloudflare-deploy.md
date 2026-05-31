## Cloudflare deploy

- One Worker serves everything: static SPA assets + the Hono API. **One origin, no CORS** — never add CORS middleware.
- `wrangler.jsonc` is the source of truth for bindings. After editing it, run `pnpm cf-typegen` (`wrangler types`) to regenerate `worker-configuration.d.ts`.
- `run_worker_first: ["/api/*"]` routes API paths to the Worker; everything else is the SPA (`not_found_handling: single-page-application`). Do not set `assets.directory` — the Vite plugin supplies it.
- D1 binding is `DB`. The remote `database_id` is filled after `wrangler d1 create`; secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) live in CI, never in the repo.
