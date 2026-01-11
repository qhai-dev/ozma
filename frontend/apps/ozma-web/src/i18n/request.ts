import { getRequestConfig } from 'next-intl/server';

import { getUserLocale } from './server';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const res = await fetch(`http://14.103.230.114:9000/admin/${locale}.json`);
  const messages = await res.json();

  return {
    locale,
    messages,
  };
});
