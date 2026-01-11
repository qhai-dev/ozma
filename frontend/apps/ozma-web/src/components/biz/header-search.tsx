'use client';

import { IconBellStroked, IconHelpCircleStroked } from '@douyinfe/semi-icons';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { QuestionIcon, BellIcon } from '@phosphor-icons/react'

export function HeaderSearch() {
  return (
    <div className='hidden h-full shrink-0 basis-auto items-center gap-2 px-4 md:flex'>
      <Button asChild theme='outline' className='text-text-primary flex h-9 items-center gap-1 bg-white'>
        <div className='flex w-52 items-center'>
          <div className='grow'>搜索</div>
          <div className='whitespace-nowrap'>⌘ K</div>
        </div>
      </Button>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' theme='ghost' size='icon' className='size-9'>
            <BellIcon size={24} weight="light" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>消息通知</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' theme='ghost' size='icon' className='size-9'>
            <QuestionIcon size={24} weight="light" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>帮助中心</TooltipContent>
      </Tooltip>
    </div>
  );
}
