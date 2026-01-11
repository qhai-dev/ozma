'use client';

import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { XIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PropsWithChildren, use, useEffect } from 'react';

const Profile = dynamic(() => import('./Profile'));

const Preference = dynamic(() => import('./Preference'));

function testPromise(): Promise<{ id: number }>{
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
          id: 1
        })
    }, 2000);
  })
}


export function Settings() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // const userInfo = await testPromise()
  // useEffect(() => {
  //   test()
  // },[])

  // async function test(){
  //   await testPromise()
  // }


  const onTabsChange = (e: string) => {
    router.replace(`${pathname}?tab=${e}`);
  };

  return (
    <div className='flex h-full w-full flex-col'>
      <Tabs
        defaultValue={params.get('tab') || 'profile'}
        className='h-0 w-full flex-1 flex-row bg-[#fcfcfd]'
        orientation='vertical'
        onValueChange={onTabsChange}
      >
        <TabsList className='flex h-full flex-col justify-start gap-y-1'>
          <TabsTrigger value='profile' className='flex-0 block h-[40[x]] w-[200px] bg-green-500'>
            个人信息
          </TabsTrigger>
          <TabsTrigger value='preference' className='flex-0 block h-[40[x]] w-[200px] bg-green-500'>
            偏好
          </TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          <Profile />
        </TabsContent>
        <TabsContent value='preference'>
          <Preference />
        </TabsContent>
      </Tabs>
    </div>
  );
}