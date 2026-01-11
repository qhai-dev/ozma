// 'use client';

import { HeaderBreadcrumb } from './header-breadcrumb';
import { HeaderSearch } from './header-search';
import { HeaderUser } from './header-user';

export function AppHeader() {
  return (
    <header className='flex h-14 w-full shrink-0 grow-0 basis-auto'>
      <div className='hidden w-52 md:flex'></div>
      {/* <HeaderBreadcrumb /> */}
      <HeaderSearch />
      <HeaderUser />
    </header>
  );
}
