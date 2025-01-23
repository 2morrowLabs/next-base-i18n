import type { ReactNode } from "react";
import { requireEnvVars } from "../../env.parse";

export default function RootLayout({ children }: { children: ReactNode }) {
	// Throw an error if any required environment variables are missing.
	requireEnvVars();
	return children;
}
