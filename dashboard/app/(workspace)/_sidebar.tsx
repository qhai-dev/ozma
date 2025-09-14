'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/base/collapsible';
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
} from '@/components/base/layout';

import Footer from './_footer';
import Header from './_header';

const items = [
	{
		title: 'Home',
		url: '#',
	},
	{
		title: 'Inbox',
		url: '#',
	},
	{
		title: 'Calendar',
		url: '#',
	},
	{
		title: 'Search',
		url: '#',
	},
	{
		title: 'Settings',
		url: '#',
	},
];

export default function WorkSpaceSidebar() {
	return (
		<Sidebar className='h-full w-full'>
			<SidebarHeader>
				<Header></Header>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup className='bg-red-500'>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<span>搜索</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<span>主页</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<Collapsible defaultOpen className='group/collapsible'>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton>
											<div>icon 箭头</div>
											<div>测试内容</div>
											<div>icon 功能</div>
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{items.map((item) => (
												<SidebarMenuSubItem key={item.title}>
													<SidebarMenuButton asChild>
														<a href={item.url}>
															<span>{item.title}</span>
														</a>
													</SidebarMenuButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						</SidebarMenu>
						<SidebarMenu>
							<Collapsible defaultOpen className='group/collapsible'>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton>
											<div>icon 箭头</div>
											<div>测试内容</div>
											<div>icon 功能</div>
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{items.map((item) => (
												<SidebarMenuSubItem key={item.title}>
													<SidebarMenuButton asChild>
														<a href={item.url}>
															<span>{item.title}</span>
														</a>
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
			<SidebarFooter>
				<Footer></Footer>
			</SidebarFooter>
		</Sidebar>
	);
}
