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


export function Setting() {
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
        <TabsContent value='profile' className='flex flex-col'>
          <Header title='个人信息'/>
          <Profile />
        </TabsContent>
        <TabsContent value='preference'>
          <Header title='偏好' />
          <Preference />
        </TabsContent>
      </Tabs>
    </div>
  );
}


function Header({ children, title }: PropsWithChildren<{ title?: string}>){
    const router = useRouter();

  const handleCloseSettingModal = () => {
    router.back();
  };


  return (
 <div className='flex w-full items-center py-2 pr-5'>
        <div className='min-w-0 flex-1 text-[18px] font-semibold leading-[1.2] text-[#101828]'>{title}</div>
        <div className='flex flex-col items-center justify-center gap-y-1'>
          <Button
            size='icon'
            theme='ghost'
            onClick={handleCloseSettingModal}
            className='size-9 rounded-[10px] bg-[#f2f4f7] px-2 text-[#354052]'
          >
            <XIcon size={24} weight='light' />
          </Button>
          <div className='text-[10px] font-medium leading-[12px] text-[#676f83]'>ESC</div>
        </div>
        {children}
      </div> 
  )
}