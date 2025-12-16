import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Toaster } from 'sonner';

import { routing } from '@/i18n/routing';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations('metadata');
  return {
    title: {
      template: `%s`,
      default: '首页',
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning className='h-full w-full'>
      <body className='h-full w-full overflow-hidden'>
        <ThemeProvider>
          <NextIntlClientProvider>
            <QueryProvider>
              <Toaster position='top-center' offset={{ top: '30px' }} />
              <Suspense>{children}</Suspense>
            </QueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
