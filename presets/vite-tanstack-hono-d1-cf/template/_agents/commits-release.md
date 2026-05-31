## Commits & releases

- **Conventional Commits** required (`feat:`, `fix:`, `chore:`, …). The commit-msg hook rejects non-conforming messages.
- Releases are automated by **semantic-release** on merge to `main`: it computes the next semver, writes `CHANGELOG.md`, tags, and creates a GitHub Release. This is an **app**, so there is **no npm publish**.
- The release tag **gates the Cloudflare deploy** (the `deploy` job runs only after a release is cut). Do not deploy manually from `main`.
