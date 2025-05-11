import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import sort from 'eslint-plugin-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  sort.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{ts,js}'],
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
    ],
    rules: {
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'no-unused-vars': 'off',
    }
  },
)
