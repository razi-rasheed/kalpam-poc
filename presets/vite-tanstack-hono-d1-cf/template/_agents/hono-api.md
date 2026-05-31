## API (src/worker)

- The Worker entry (`src/worker/index.ts`) is a Hono app: `new Hono<{ Bindings: Env }>()`, routes mounted under `/api`, `export default app`.
- Export `type AppType = typeof app` for the client. Bindings come from the `wrangler types`-generated global `Env`.
- Access D1 via `createDb(c.env.DB)` from `@<project>/db`. Do not open raw D1 statements in route handlers when a Drizzle query exists.
- No catch-all route — non-`/api` paths are served by the SPA asset layer before the Worker runs.
