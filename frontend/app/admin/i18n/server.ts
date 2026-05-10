import { cookies } from "next/headers";

import { Locale } from "./language";

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(process.env.LOCALE_COOKIE_KEY, locale);
}
