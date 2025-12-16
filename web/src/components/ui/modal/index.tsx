'use client';

import { ComponentProps, PropsWithChildren, useEffect, useRef, useState } from 'react';
import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
// import { XIcon } from 'lucide-react';
import { createPortal } from 'react-dom';

// import { cn } from '@/lib/utils';
// import { useRouter } from 'next/navigation';
import { cn } from '@/libs/utils';

const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer select-none items-center justify-center rounded-sm text-sm text-white outline-none disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        outline:
          'text-text-primary hover:bg-outline-hove border-outline-border rounded-lg border px-2.5 py-1.5 text-sm font-medium',

        destructive:
          'bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 text-white',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'text-tertiary hover:bg-accent rounded-[8px]',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-8',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'h-8 w-8 p-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

type ModalProps = {
  onClose?: () => void;
};

export function Modal({ children, onClose }: PropsWithChildren<ModalProps>) {
  // const router = useRouter();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function handleV() {
    onClose && onClose();
  }
  // function onDismiss() {
  // 	router.back();
  // }

  return mounted
    ? createPortal(
        <div className='modal-backdrop' onClick={handleV}>
          <div>{children}</div>
        </div>,
        document.getElementById('modal-root')!
      )
    : null;
}
