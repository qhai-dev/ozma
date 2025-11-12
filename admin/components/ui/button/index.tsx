'use client';

import { ComponentProps } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

// inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all
// outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none
// disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20
// dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

// bg-background border shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50

// h-9 px-4 py-2 has-[>svg]:px-3

const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 text-sm text-white transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'rounded-sm bg-primary',

        outline:
          'rounded-lg border border-outline-border px-2.5 py-1.5 text-sm font-medium text-primary hover:bg-state-hove',

        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',

        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',

        ghost: 'rounded-md text-black hover:bg-state-hove dark:text-white',

        link: 'w-fit text-primary',
      },
      size: {
        default: 'h-8',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'h-8 w-8 p-1.5',
      },
      // type: {
      //   primary: 'bg-panda-primary',
      //   secondary: 'bg-panda-primary',
      //   tertiary: 'bg-panda-tertiary',
      //   warning: 'bg-panda-warning',
      //   danger: 'bg-panda-danger',
      // },
      theme: {
        light: '',
        solid: '',
        borderless: '',
        outline: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      theme: 'light',
      // type: 'primary',
    },
  } 
);

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, asChild = false, size, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot='button' className={cn(buttonVariants({ variant, className, size }))} {...props} />;
}

export { Button };

/**
 * color
 * --semi-color-primary
 * --semi-color-secondary
 * --semi-color-tertiary
 * --semi-color-warning
 * --semi-color-danger
 */

/**
 * theme
 * light
 * solid
 * borderless
 * outline
 */
