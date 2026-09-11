'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { Menu, Bot } from 'lucide-react';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeColorSwitcher from '@/components/shared/ThemeColorSwitcher';
import { useTheme } from '@/lib/context/ThemeContext';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Issues', href: '/issues' },
  { name: 'Research & Data', href: '/research' },
  { name: 'Laws & Policy', href: '/policy' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Media', href: '/media' },
  { name: 'Leadership & Partners', href: '/about' },
];

export default function Header({ locale }: { locale: string }) {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDark = theme === 'dark' || theme === 'nordic' || theme === 'emerald';

  const headerBgClass =
    {
      white: 'bg-white/95 border-b border-slate-200 shadow-sm text-slate-900',
      sand: 'bg-[#faf8f4]/95 border-b border-amber-200/90 shadow-sm text-stone-900',
      nordic: 'bg-[#07162c]/95 border-b border-sky-800/60 shadow-sm text-sky-100',
      emerald: 'bg-[#02261a]/95 border-b border-emerald-800/60 shadow-sm text-emerald-100',
      dark: 'bg-slate-950/95 border-b border-slate-800 shadow-sm text-white',
    }[theme] || 'bg-slate-950/95 border-b border-slate-800 shadow-sm text-white';

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-colors duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <AccraHelsinkiLogo size="md" variant={isDark ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Nav: Clean direct links, no dropdown subcategories, uniform styling */}
          <nav className="hidden lg:flex items-center h-full gap-1 ml-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href === '/' ? '' : item.href}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:text-white hover:bg-white/10'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right actions: Language Switcher, Color Theme Switcher and AI Assistant */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeColorSwitcher variant="header" />
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/research/ai-assistant`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
            >
              <Bot size={16} />
              <span>AI Assistant</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${isDark ? 'text-white' : 'text-slate-800'}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-900 via-amber-600 to-sky-700"></div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav
            locale={locale}
            navItems={navItems}
            onClose={() => setIsMobileMenuOpen(false)}
            toggleLocale={toggleLocale}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
