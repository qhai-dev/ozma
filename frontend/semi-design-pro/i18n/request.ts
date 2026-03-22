import { Locale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
	const store = await cookies();
	const locale = store.get(process.env.LOCALE_COOKIE_KEY)?.value as Locale || 'zh-CN'

	return {
		locale,
		messages: (await import(`../locales/${locale}.json`)).default,
	};
});
