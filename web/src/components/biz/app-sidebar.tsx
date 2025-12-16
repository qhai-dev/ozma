'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// import { ChevronDoubleLeftIcon, HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
// import { Input } from '@/components/ui/input/input';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';

// import { Space } from '@/components/ui/space';
// import { Title } from '@/components/ui/typography';

import test from './test.json';

// 组织架构
// const items = [
//   {
//     title: '成员与部门',
//     url: '/contacts/departmentanduser',
//   },
//   {
//     title: '角色管理',
//     url: '/contacts/role',
//   },
//   {
//     title: '单位管理',
//     url: '/contacts/unit',
//   },
//   {
//     title: '用户组管理',
//     url: '/contacts/group',
//   },
// ];

// const items1 = [
//   {
//     title: '组织信息',
//     url: '/contacts/departmentanduser',
//   },
//   // {
//   //   title: '管理员权限',
//   //   url: '/contacts/role',
//   // },
//   {
//     title: '数据同步',
//     url: '/contacts/unit',
//   },
// ];

// const items2 = [
//   {
//     title: '成员权限',
//     url: '/contacts/departmentanduser',
//   },
//   {
//     title: '日志审计',
//     url: '/contacts/role',
//   },
//   {
//     title: '权限审计',
//     url: '/contacts/unit',
//   },
// ];

export function AppSidebar() {
  const router = useRouter();

  return (
    <Sidebar collapsible='icon' className='h-full bg-[#fcfcfd]'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard'>
                    {/* <HomeIcon /> */}
                    工作台
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            {test.list.map((item, index) => {
              return (
                <SidebarMenu key={index}>
                  <Collapsible className=''>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className=''>{item.title}</SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((sub, i) => (
                            <SidebarMenuSubItem key={i}>
                              <SidebarMenuButton>{sub.title}</SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className='bg-red-500'>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard'>
                    {/* <HomeIcon /> */}
                    工作台
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            {test.list.map((item, index) => {
              return (
                <SidebarMenu key={index}>
                  <Collapsible className=''>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className=''>{item.title}</SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((sub, i) => (
                            <SidebarMenuSubItem key={i}>
                              <SidebarMenuButton>{sub.title}</SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger>
          {/* <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>收起侧边栏</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu> */}
        </SidebarTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}
