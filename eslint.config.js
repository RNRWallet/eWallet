import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const tsConfigs = ['tsconfig.json']

const compat = new FlatCompat()

export default tseslint.config(
  { extends: [eslint.configs.recommended], files: ['**/*.{ts,js}'] },
  {
    extends: [
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
    ],
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      /**
       * Silence warnings when using underscores as argument name
       * Also has the default rules specified in `eslint:recommended`
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_.*',
        },
      ],
    },
  },
  {
    ignores: ['eslint.config.js', '**/dist/**', '**/node_modules/**'],
  },
  {
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 2023,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...compat.config({
    extends: [
      'plugin:sort/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier',
    ],
    plugins: ['unused-imports', 'import', 'sort', 'check-file'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        // Fixes eslint not finding builtin node modules.
        node: {
          extensions: ['.js', '.ts'],
          paths: ['node_modules/'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: tsConfigs,
        },
      },
    },
  }),
  {
    extends: [json.configs.recommended],
    files: ['**/*.json'],
    language: 'json/json',
  },
  {
    extends: [json.configs.recommended],
    files: ['**/*.json5'],
    language: 'json/json5',
  },
  {
    extends: [markdown.configs.recommended],
    files: ['**/*.md'],
    language: 'markdown/gfm',
  },
  {
    rules: {
      'consistent-return': 'warn',
      curly: 'error',
      'func-style': ['warn', 'declaration'],
      'import/default': 'error',
      'import/named': 'error',
      // @WARN Slow rule
      'import/namespace': 'error',
      // @WARN Slow rule
      'import/no-cycle': 'error',
      // Rule has no autofix option,
      // left at `warn` level for developers to incrementally change the code.
      'import/no-default-export': 'warn',
      'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      // conflicts esModuleInterop if module doesn't have a default import
      // setting this to `warn` fill fix the issues where possible, and not complain where it's not
      'import/no-namespace': 'warn',
      'import/no-unused-modules': 'error',
      'import/no-useless-path-segments': 'error',
      'no-case-declarations': 'off',
      'no-console': 'error',
      'no-else-return': 'error',
      // Some eslint plugins will delete inline comments when refactoring code.
      'no-inline-comments': 'error',
      'no-lonely-if': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      'no-unneeded-ternary': 'error',
      'no-useless-rename': 'error',
      // Sort keys alphabetically for consistency.
      // Marked as a warning due to the high number of files this would affect. Autofix will normalize it in time.
      // Import sorting is handled by the prettier import plugin
      'sort/import': 'off',
      'sort/import-members': 'off',
      'sort/string-enums': 'warn',
      'sort/string-unions': 'warn',
      'sort/type-properties': 'warn',
    },
  },
  {
    files: ['apps/**', 'packages/**'],
    rules: {
      'check-file/filename-naming-convention': [
        'warn',
        {
          '**/*.ts': 'KEBAB_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],
      'check-file/folder-naming-convention': [
        'warn',
        {
          '**/!(__fixtures__|__nock-fixtures__|__snapshots__)/?([A-Z]*)/':
            'KEBAB_CASE',
        },
      ],
    },
  }
)
