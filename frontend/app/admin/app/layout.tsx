import type { Metadata } from "next";

import { getLocale, getTranslations } from "next-intl/server";
import { PropsWithChildren } from "react";
import { ToastProvider, DirectionProvider } from "@galio/design-component";
import { languages } from "@/i18n/language";

import TanstackQueryProvider from "@/contexts/tanstack-query-context";
import NextThemeProvider from "@/contexts/next-theme-context";
import NextIntlProvider from "@/contexts/next-intl-context";

import AppInitializer from "@/components/app-initializer";

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
          <NextThemeProvider>
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
