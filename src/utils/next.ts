export type NextParams<List extends string> = {
	params: Promise<Record<List, string>>;
};

export type NextSearchParams = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type LocaleParam = NextParams<"locale">;

// Function with overrides.
export async function getSearchParam(
	searchParams: NextSearchParams["searchParams"],
	name: string,
	defaultValue?: undefined
): Promise<string | null>;
export async function getSearchParam(
	searchParams: NextSearchParams["searchParams"],
	name: string,
	defaultValue: string
): Promise<string>;
export async function getSearchParam(
	searchParams: NextSearchParams["searchParams"],
	name: string,
	defaultValue?: string
) {
	const value = (await searchParams)[name];

	if (typeof value === "string") {
		return value;
	}

	return defaultValue ?? null;
}
