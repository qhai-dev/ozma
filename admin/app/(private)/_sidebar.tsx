'use client';

import Link from 'next/link';

import { ChevronDoubleLeftIcon, HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input/input';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from '@/components/ui/layout';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Space } from '@/components/ui/space';
import { Title } from '@/components/ui/typography';

// 组织架构
const items = [
  {
    title: '成员与部门',
    url: '',
  },
  {
    title: '角色管理',
    url: '/contacts/role',
  },
  {
    title: '单位管理',
    url: '/contacts/unit',
  },
  {
    title: '用户组管理',
    url: '/contacts/group',
  },
];

export default function WorkSpaceSidebar() {
  return (
    <Sidebar className='h-full'>
      <SidebarHeader className='h-12 w-full'>
        <Popover>
          <PopoverTrigger asChild>
            <Space align='center' className='box-border min-w-0 flex-1 rounded-md px-2 py-1 hover:bg-red-500'>
              <Avatar className='text-md size-5 rounded-full bg-yellow-500 text-white dark:text-black'>
                <AvatarImage
                  src='https://lh3.googleusercontent.com/a/ACg8ocLV0Z4hYc-lSprDBlv90Duj7ONsBI_0F_UkRf6c_v_k2BdJOw=s100'
                  alt='@avatar'
                />
                <AvatarFallback>罗</AvatarFallback>
              </Avatar>
              <Title className='truncate font-medium'>用户昵称用户昵称用户昵称用户昵称</Title>
            </Space>
          </PopoverTrigger>
          <PopoverContent align='start' alignOffset={8} sideOffset={8} className='border-panel-border bg-panel-bg'>
            <div className='grid gap-4'>
              <div className='space-y-2'>
                <h4 className='leading-none font-medium'>Dimensions</h4>
                <p className='text-sm text-muted-foreground'>Set the dimensions for the layer.</p>
              </div>
              <div className='grid gap-2'>
                <div className='grid grid-cols-3 items-center gap-4'>
                  <Input id='width' defaultValue='100%' className='col-span-2 h-8' />
                </div>
                <div className='grid grid-cols-3 items-center gap-4'>
                  <Input id='maxWidth' defaultValue='300px' className='col-span-2 h-8' />
                </div>
                <div className='grid grid-cols-3 items-center gap-4'>
                  <Input id='height' defaultValue='25px' className='col-span-2 h-8' />
                </div>
                <div className='grid grid-cols-3 items-center gap-4'>
                  <Input id='maxHeight' defaultValue='none' className='col-span-2 h-8' />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <SidebarTrigger asChild>
          <Button variant='ghost' size='icon' className='hover:bg-red-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-4.5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5' />
            </svg>
          </Button>
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className='h-5 bg-[#f5f5f5]'>
                  <Link href='/dashboard'>
                    <HomeIcon />
                    工作台
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MagnifyingGlassIcon />
                  搜索
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className=''>组织架构</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link href={item.url}>{item.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className=''>组织架构</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link href={item.url}>{item.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>底部区域 暂定</SidebarFooter>
    </Sidebar>
  );
}
