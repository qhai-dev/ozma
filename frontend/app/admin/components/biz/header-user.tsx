"use client";

import { IconExit, IconSetting, IconUserCircle } from "@douyinfe/semi-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Space } from "@/components/ui/space";
import { Text, Title } from "@/components/ui/typography";

export function HeaderUser() {
	const router = useRouter();

	const handleOpenSettingModal = (e: string) => {
		router.push(`/setting?tab=${e}`);
	};

	return (
		<div className="hidden h-full items-center px-3 select-none md:flex">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className="flex size-9 cursor-pointer items-center justify-center">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback className="h-full w-full bg-red-500"></AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-60 max-w-60" align="end">
					<DropdownMenuLabel className="flex w-full py-2 pr-2 pl-3">
						<Space vertical className="grow gap-0" align="start">
							<Title className="text-sm font-medium">张三</Title>
							<Text className="text-[12px] leading-[16px]">XXXX科技有限公司</Text>
						</Space>
						<Avatar className="flex size-9 shrink-0 items-center">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback className="h-full w-full bg-red-500"></AvatarFallback>
						</Avatar>
					</DropdownMenuLabel>
					<DropdownMenuGroup>
						<DropdownMenuItem
							className="flex h-8 items-center gap-1 pr-2 pl-3"
							onClick={() => handleOpenSettingModal("profile")}
						>
							<IconUserCircle />
							<Text className="grow px-1 text-sm font-medium">账户</Text>
						</DropdownMenuItem>
						<DropdownMenuItem
							className="flex h-8 items-center gap-1 pr-2 pl-3"
							onClick={() => handleOpenSettingModal("preference")}
						>
							<IconSetting />
							<Text className="grow px-1 text-sm font-medium">设置</Text>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="flex h-8 items-center gap-1 pr-2 pl-3">
						<IconExit />
						<Text className="grow px-1 text-sm font-medium">登出</Text>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
