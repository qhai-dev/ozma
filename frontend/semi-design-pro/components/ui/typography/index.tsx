import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/libs/utils";

const titleVariants = cva("", {
	variants: {
		heading: {
			1: "",
			2: "text-typography-0 text-2xl leading-[1.2] font-semibold",
		},
	},
	defaultVariants: {
		heading: 1,
	},
});

type TitleProps = React.ComponentProps<"div"> &
	VariantProps<typeof titleVariants> & { asChild?: boolean };

export function Title({ className, heading, children, asChild = false }: TitleProps) {
	const Comp = asChild ? Slot : "p";

	return (
		<Comp data-slot="title" className={cn(titleVariants({ className, heading }))}>
			{children}
		</Comp>
	);
}

const textVariants = cva("", {
	variants: {
		type: {
			secondary: "",
			2: "text-typography-0 text-2xl leading-[1.2] font-semibold",
		},
	},
	defaultVariants: {
		type: "secondary",
	},
});

type TextProps = React.ComponentProps<"p"> &
	VariantProps<typeof textVariants> & { asChild?: boolean };

export function Text({ className, children, asChild = false, type }: TextProps) {
	const Comp = asChild ? Slot : "p";
	return (
		<Comp data-slot="text" className={cn(textVariants({ className, type }))}>
			{children}
		</Comp>
	);
}
