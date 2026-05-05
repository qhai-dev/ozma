import { cookies } from "next/headers";

import { Locale } from "./language";

export async function setLocale(locale: Locale) {
  const cookie = await cookies();
  cookie.set(process.env.LOCALE_COOKIE_KEY, locale);
}
