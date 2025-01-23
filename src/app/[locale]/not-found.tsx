"use client";

import { Link } from "@/lib/i18n/routing";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
	const t = useTranslations("NotFound");

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<h2 className="text-2xl font-bold">{t("title")}</h2>
			<p>{t("description")}</p>
			<Link
				href="/"
				className="mt-3 flex items-center rounded-lg bg-gray-950 px-3 py-3 font-semibold uppercase text-gray-100 transition hover:bg-gray-800 hover:text-gray-50"
			>
				<ChevronLeftIcon className="size-6" />
				{t("goToHome")}
			</Link>
		</div>
	);
}
