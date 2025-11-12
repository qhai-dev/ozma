import { ComponentProps } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const titleVariants = cva('', {
  variants: {
    heading: {
      1: '',
      2: 'text-text-primary text-2xl font-semibold',
    },
  },
  defaultVariants: {
    heading: 1,
  },
});

export function Title({
  className,
  heading,
  children,
}: React.ComponentProps<'div'> & VariantProps<typeof titleVariants> & { asChild?: boolean }) {
  return <div className={cn(titleVariants({ className, heading }))}>{children}</div>;
}

export function Text({ className, children }: ComponentProps<'span'>) {
  return <span className={cn(className, 'text-sm leading-5 font-normal text-tertiary')}>{children}</span>;
}
