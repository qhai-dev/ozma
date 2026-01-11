'use client';

import * as React from 'react';

import { CaretUpDownIcon } from '@phosphor-icons/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';

export function WorkspaceSelect({ teams }: {
  teams: {
    name: string;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton className='h-10 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border-outline-border border-1 border-solid'>
          <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'></div>
          <div className='grid flex-1 text-left text-sm leading-tight'>
            <span className='truncate font-medium'>某某项目空间</span>
          </div>
          <CaretUpDownIcon size={32} weight='light' />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='min-w-56 rounded-lg bg-red-500'
        align='start'
        side={isMobile ? 'bottom' : 'right'}
        alignOffset={0}
        sideOffset={8}
      >
        <DropdownMenuLabel className='text-muted-foreground text-xs'>工作空间</DropdownMenuLabel>
        {teams.map((team, index) => (
          <DropdownMenuItem key={team.name} onClick={() => setActiveTeam(team)} className='gap-2 p-2'>
            <div className='flex size-6 items-center justify-center rounded-md border'></div>
            {team.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
