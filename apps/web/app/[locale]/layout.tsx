import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ThemeColorSwitcher from '@/components/shared/ThemeColorSwitcher';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Accra-Helsinki | CSRTA Africa Environmental Intelligence Platform',
  description: 'Empowering communities, researchers, and policymakers with data-driven insights to stop environmental dumping and build sustainable futures in Africa.',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={`${inter.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('accra-helsinki-theme')||'dark';document.documentElement.setAttribute('data-theme',t);if(document.body){document.body.className+=' theme-'+t;}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <main className="flex-1">
              {children}
            </main>
            <Footer locale={locale} />
            <ThemeColorSwitcher variant="floating" />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
