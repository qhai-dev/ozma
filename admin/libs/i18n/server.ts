'use server';

import { cookies } from 'next/headers';

import type { Locale } from './types';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale(): Promise<Locale> {
  const cookie = await cookies();
  return (cookie.get(COOKIE_NAME)?.value as Locale) || 'zh-CN';
}

export async function setUserLocale(locale: Locale) {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale, {
    expires: new Date(Date.now() + 86400000),
  });
}
