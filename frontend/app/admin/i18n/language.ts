export const languages = {
  "zh-CN": {
    name: "简体中文",
    dir: "ltr",
  },
  "en-US": {
    name: "English (United States)",
    dir: "ltr",
  },
  "ar-SA": {
    name: "العربية (السعودية)",
    dir: "rtl",
  },
} as const;

export type Locale = keyof typeof languages;

export const locales = ["zh-CN", "en-US", "ar-SA"] as Locale[];
