import { PropsWithChildren } from 'react';
import { Button } from '@/components/base/button';
import { locales } from '@/i18n';

import LocaleSelect from './_locale';

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className='box-border flex min-h-screen w-full justify-center overflow-hidden bg-background-burn p-6'>
			<div className='flex w-full shrink-0 flex-col rounded-2xl border border-effects-highlight bg-background-subtle'>
				<div className='flex w-full items-center justify-between p-6'>
					<div></div>
					<div className='flex items-center gap-2'>
						<LocaleSelect items={locales} value='zh'></LocaleSelect>
						<Button variant='ghost' size='icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='size-4.5'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
								<path d='M12 3l0 18' />
								<path d='M12 9l4.65 -4.65' />
								<path d='M12 14.3l7.37 -7.37' />
								<path d='M12 19.6l8.85 -8.85' />
							</svg>
						</Button>
					</div>
				</div>
				<div className='flex w-full grow flex-col items-center justify-center px-6 md:px-[108px]'>{children}</div>
			</div>
		</div>
	);
}
