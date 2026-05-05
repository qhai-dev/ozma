import type { Metadata } from "next";

import { NextIntlClientProvider as NextIntlProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { ToastProvider, DirectionProvider } from "semi-design-plus";
import { languages } from "@/i18n/language";

import AppInitializer from "@/components/app-initializer";
import TanstackQueryProvider from "@/contexts/tanstack-query-context";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("app");
  return {
    title: {
      template: `%s-${t("title")}`,
      default: t("title"),
    },
  };
}

export default async function Layout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  const { dir } = languages[locale];

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className="h-full overflow-hidden">
      <body className="h-full select-auto">
        <NextIntlProvider>
          <NextThemeProvider
            defaultTheme="system"
            attribute="data-theme"
            enableSystem
            disableTransitionOnChange
            enableColorScheme={false}
          >
            <TanstackQueryProvider>
              <ToastProvider>
                <DirectionProvider direction={dir} dir={dir}>
                  <AppInitializer>{children}</AppInitializer>
                </DirectionProvider>
              </ToastProvider>
            </TanstackQueryProvider>
          </NextThemeProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
