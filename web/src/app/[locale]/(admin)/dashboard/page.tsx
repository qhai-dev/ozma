import type { Metadata, ResolvingMetadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('dashboard'),
  };
}

export default function Page() {
  return <div className='h-full w-full'>dashboard</div>;
}
