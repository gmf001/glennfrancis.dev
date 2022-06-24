module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  trailingComma: 'none',
  arrowParens: 'always',
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
