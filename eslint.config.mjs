import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // 👇 add overrides
      "react/no-unescaped-entities": "off",   // allow ' and " in JSX
      "@typescript-eslint/ban-ts-comment": "off", // allow @ts-ignore
      "@typescript-eslint/no-unused-vars": "warn", // don’t block build, just warn
      "@typescript-eslint/no-unused-expressions": "warn", // don’t block build
    },
  },
];

export default eslintConfig;
