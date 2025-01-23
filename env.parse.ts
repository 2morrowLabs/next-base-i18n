import { z } from "zod";

const EnvVarsSchema = z.object({});

export function requireEnvVars() {
	const result = EnvVarsSchema.safeParse(process.env);

	if (!result.success) {
		const errorMessage = result.error.errors
			.map((error) => {
				return `${error.path.join(".")}: ${error.message}\n`;
			})
			.join("\n");

		throw new Error(`Missing required environment variables:\n${errorMessage}`);
	}
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof EnvVarsSchema> {}
	}
}
