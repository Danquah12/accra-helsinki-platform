'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Globe } from 'lucide-react';

interface MobileNavProps {
  locale: string;
  navItems: any[];
  onClose: () => void;
  toggleLocale: () => void;
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
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col w-full h-[100dvh] overflow-hidden"
    >
      <div className="flex items-center justify-between p-4 border-b border-emerald-100">
        <Link href={`/${locale}`} className="flex items-center gap-2" onClick={onClose}>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900 text-white">
            <Globe size={18} />
          </div>
          <span className="text-lg font-bold text-emerald-900">ACCRA-HELSINKI</span>
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-slate-500 hover:text-emerald-900 rounded-md hover:bg-emerald-50 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 pb-24">
        {navItems.map((item) => (
          <div key={item.name} className="flex flex-col border-b border-slate-100 pb-2">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleExpand(item.name)}
                  className="flex items-center justify-between py-3 px-2 text-lg font-medium text-emerald-950 hover:text-emerald-700 transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    size={20}
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
                      <div className="flex flex-col gap-4 pl-4 pr-2 py-2 border-l-2 border-emerald-100 ml-2 mb-2">
                        {item.dropdown.map((col: any, colIdx: number) => (
                          <div key={colIdx} className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                              {col.title}
                            </span>
                            {col.links.map((link: any, linkIdx: number) => (
                              <Link
                                key={linkIdx}
                                href={`/${locale}${link.href}`}
                                className="text-slate-600 hover:text-emerald-700 py-1.5 flex items-center gap-2"
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
                className="py-3 px-2 text-lg font-medium text-emerald-950 hover:text-emerald-700 transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-emerald-100 bg-slate-50 flex flex-col gap-4 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">Language</span>
          <button
            onClick={toggleLocale}
            className="text-sm font-bold text-emerald-900 bg-white border border-emerald-200 px-4 py-2 rounded-lg"
          >
            {locale === 'en' ? 'Français' : 'English'}
          </button>
        </div>
        <Link
          href={`/${locale}/take-action`}
          className="w-full py-3 rounded-lg bg-amber-600 text-white font-medium text-center shadow-sm"
          onClick={onClose}
        >
          Take Action
        </Link>
      </div>
    </motion.div>
  );
}
