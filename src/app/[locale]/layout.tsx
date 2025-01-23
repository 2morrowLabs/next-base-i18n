import { locales } from "@/lib/i18n/locales";
import type { LocaleParam } from "@/utils/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LocaleParam): Promise<Metadata> {
	const localeParam = await (await props.params).locale;

	// Ensure that the incoming `locale` is valid
	if (!locales.includes(localeParam as any)) {
		notFound();
	}

	setRequestLocale((await props.params).locale);
	const t = await getTranslations();

	return {
		title: {
			default: t("Root.defaultTitle"),
			template: `%s - ${t("Root.defaultTitle")}`,
		},
		description: t("Root.defaultDescription"),
	};
}

export default async function RootLayout({
	children,
	params,
}: Readonly<
	{
		children: React.ReactNode;
	} & LocaleParam
>) {
	const localeParam = await (await params).locale;

	// Ensure that the incoming `locale` is valid
	if (!locales.includes(localeParam as any)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={localeParam}>
			<body className={`${inter.className} antialiased`}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
