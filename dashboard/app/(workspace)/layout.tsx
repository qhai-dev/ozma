import { PropsWithChildren } from 'react';
import { SidebarProvider } from '@/components/base/layout';

import WorkspaceOutlet from './_outlet';
import WorkSpaceSidebar from './_sidebar';

export default function WorkSpaceLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<SidebarProvider className='bg-[#f2f4f7]'>
			<WorkSpaceSidebar />
			<WorkspaceOutlet>{children}</WorkspaceOutlet>
		</SidebarProvider>
	);
}
