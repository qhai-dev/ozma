import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { getUserLocale } from '@/libs/i18n/server';
import { LocaleProvider } from '@/providers/intl-provider';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations('metadata');
  return {
    title: {
      template: `%s-火山引擎`,
      default: '火山引擎',
    },
  };
}

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  const lang = await getUserLocale();

  return (
    <html lang={lang} suppressHydrationWarning className='h-full w-full'>
      <body className='h-full w-full overflow-hidden'>
        <ThemeProvider>
          <LocaleProvider>
            <QueryProvider>{children}</QueryProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
