const { defineConfig } = require('eslint/config');
const globals = require('globals');
const js = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const pluginJest = require('eslint-plugin-jest');

module.exports = defineConfig([
  eslintPluginPrettierRecommended,
  {
    name: 'api-bookstore/globals',
    files: [
      'src/**/*.{js,mjs,cjs}',
      'src/**/**/*.test.{js,mjs,cjs}',
      'src/*.{js,mjs,cjs}',
      '*.config.{js,mjs,cjs}',
      '*.{js,mjs,cjs}',
    ],
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: { ...globals.node, ...pluginJest.environments.globals.globals },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedInlineConfigs: 'error',
      reportUnusedDisableDirectives: 'error',
    },
    plugins: { js, jest: pluginJest },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          tabs: false,
          semi: true,
          singleQuote: true,
          quoteProps: 'as-needed',
          trailingComma: 'all',
          bracketSpacing: true,
          objectWrap: 'collapse',
          bracketSameLine: false,
          arrowParens: 'always',
        },
      ],
    },
  },
]);
