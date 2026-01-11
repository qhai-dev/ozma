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
  'inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-[3px] text-sm font-semibold text-white outline-none transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary rounded-sm',

        outline:
          'border-outline-border text-primary hover:bg-state-hove rounded-lg border px-2.5 py-1.5 text-sm font-medium',

        destructive:
          'bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 text-white',

        // secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',

        ghost: 'hover:bg-state-hove rounded-md text-black dark:text-white',

        link: 'text-primary w-fit',

        primary:
          '[--button-color-active:var(--primary-active)] [--button-color-hover:var(--primary-hover)] [--button-color:var(--primary)]',
        secondary:
          '[--button-color-active:var(--primary-active)] [--button-color-hover:var(--secondary-hover)] [--button-color:var(--secondary)]',
        tertiary:
          '[--button-color-active:var(--primary-active)] [--button-color-hover:var(--tertiary-hover)] [--button-color:var(--tertiary)]',
        warning:
          '[--button-color-active:var(--primary-active)] [--button-color-hover:var(--warning-hover)] [--button-color:var(--warning)]',
        danger:
          '[--button-color-active:var(--primary-active)] [--button-color-hover:var(--danger-hover)] [--button-color:var(--danger)]',
      },
      size: {
        default: 'h-[32px] px-[12px] py-[6px] leading-[20px]',
        large: '',
        small: '',

        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'h-8 w-8 p-1.5',
      },
      theme: {
        light: 'bg-fill-500 hover:bg-fill-900 text-[var(--button-color)]',
        solid:
          'bg-[var(--button-color)] text-white hover:bg-[var(--button-color-hover)] active:bg-[var(--button-color-active)]',
        borderless: 'hover:bg-fill-500 bg-transparent text-[var(--button-color)]',
        outline: 'border-outline-border hover:bg-state-hove rounded-lg border px-2.5 py-1.5 text-sm font-medium',
        ghost: 'hover:bg-state-hove rounded-md text-black dark:text-white'
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      theme: 'light',
    },
  }
);

//
type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, asChild = false, theme, size, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp data-slot='button' className={cn(buttonVariants({ variant, size, theme }), className)} {...props} />;
}

export { Button };
