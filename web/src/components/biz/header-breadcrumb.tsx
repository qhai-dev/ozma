'use client';

import * as React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from '@/i18n/navigation';

const items = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Documentation' },
  { label: 'Caching and Revalidating' },
];

export function HeaderBreadcrumb() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex h-full flex-1 items-center px-3'>
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink className='max-w-20 truncate md:max-w-none' asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage className='max-w-20 truncate md:max-w-none'>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
