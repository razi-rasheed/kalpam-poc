import { defineConfig } from 'oxlint';
import rozomod from '@rozomod/oxlint-config';

export default defineConfig({
  extends: [rozomod],
  // env is NOT inherited through extends (oxc#20087); kalpam is a Node tooling repo.
  env: { node: true, es2024: true },
});
