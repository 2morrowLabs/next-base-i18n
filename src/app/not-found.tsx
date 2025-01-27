"use client";

import { defaultLocale } from "@/lib/i18n/locales";
import { redirect } from "@/lib/i18n/routing";

export default function NotFoundPage() {
	redirect({ href: "/404", locale: defaultLocale });
}
