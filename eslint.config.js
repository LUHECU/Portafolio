import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.astro"],
    laguageOptions: {
      parser: eslintPluginAstro.parsers.astro,
      parserOptions: {
        parser: tseslint.parsers.typescript,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-unused-define-vars-in-style": "warn",
      "astro/no-conflict-set-directives": "error",
      "astro/valid-compile": "error",
      "astro/prefer-class-list-directive": "warn",
      "astro/no-inline-styles": "off",
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "error",
      curly: "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];
