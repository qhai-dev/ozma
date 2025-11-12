'use client';

import { PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/layout';

export default function WorkspaceOutlet({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className='relative flex w-full flex-col'>
      {/* <header className='flex h-16 w-full items-center'>
        <div className='min-w-0 flex-1'>工作台</div>
      </header> */}

      <div className='w-full flex-1 overflow-y-auto px-6 py-4'>{children}</div>
    </main>
  );
}
