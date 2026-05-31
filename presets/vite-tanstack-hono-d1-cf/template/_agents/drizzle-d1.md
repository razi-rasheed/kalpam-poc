## Data (packages/db)

- Schema in `packages/db/src/schema.ts` using `drizzle-orm/sqlite-core` (D1 is SQLite).
- Workflow: edit schema → `pnpm db:generate` (drizzle-kit writes SQL to `apps/web/migrations`) → `pnpm db:migrate:local` (or `:remote`). **Never hand-edit generated migration files.**
- `wrangler` owns the D1 migration-history table; `migrations_dir` in `wrangler.jsonc` points at the same `apps/web/migrations` directory drizzle-kit writes to.
