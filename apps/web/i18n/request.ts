import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import enMessages from '../messages/en.json';
import frMessages from '../messages/fr.json';
import arMessages from '../messages/ar.json';
import ptMessages from '../messages/pt.json';
import swMessages from '../messages/sw.json';

const messagesMap: Record<string, any> = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
  pt: ptMessages,
  sw: swMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesMap[locale] || enMessages
  };
});
