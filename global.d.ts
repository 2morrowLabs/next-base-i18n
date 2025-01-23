import type en from "./src/locales/en.json";

type Messages = typeof en;

declare global {
	interface IntlMessages extends Messages {}
}
