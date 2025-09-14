import { getRequestConfig } from 'next-intl/server';

import { getLocale } from './server';

export default getRequestConfig(async () => {
	const locale = await getLocale();
	const message = await import(`./locales/${locale}.json`);

	return {
		locale,
		messages: message.default,
	};
});
