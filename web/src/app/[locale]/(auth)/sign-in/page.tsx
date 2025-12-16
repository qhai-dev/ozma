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

export default function Page() {
  const t = useTranslations('Login');

  return (
    <section className='flex w-full flex-col md:w-[400px]'>
      <Space className='pb-6 pt-8' vertical align='start'>
        <Title heading={2}>{t('title')}</Title>
        <Text>{t('welcome')}</Text>
      </Space>
      <LoginForm />
    </section>
  );
}
