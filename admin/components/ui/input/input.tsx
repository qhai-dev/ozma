'use client';

import { useState } from 'react';

import { cn } from '@/libs/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  const { placeholder, disabled } = props;

  const [isFocus, setIsFocus] = useState(false);

  const handler = () => {
    setIsFocus(true);
  };

  // style={{ border: '1px solid rgba(0,100,250, 1)' }}

  return (
    <div
      className='flex h-8 w-full items-center rounded-[3px] bg-input-primary text-primary aria-invalid:bg-input-destructive'
      onClick={handler}
      data-slot='input'
      {...props}
    >
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete='off'
        className='box-border h-full min-w-0 flex-1 border-none bg-transparent px-3 text-sm text-inherit outline-none placeholder:text-input-placeholder placeholder-shown:text-ellipsis'
      />
    </div>
  );
}

export { Input };
