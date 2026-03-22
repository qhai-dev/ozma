"use client";

import { HeaderSearch } from "./header-search";
import { HeaderUser } from "./header-user";

export function SiteHeader() {
  return (
    <header className="flex h-14 w-full shrink-0 grow-0 basis-auto">
      <HeaderSearch />
      <HeaderUser />
    </header>
  );
}
