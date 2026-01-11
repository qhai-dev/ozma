import { Fragment, PropsWithChildren, ReactNode } from 'react';

import { AppHeader } from '@/components/biz/app-header';
import { AppSidebar } from '@/components/biz/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

type Props = {
  modal: ReactNode;
};

export default function Layout({ children }: Readonly<PropsWithChildren<Props>>) {
  return (
    <Fragment>
      <SidebarProvider className='bg-background-containerd flex h-full w-full flex-col'>
        <AppHeader></AppHeader>
        <div className='bg-background-subtle shadow-layout flex min-h-0 grow overflow-hidden rounded-t-2xl'>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </Fragment>
  );
}
