import { PropsWithChildren } from 'react';

import { Divider } from '@/components/ui/divider';

import { LocaleSelector } from '@/feature/login/locale-selector';
import { ThemeToggle } from '@/feature/login/theme-toggle';

export default function Layout({ children }: PropsWithChildren) {

  return (
    <section className='bg-background-burn flex min-h-screen w-full justify-center p-6'>
      <section className='border-effects-highlight bg-background-subtle flex w-full shrink-0 flex-col rounded-2xl border'>
        <header className='hidden w-full items-center justify-end gap-1 p-6 md:flex'>
          <LocaleSelector />
          <Divider layout='vertical' className='h-4' />
          <ThemeToggle />
        </header>
        <main className='flex h-full w-full grow flex-col items-center justify-center px-6 pb-12 md:px-[108px]'>
          {children}
        </main>
      </section>
    </section>
  );
}
