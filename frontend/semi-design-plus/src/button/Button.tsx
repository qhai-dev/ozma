// import { cva, type VariantProps } from "class-variance-authority";
// import { Slot } from "radix-ui";
// import * as React from "react";

// import { cn } from "../lib/utils";

// const buttonVariants = cva(
// 	"rounded-border-radius-small aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 group/button disabled:bg-color-disabled-bg disabled:text-color-disabled-text inline-flex cursor-pointer items-center justify-center border border-transparent align-middle text-sm/5 font-semibold whitespace-nowrap shadow-none transition-all outline-none select-none focus-visible:outline-2 focus-visible:outline-solid disabled:pointer-events-none disabled:border-none aria-invalid:ring-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
// 	{
// 		variants: {
// 			variant: {
// 				primary:
// 					"hover:bg-color-primary-hover active:bg-color-primary-active bg-color-primary text-color-primary focus-visible:outline-color-primary-light-active border-color-border",
// 				// text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground
// 				secondary:
// 					"bg-color-secondary hover:bg-color-secondary-hover active:bg-color-secondary-active text-color-secondary focus-visible:outline-color-primary-light-active border-color-border",
// 				tertiary:
// 					"bg-color-tertiary hover:bg-color-tertiary-hover active:bg-color-tertiary-active text-color-tertiary focus-visible:outline-color-primary-light-active border-color-border",
// 				warning:
// 					"bg-color-warning hover:bg-color-warning-hover active:bg-color-warning-active text-color-warning focus-visible:outline-color-warning-light-active border-color-warning",
// 				danger:
// 					"bg-color-danger focus-visible:outline-color-danger-light-active text-color-danger hover:bg-color-danger-hover active:bg-color-danger-active border-color-danger",
// 			},
// 			theme: {
// 				light:
// 					"bg-color-fill-0 hover:bg-color-fill-1 active:bg-color-fill-2 focus-visible:outline-color-primary-light-active disabled:bg-color-fill-0",
// 				solid: "text-color-white",
// 				borderless:
// 					"aria-expanded:bg-muted aria-expanded:text-foreground hover:bg-color-fill-0 active:bg-color-fill-1 focus-visible:outline-color-primary-light-active bg-transparent disabled:bg-transparent",
// 				outline:
// 					"aria-expanded:bg-muted aria-expanded:text-foreground hover:bg-color-fill-0 active:bg-color-fill-1 disabled:text-color-disabled-text disabled:border-color-border border border-solid bg-transparent disabled:border disabled:border-solid disabled:bg-transparent",
// 			},
// 			size: {
// 				// gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2
// 				default: "h-8 px-3 py-1.5",
// 				small:
// 					"h-6 px-3 py-0.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
// 				large: "h-10 px-4 py-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
// 			},
// 			block: {
// 				false: null,
// 				true: "w-full",
// 			},
// 		},
// 		defaultVariants: {
// 			variant: "primary",
// 			size: "default",
// 			theme: "solid",
// 			block: false,
// 		},
// 	},
// );

// type ButtonProps = React.ComponentProps<"button"> &
// 	VariantProps<typeof buttonVariants> & {
// 		asChild?: boolean;
// 	};

// function Button({
// 	className,
// 	variant = "primary",
// 	size = "default",
// 	theme = "solid",
// 	block = false,
// 	asChild = false,
// 	...props
// }: ButtonProps) {
// 	const Comp = asChild ? Slot.Root : "button";

// 	return (
// 		<Comp
// 			data-slot="button"
// 			data-variant={variant}
// 			data-size={size}
// 			className={cn(buttonVariants({ variant, size, theme, block, className }))}
// 			{...props}
// 		/>
// 	);
// }

// export { Button };
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:translate-y-px [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
