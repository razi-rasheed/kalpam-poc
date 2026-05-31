## Tooling

- Package manager: **pnpm 11** (workspaces). Node **24** (`nvm use`). Turborepo orchestrates `build`/`check-types`/`test`/`dev`.
- Lint/format: **oxlint** + **oxfmt** (config from `@kalpam/*`). Run `pnpm lint` / `pnpm format`. Never hand-format; let oxfmt own style.
- Tests: **Vitest 4**. App tests run in the Cloudflare Workers pool (real workerd + local D1).
- Git hooks (lefthook): pre-commit lints/formats staged files; commit-msg enforces Conventional Commits; pre-push runs typecheck + lint + test. Do not bypass with `--no-verify`.
