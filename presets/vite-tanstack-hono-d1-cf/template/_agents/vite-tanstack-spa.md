## SPA (src/client)

- **TanStack Router**, file-based routes in `src/client/routes/`. `routeTree.gen.ts` is generated (gitignored) — never edit it by hand; the `tanstackRouter` Vite plugin regenerates it.
- The plugin order in `vite.config.ts` is load-bearing: `tanstackRouter()` → `react()` → `cloudflare()`.
- Call the API with the typed Hono client (`hc<AppType>`), importing **only** `type { AppType }` from the worker — no server code in the client bundle. Target relative `/api/...`.
