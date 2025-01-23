import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { locales } from "./locales";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale: locales[0],
});

export const { Link, redirect, permanentRedirect, usePathname, useRouter } =
	createNavigation(routing);
