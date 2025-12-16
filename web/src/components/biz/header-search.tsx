'use client';

import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons';

import { Button } from '@/components/ui/button';

export function HeaderSearch() {
  return (
    <div className='hidden h-full shrink-0 basis-auto items-center gap-2 px-4 md:flex'>
      <Button asChild theme='outline' className='text-text-primary flex h-9 items-center gap-1 bg-white'>
        <div className='flex w-52 items-center'>
          <div className='grow'>搜索</div>
          <div className='whitespace-nowrap'>⌘ K</div>
        </div>
      </Button>
      <Button variant='ghost' size='icon' className='size-9'>
        <IconBell />
      </Button>
      <Button variant='ghost' size='icon' className='size-9'>
        <IconHelpCircle />
      </Button>
    </div>
  );
}
