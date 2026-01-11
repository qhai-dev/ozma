import type { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Space } from '@/components/ui/space';
import { Text, Title } from '@/components/ui/typography';

import { LoginForm } from '@/feature/login/login-form';

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('login'),
  };
}


import { PropsWithChildren } from 'react';
import { useLocale } from 'next-intl';

import { Divider } from '@/components/ui/divider';
import { LocaleSelector } from '@/feature/login/locale-selector';
import { ThemeToggle } from '@/feature/login/theme-toggle';
import { Locale } from '@/i18n/config';

export default function Page({ children }: PropsWithChildren) {
  const t = useTranslations('Login');
  const locale = useLocale();
  return (
    <div className='bg-background-burn flex min-h-screen w-full justify-center p-6'>
      <div className='border-effects-highlight bg-background-subtle flex w-full shrink-0 flex-col rounded-2xl border'>
        <header className='hidden w-full items-center justify-end gap-1 p-6 md:flex'>
          <LocaleSelector defaultValue={locale as Locale} />
          <Divider layout='vertical' className='h-4' />
          <ThemeToggle />
        </header>
        <main className='flex h-full w-full grow flex-col items-center justify-center px-6 pb-12 md:px-[108px]'>
          <div className='flex w-full flex-col md:w-[400px]'>
            <Space className='pb-6 pt-8' vertical align='start'>
              <Title heading={2}>{t('title')}</Title>
              <Text>{t('welcome')}</Text>
            </Space>
            <LoginForm />
          </div>
        </main>
      </div>
    </div>
  );
}
