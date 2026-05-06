import { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";

export default function NextIntlProvider({ children }: PropsWithChildren) {
    return (
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
    )
}