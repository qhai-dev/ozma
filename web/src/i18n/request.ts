import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const res = await fetch(`http://14.103.230.114:9000/admin/${locale}.json`);
  const messages = await res.json();

  return {
    locale,
    messages,
  };
});
