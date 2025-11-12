'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      defaultTheme='system'
      attribute='data-theme'
      storageKey='next-theme'
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
