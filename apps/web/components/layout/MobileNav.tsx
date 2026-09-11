'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { X, Bot } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeColorSwitcher from '@/components/shared/ThemeColorSwitcher';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

interface MobileNavProps {
  locale: string;
  navItems: any[];
  onClose: () => void;
  toggleLocale?: () => void;
}

export default function MobileNav({ locale, navItems, onClose, toggleLocale }: MobileNavProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col w-full h-[100dvh] overflow-hidden"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <Link href={`/${locale}`} className="flex items-center" onClick={onClose}>
          <AccraHelsinkiLogo size="sm" variant="light" />
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* Nav List: Simplified direct links */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 pb-20">
        {navItems.map((item) => (
          <div key={item.name} className="border-b border-slate-100 pb-2">
            <Link
              href={`/${locale}${item.href === '/' ? '' : item.href}`}
              className="py-3 px-2 text-lg font-semibold text-slate-900 hover:text-emerald-800 transition-colors block"
              onClick={onClose}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Drawer Footer with Theme Switcher, Language Switcher and AI Assistant */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col gap-3 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Theme Color</span>
          <ThemeColorSwitcher variant="header" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Language</span>
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <Link
          href={`/${locale}/research/ai-assistant`}
          className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-center text-sm shadow-sm flex items-center justify-center gap-2 transition-colors"
          onClick={onClose}
        >
          <Bot size={18} />
          <span>Launch AI Cooling Assistant</span>
        </Link>
      </div>
    </motion.div>
  );
}
