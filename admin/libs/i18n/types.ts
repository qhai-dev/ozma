import type messages from '@/message/zh-CN.json';

export type Locale = 'zh-CN' | 'en-US';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}
