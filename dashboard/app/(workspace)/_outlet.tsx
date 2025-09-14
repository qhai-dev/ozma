'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { SidebarTrigger } from '@/components/biz/workspace-layout';

export default function WorkspaceOutlet({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className='w-full'>
			<div className='flex h-[56rpx] w-full items-center bg-red-500'>
				<SidebarTrigger className='w-[200px] text-red-500'></SidebarTrigger>
				<div className='min-w-0 flex-1'>页签</div>
				<div className='flex h-full w-[200px] items-center justify-center'>
					<Link href='/datasets'>知识库</Link>
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
}
