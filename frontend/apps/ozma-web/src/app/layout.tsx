import { PropsWithChildren, ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

import { Toaster } from 'sonner';

import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations('metadata');
  return {
    title: {
      template: `%s-管理后台`,
      default: '',
    },
  };
}

type Props = {
  modal: ReactNode;
};

export default async function LocaleLayout({ children, modal }: Readonly<PropsWithChildren<Props>>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning className='h-full w-full'>
      <body className='h-full w-full overflow-hidden'>
        <ThemeProvider>
          <NextIntlClientProvider>
            <QueryProvider>
              <div id='modal-root'></div>
              {modal}
              <Toaster position='top-center' offset={{ top: '30px' }} />
              <Suspense>{children}</Suspense>
            </QueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
