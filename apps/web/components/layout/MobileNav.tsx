'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Bot } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

interface MobileNavProps {
  locale: string;
  navItems: any[];
  onClose: () => void;
  toggleLocale?: () => void;
}

export default function MobileNav({ locale, navItems, onClose, toggleLocale }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

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

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 pb-20">
        {navItems.map((item) => (
          <div key={item.name} className="flex flex-col border-b border-slate-100 pb-2">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleExpand(item.name)}
                  className="flex items-center justify-between py-3 px-2 text-lg font-semibold text-slate-900 hover:text-emerald-800 transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      expandedItems.includes(item.name) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedItems.includes(item.name) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-4 pl-4 pr-2 py-2 border-l-2 border-emerald-200 ml-2 mb-2">
                        {item.dropdown.map((col: any, colIdx: number) => (
                          <div key={colIdx} className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                              {col.title}
                            </span>
                            {col.links.map((link: any, linkIdx: number) => (
                              <Link
                                key={linkIdx}
                                href={`/${locale}${link.href}`}
                                className="text-slate-600 hover:text-emerald-800 py-1.5 flex items-center gap-2 text-sm font-medium"
                                onClick={onClose}
                              >
                                {link.icon && React.cloneElement(link.icon, { className: 'w-4 h-4' })}
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={`/${locale}${item.href === '/' ? '' : item.href}`}
                className="py-3 px-2 text-lg font-semibold text-slate-900 hover:text-emerald-800 transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Drawer Footer with Language Switcher and AI Assistant */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col gap-3 mt-auto">
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
