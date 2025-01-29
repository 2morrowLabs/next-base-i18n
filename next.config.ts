import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		unoptimized: true,
	},
	async headers() {
		if (process.env.NODE_ENV !== "production") {
			return [];
		}

		return [
			{
				source: "/:all*(css|js|ico|gif|svg|jpg|jpeg|png|woff|woff2|pdf)",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000",
					},
				],
			},
		];
	},
};

export default withNextIntl(nextConfig);
