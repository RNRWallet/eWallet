// @see http://json.schemastore.org/prettierrc

module.exports = {
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.json5',
      options: {
        parser: 'json',
        // Renovate wants double quotes
        singleQuote: false,
      },
    },
    {
      files: '*.sql',
      options: {
        keywordCase: 'upper',
        language: 'postgresql',
      },
    },
    {
      files: 'tsconfig.json',
      options: {
        // By default and correctly `jsonc`, ts-jest can't parse trailing commas.
        parser: 'json',
      },
    },
  ],
  plugins: [
    require.resolve('@prettier/plugin-xml'),
    require.resolve('prettier-plugin-gherkin'),
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-sql'),
  ],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  xmlSortAttributesByKey: true,
}
