"use client";

import { redirect } from "@/lib/i18n/routing";

export default function NotFoundPage() {
	redirect({ href: "/404", locale: "en" });
}
