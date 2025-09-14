export const locales = [
	{
		value: 'zh-CN',
		name: '简体中文',
	},
	{
		value: 'en-US',
		name: 'English (United States)',
	},
];

export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

export const defaultLocale: Locale = 'zh-CN';

export type Locale = 'en-US' | 'zh-CN';
