import { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';

export function LocaleProvider({ children }: PropsWithChildren) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
