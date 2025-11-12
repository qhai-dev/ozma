'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Title } from '@/components/ui/typography';

export default function SelectIdentity() {
  const router = useRouter();

  const t = useTranslations('Login');

  return (
    <>
      <div className='mb-6 flex flex-col gap-4 rounded-2xl border-[0.5px] border-test-border bg-test-bg p-6'>
        <Title>账号</Title>
        <ScrollArea type='scroll' className='max-h-52 md:max-h-80'>
          <div className='flex flex-col gap-4'>
            {new Array(3).fill(1).map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex w-full cursor-pointer flex-col gap-2 rounded-xl bg-component-panel-bg p-4 hover:bg-state-hove'
                >
                  <div className='text-sm leading-5 font-normal text-primary'>工作空间名称 (ID:123456789)</div>
                  {index == 0 && <div className='text-[12px] leading-4 font-medium text-tertiary'>上次登录</div>}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
      <Button disabled theme='solid' className='bg-panda-primary'>
        {t('login')}
      </Button>
    </>
  );
}
