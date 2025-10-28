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
  },
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable completely for production builds
      "@typescript-eslint/no-explicit-any": "warn", // Keep as warning
      "@typescript-eslint/no-unused-vars": "warn", // Keep as warning
      "@next/next/no-img-element": "warn", // Change to warning instead of error
    },
  },
];

export default eslintConfig;
