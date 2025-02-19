// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
	eslint.configs.recommended,
	...compat.extends("next/core-web-vitals"),
	...compat.extends("next/typescript"),
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
			"@next/next/no-img-element": "off",
			"no-case-declarations": "off",
			"no-restricted-imports": [
				"error",
				{
					name: "next/link",
					message: "Please import from `@/lib/i18n/routing` instead.",
				},
				{
					name: "next/navigation",
					importNames: ["redirect", "permanentRedirect", "useRouter", "usePathname"],
					message: "Please import from `@/lib/i18n/routing` instead.",
				},
			],
		},
	},
];

export default config;
