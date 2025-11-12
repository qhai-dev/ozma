import { getRequestConfig } from 'next-intl/server';

import { getUserLocale } from './server';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../message/${locale}.json`)).default,
  };
});
