import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'ar', 'pt', 'sw'],
  defaultLocale: 'en'
});

export type Locale = (typeof routing.locales)[number];
