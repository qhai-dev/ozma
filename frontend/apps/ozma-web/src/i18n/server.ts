'use server';

import { cookies } from 'next/headers';

import { defaultLocale, Locale } from './config';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  const cookie = await cookies();
  const locale = cookie.get(COOKIE_NAME);
  return locale?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
}
