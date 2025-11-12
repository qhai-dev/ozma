'use client';

import { GlobeAltIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages } from '@/libs/i18n/languages';
import { setUserLocale } from '@/libs/i18n/server';
import type { Locale } from '@/libs/i18n/types';

type ISelectorProps = {
  value?: Locale;
};

export default function LocaleSelector({ value }: ISelectorProps) {
  const locale = languages.filter((item) => item.value === value)[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex w-56 items-center justify-end'>
          <Button variant='outline' className='flex items-center gap-1'>
            <GlobeAltIcon className='size-5' aria-hidden='true' />
            {locale?.name}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='max-h-96 w-50'>
        {languages.map((item, index) => (
          <DropdownMenuItem key={index} onClick={async () => await setUserLocale(item.value)}>
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
