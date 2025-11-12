import { PropsWithChildren } from 'react';

import { Divider } from '@/components/ui/divider';
import { getUserLocale } from '@/libs/i18n/server';

import LocaleSelector from './_components/locale-selector.client';
import ThemeToggle from './_components/theme-toggle.client';

export default async function Layout({ children }: Readonly<PropsWithChildren>) {
  const locale = await getUserLocale();

  return (
    <section className='flex min-h-screen w-full justify-center overflow-hidden bg-background-burn p-6'>
      <div className='flex w-full shrink-0 flex-col rounded-2xl border border-effects-highlight bg-background-subtle'>
        <header className='hidden w-full items-center justify-end gap-1 p-6 md:flex'>
          <LocaleSelector value={locale} />
          <Divider layout='vertical' className='h-4' />
          <ThemeToggle />
        </header>
        <div className='flex h-full w-full grow flex-col items-center justify-center px-6 pb-12 md:px-[108px]'>
          {children}
        </div>
      </div>
    </section>
  );
}
