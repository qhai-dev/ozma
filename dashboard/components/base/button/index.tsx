import * as React from 'react';
import { cn } from '@/lib/util';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
	'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[3px] text-sm font-medium whitespace-nowrap outline-none select-none disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-background-burn shadow-xs hover:bg-primary/90',
				secondary:
					'text-white shadow-xs hover:bg-destructive/90 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
				outline:
					'bg-background border shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
				warning: 'bg-warning text-secondary-foreground shadow-xs hover:bg-secondary/80',
				danger: 'bg-danger text-secondary-foreground shadow-xs hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				icon: 'size-9 h-[34px]',
				default: 'h-full w-full',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
		},
	}
);

type ButtonProps = React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

export function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

	return <Comp data-slot='button' className={cn(buttonVariants({ variant, className }))} {...props} />;
}
