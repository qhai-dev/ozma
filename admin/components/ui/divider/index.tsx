import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

type DividerProps = VariantProps<typeof dividerVariants> & ComponentProps<'div'>;

export function Divider({
  children,
  layout = 'horizontal',
  variant,
  className,
  align = 'center',
}: PropsWithChildren<DividerProps>) {
  return (
    <div className={cn(dividerVariants({ className, layout, variant }))}>
      {children && layout === 'horizontal' ? (
        typeof children === 'string' ? (
          <span className='px-3 text-sm font-medium text-tertiary'>{children}</span>
        ) : (
          children
        )
      ) : null}
    </div>
  );
}

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
    // isChildren: {
    // 	false: null,
    // 	true: 'text-tertiary',
    // },
    align: {
      center: 'items-center',
      left: 'items-left',
      right: 'items-end',
    },
  },
  // compoundVariants: [
  // 	{
  // 		layout: 'horizontal',
  // 		isChildren: true,
  // 		align: 'left',
  // 		class: 'flex w-full border-b-0 before:w-10 before:border-b after:flex-1 after:border-b',
  // 	},
  // 	{
  // 		layout: 'horizontal',
  // 		isChildren: true,
  // 		align: 'center',
  // 		class: 'flex w-full border-b-0 before:h-px before:w-1/2 before:bg-gradient-to-r before:from-mask before:to-divider after:h-px after:w-1/2 after:bg-gradient-to-l after:from-mask after:to-divider',
  // 	},
  // 	{
  // 		layout: 'horizontal',
  // 		isChildren: true,
  // 		align: 'right',
  // 		class: 'flex w-full border-b-0 before:flex-1 before:border-b after:w-10 after:border-b',
  // 	},
  // ],
  defaultVariants: {
    variant: 'solid',
    layout: 'horizontal',
    // isChildren: false,
    align: 'center',
  },
});
