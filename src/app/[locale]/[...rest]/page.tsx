import type { LocaleParam } from "@/utils/next";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata(props: LocaleParam): Promise<Metadata> {
	setRequestLocale((await props.params).locale);
	const t = await getTranslations("NotFound");

	return {
		title: t("title"),
	};
}

export default function CatchAllPage() {
	notFound();
}
