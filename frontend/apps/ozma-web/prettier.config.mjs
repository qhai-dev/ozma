/** @type {import("prettier").Config}*/
const config = {
  proseWrap: 'never',
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'es5',
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: true,
  useTabs: false,
  semi: true,
  // tailwindcss
  tailwindStylesheet: './app/globals.css',
  tailwindFunctions: ['cva', 'cn'],
  // sort imports
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^next-.*',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^types$',
    '',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
