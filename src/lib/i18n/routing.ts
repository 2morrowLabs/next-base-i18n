import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./locales";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale,
});

export const { Link, redirect, permanentRedirect, usePathname, useRouter } =
	createNavigation(routing);
