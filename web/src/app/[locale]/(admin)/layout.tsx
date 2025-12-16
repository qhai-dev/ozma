import { PropsWithChildren, ReactNode } from 'react';

import { AppHeader } from '@/components/biz/app-header';
import { AppSidebar } from '@/components/biz/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

type Props = {
  share: ReactNode;
};

export default function Layout({ children, share }: Readonly<PropsWithChildren<Props>>) {
  return (
    <>
      {share}
      <div className='bg-background-containerd flex h-full w-full flex-col'>
        <AppHeader></AppHeader>
        <SidebarProvider className='bg-background-subtle shadow-layout flex min-h-0 grow overflow-hidden rounded-t-2xl'>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}
