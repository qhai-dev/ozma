import React from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const dividerVariants = cva('border-divider', {
  variants: {
    variant: {
      solid: 'border-solid',
      dashed: 'border-dashed',
    },
    layout: {
      horizontal: 'my-2 h-px border-b',
      vertical: 'mx-2 inline-block h-full border-l align-middle',
    },
    align: {
      center: 'items-center',
      left: 'items-left',
      right: 'items-end',
    },
  },
  defaultVariants: {
    variant: 'solid',
    layout: 'horizontal',
    align: 'center',
  },
});

export type DividerProps = VariantProps<typeof dividerVariants> & React.ComponentProps<'div'>;

export function Divider({
  children,
  layout = 'horizontal',
  variant,
  className,
  align = 'center',
}: React.PropsWithChildren<DividerProps>) {
  return (
    <div className={cn(dividerVariants({ className, layout, variant, align }))}>
      {children && layout === 'horizontal' ? (
        typeof children === 'string' ? (
          <span className='text-tertiary px-3 text-sm font-medium'>{children}</span>
        ) : (
          children
        )
      ) : null}
    </div>
  );
}
