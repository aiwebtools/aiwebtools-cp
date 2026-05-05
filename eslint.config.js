import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "no-restricted-syntax": [
        "warn",
        {
          selector: "CallExpression[callee.object.name='window'][callee.property.name='open']",
          message: "Do not call window.open directly. Use openDestinationUrl from '@/utils/effects/domEffects' so retries, timeouts, and fallbacks apply.",
        },
      ],
    },
  },
  {
    // The opener helper itself is allowed to call window.open as a fallback.
    files: ["src/utils/effects/domEffects.ts"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
);
