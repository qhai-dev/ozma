'use server';

import { cookies } from 'next/headers';

import { defaultLocale, LOCALE_COOKIE_NAME } from './index';
import type { Locale } from './index';

export async function getLocale() {
	const cookie = await cookies();
	const locale = cookie.get(LOCALE_COOKIE_NAME);
	if (!locale) return defaultLocale;
	return locale.value as Locale;
}

export async function setLocale(locale: Locale) {
	const cookie = await cookies();
	cookie.set(LOCALE_COOKIE_NAME, locale);
}
