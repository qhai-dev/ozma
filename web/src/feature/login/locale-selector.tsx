'use client';

import { startTransition } from 'react';
import { useParams } from 'next/navigation';
import { Locale, useLocale } from 'next-intl';

// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { IconGlobeStrokeStroked } from '@douyinfe/semi-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages } from '@/consts';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function LocaleSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectLocaleChange(e: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: e }
      );
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex w-56 items-center justify-end'>
          <Button theme='outline' className='text-text-primary flex items-center gap-1'>
            <IconGlobeStrokeStroked aria-hidden='true' />
            {languages[locale]}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-50 max-h-96'>
        {routing.locales.map((item, index) => (
          <DropdownMenuItem key={index} onClick={() => onSelectLocaleChange(item)}>
            {languages[item]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
