'use client';

import * as React from 'react';
// import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/libs/utils';

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot='tabs' className={cn('flex flex-col', className)} {...props} />;
}

// bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]'
function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  // #1C1F23 · 8%
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn(
        'flex items-center gap-x-6 border-b border-solid border-border w-full',
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.TabsTrigger>) {
  // "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring 
  // focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 
  // text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] gap-1.5 whitespace-nowrap 
  // rounded-md border border-transparent px-2 py-1 text-sm font-medium transition-[color,box-shadow] focus-visible:outline-1 
  // focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 
  // data-[state=active]:shadow-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  return (
    <TabsPrimitive.TabsTrigger
      data-slot='tabs-trigger'
      className={cn(
        'px-1 pt-4 pb-3.5 data-[state=active]:font-semibold relative ',
        'data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:bottom-0',
        'data-[state=active]:after:h-0.5 data-[state=active]:after:bg-red-500',
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot='tabs-content' className={cn('flex-1 outline-none min-h-0', className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
