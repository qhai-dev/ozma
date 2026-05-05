"use client";

import { AppSidebar } from "@/components/biz/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/biz/nav-main";
import { NavProjects } from "@/components/biz/nav-projects";
import { NavSecondary } from "@/components/biz/nav-secondary";
import { NavUser } from "@/components/biz/nav-user";

import { PropsWithChildren } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  TooltipProvider,
} from "semi-design-plus";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "组织架构",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "成员与部门",
          url: "/contacts/departmentanduser",
        },
        {
          title: "角色管理",
          url: "/contacts/role",
        },
        {
          title: "单位管理",
          url: "/contacts/unit",
        },
        {
          title: "用户组管理",
          url: "/contacts/group",
        },
      ],
    },
    {
      title: "企业设置",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "企业信息",
          url: "/enterprise/info",
        },
        {
          title: "管理员权限",
          url: "/enterprise/auth",
        },
        {
          title: "组织架构数据同步",
          url: "/enterprise/sync",
        },
      ],
    },
  ],
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <TooltipProvider>
      <SidebarProvider className="bg-foreground">
        {/*<AppSidebar />*/}
        <Sidebar variant="inset">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      {/*<Command className="size-4" />*/}
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">Acme Inc</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <NavMain items={data.navMain} />
            {/*<NavProjects projects={data.projects} />*/}
            {/*<NavSecondary items={data.navSecondary} className="mt-auto" />*/}
          </SidebarContent>
          <SidebarFooter>
            <NavUser user={data.user} />
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="p-3">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-background">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
