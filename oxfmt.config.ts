import shared from '@rozomod/oxfmt-config/oxfmt' with { type: 'json' };

export default {
  ...shared,
  ignorePatterns: ['docs/**', 'CHANGELOG.md', 'pnpm-lock.yaml', '**/dist/**', '**/.turbo/**'],
};
