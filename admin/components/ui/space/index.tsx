'use client';

import * as React from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const spaceVariants = cva('inline-flex w-full', {
  variants: {
    wrap: {
      false: null,
      true: 'flex-wrap',
    },
    vertical: {
      false: null,
      true: 'flex-col',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
    },
    spacing: {
      tight: 'gap-2',
      medium: 'gap-4',
      loose: 'gap-6',
    },
  },
  defaultVariants: {
    align: 'center',
    spacing: 'tight',
    vertical: false,
    wrap: false,
  },
});

export function Space({
  wrap,
  vertical,
  align,
  spacing,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof spaceVariants>) {
  return (
    <div className={cn(spaceVariants({ wrap, vertical, align, spacing, className }))} {...props}>
      {children}
    </div>
  );
}
