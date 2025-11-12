import { PropsWithChildren, ReactNode } from 'react';

import { SidebarProvider } from '@/components/ui/layout';

import Outlet from './_outlet';
import Sidebar from './_sidebar';

type LayoutProps = {
  modal: ReactNode;
};

export default function Layout({ children, modal }: Readonly<PropsWithChildren<LayoutProps>>) {
  return (
    <>
      {modal}
      <SidebarProvider className='text-text-primary bg-white dark:bg-[#16161a]'>
        <Sidebar />
        <Outlet>{children}</Outlet>
      </SidebarProvider>
    </>
  );
}
