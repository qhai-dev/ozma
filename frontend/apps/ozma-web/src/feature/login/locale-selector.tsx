'use client';

import { startTransition } from 'react';

import { IconGlobeStrokeStroked } from '@douyinfe/semi-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages, Locale, locales } from '@/i18n/config';
import { setUserLocale } from '@/i18n/server';

type Props = {
  defaultValue: Locale;
};

export function LocaleSelector({ defaultValue }: Props) {
  function onSelectLocaleChange(e: Locale) {
    startTransition(() => {
      setUserLocale(e);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex w-56 items-center justify-end'>
          <Button theme='outline' className='text-text-primary flex items-center gap-1'>
            <IconGlobeStrokeStroked aria-hidden='true' />
            {languages[defaultValue]}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-50 max-h-96'>
        {locales.map((item, index) => (
          <DropdownMenuItem key={index} onClick={() => onSelectLocaleChange(item)}>
            {languages[item]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
