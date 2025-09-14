'use client';

import { Button } from '@/components/base/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/base/dropdown-menu';

// import { GlobeAltIcon } from '@heroicons/react/24/outline';

type ISelectProps = {
	items: Array<{ value: string; name: string }>;
	value?: string;
	className?: string;
	onChange?: (value: string) => void;
};

export default function LocaleSelect({ items, value, onChange }: ISelectProps) {
	const item = items.filter((item) => item.value === value)[0];

	return (
		<div className='w-56 text-right'>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							className='h-[44px]justify-center border-components-button-secondary-border hover:bg-state-base-hover inline-flex w-full items-center rounded-lg border px-[10px] py-[6px] text-[13px] font-medium'
						>
							{item?.name}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='max-h-56 w-56 overflow-y-auto' align='center'>
						<DropdownMenuItem>English (United States)</DropdownMenuItem>
						<DropdownMenuItem>简体中文</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
