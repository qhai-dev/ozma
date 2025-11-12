import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import { Space } from '@/components/ui/space';
import { Text, Title } from '@/components/ui/typography';

import SelectIdentity from '../_components/select-identity.client';

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('login'),
  };
}

export default async function Page() {
  const t = await getTranslations();

  return (
    <main className='flex w-full flex-col md:w-[400px]'>
      <Button variant='link' className='items-center gap-2' asChild>
        <Link href='/login'>
          <ArrowLeftIcon className='size-5' aria-hidden='true' />
          {t('common.back')}
        </Link>
      </Button>
      <Space align='start' vertical className='pt-8 pb-6'>
        <Title heading={2}>{t('Login.select-identity-title')}</Title>
        <Text>{t('Login.select-identity-desc', { count: 4 })}</Text>
      </Space>
      <SelectIdentity />
    </main>
  );
}
