import { TupleToUnion } from 'type-fest';

export type Locale = TupleToUnion<typeof locales>;

export const locales = ['zh-CN', 'en-US'] as const;

export const defaultLocale = 'zh-CN';

export const languages: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English (United States)',
};
