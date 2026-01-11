'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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
} from '@/components/ui/sidebar';

import test from './test.json';
import { WorkspaceSelect } from './workspace';

const teams = [
  {
    name: 'Acme Inc',
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    plan: 'Free',
  },
];

export function AppSidebar() {
  const router = useRouter();
  // #fcfcfd

  return (
    <Sidebar collapsible='icon' className='h-full '>
      <SidebarHeader>
        <WorkspaceSelect teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className='px-3 py-2'>
          <SidebarGroupContent className='flex w-full flex-col gap-y-0.5'>
            <SidebarMenu>
              {/* bg-sidebar-menu-item-bg-active  */}
              {/* text-[#155aef] */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className='test-bg-btn  rounded-lg py-0 pl-3 pr-1 text-sm font-semibold '
                >
                  <Link href='/dashboard'>工作台</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            {test?.list.map((item, index) => {
              return (
                <SidebarMenu key={index}>
                  <Collapsible className=''>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className=''>{item.title}</SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item?.children.map((sub, i) => (
                            <SidebarMenuSubItem key={i}>
                              <SidebarMenuButton asChild>
                                <Link href={sub.path}>{sub.title}</Link>
                              </SidebarMenuButton>
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
        <SidebarTrigger></SidebarTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}
