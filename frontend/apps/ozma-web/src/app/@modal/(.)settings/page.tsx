// 'use client'

import {  Suspense } from 'react'
// import { Settings } from '@/components/biz/settings';
import { Setting } from '@/feature/setting/Setting';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/modal';
// import { Button } from '@/components/ui/button';
// import { XIcon } from '@phosphor-icons/react';
// import { useRouter } from 'next/navigation';
export default function Page() {
  // const router = useRouter()
  // function handleCloseSettingModal(){
  //   router.back();
  // }

  return (
    <Dialog open>
        <DialogContent className="flex-col max-h-[715px] rounded-xl overflow-hidden max-w-[calc(-100px+100vw)] w-[1150px] h-[calc(100%-100px)] bg-white test-shadow">
              {/* <DialogHeader className='w-full py-2 flex items-end px-5'>
                  <DialogClose className="flex flex-col items-center justify-center gap-y-1">
                      <Button
                        size='icon'
                        theme='ghost'
                        onClick={handleCloseSettingModal}
                        className='size-9 rounded-[10px] bg-[#f2f4f7] px-2 text-[#354052]'
                      >
                        <XIcon size={24} weight='light' />
                      </Button>
                      <div className='text-[10px] font-medium leading-[12px] text-[#676f83]'>ESC</div>
                  </DialogClose>
              </DialogHeader> */}
              <Setting></Setting>
        </DialogContent>
    </Dialog>
  );
}