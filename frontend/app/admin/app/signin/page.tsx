import type { Metadata } from "next";

import { useTranslations, Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { setLocale } from "@/i18n/server";
import { Text, Title, Separator } from "semi-design-plus";

import { LocaleSwitcher } from "@/feature/login/locale-switcher";
import { NormalForm } from "@/feature/login/normal-form";
import { ThemeToggle } from "@/feature/login/theme-toggle";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("signin"),
  };
}

export default function Page() {
  const t = useTranslations("signin");

  async function onLocaleAction(locale: Locale) {
    "use server";
    await setLocale(locale);
  }

  async function onFormSubmitAction() {
    "use server";
  }

  return (
    <div className="bg-foreground box-border flex min-h-screen w-full justify-center p-3">
      <div className="border-highlight-0 bg-background flex w-full shrink-0 flex-col rounded-2xl border">
        <div className="flex w-full items-center justify-end p-6 max-sm:hidden">
          <div className="flex-1 min-w-0 text-left rtl:text-right">logo区域</div>
          <div className="flex items-center gap-1">
            <LocaleSwitcher action={onLocaleAction} />
            <Separator orientation="vertical" />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex w-full grow flex-col items-center justify-center px-6 pb-12 md:px-27">
          <div className="flex w-full flex-col sm:w-100">
            <div className="my-8 flex flex-col items-start gap-2">
              {/*className="text-typography-0 text-2xl leading-[1.2] font-semibold"*/}
              <Title heading={2}>{t("title")}</Title>
              {/*className="text-typography-2 text-sm leading-3.5"*/}
              <Text>{t("welcome")}</Text>
            </div>
            <NormalForm action={onFormSubmitAction} />
          </div>
        </div>
      </div>
    </div>
  );
}
