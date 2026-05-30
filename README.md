# kalpam

The kalpam base: shared `@rozomod/*` config packages, canonical git hooks, a shared Renovate preset, and the release pipeline that publishes them. Presets live under `templates/`.

## Packages
- `@rozomod/tsconfig` · `@rozomod/oxlint-config` · `@rozomod/oxfmt-config`
- `@rozomod/vitest-config` · `@rozomod/commitlint-config` · `@rozomod/semantic-release-config`

## Develop
```bash
nvm use && corepack enable
pnpm install   # runs lefthook install
pnpm build && pnpm check-types && pnpm test
```
