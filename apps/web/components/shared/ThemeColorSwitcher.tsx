'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check, Sun, Moon, Droplets, Leaf, Compass } from 'lucide-react';
import {
  ThemeId,
  ThemeOption,
  THEME_OPTIONS,
  applyThemeToDOM,
  useTheme,
} from '@/lib/context/ThemeContext';

export type { ThemeId, ThemeOption };
export { THEME_OPTIONS, applyThemeToDOM };

interface ThemeColorSwitcherProps {
  variant?: 'header' | 'floating' | 'inline';
}

export default function ThemeColorSwitcher({ variant = 'header' }: ThemeColorSwitcherProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: ThemeId) => {
    setTheme(id);
    setIsOpen(false);
  };

  const activeOption = THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  if (variant === 'floating') {
    return (
      <div ref={dropdownRef} className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-3 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3 space-y-1.5 backdrop-blur-lg animate-in fade-in slide-in-from-bottom-2">
            <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Select Background Color
              </span>
            </div>
            {THEME_OPTIONS.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                  currentTheme === theme.id
                    ? 'bg-amber-500/15 border border-amber-400/40 text-slate-900 dark:text-white font-bold'
                    : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-4 h-4 rounded-full ${theme.bgPreview} border border-slate-400/50 shadow-xs shrink-0`} />
                  <div>
                    <div className="text-xs font-semibold">{theme.label}</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500">{theme.sublabel}</div>
                  </div>
                </div>
                {currentTheme === theme.id && <Check size={14} className="text-amber-500 shrink-0" />}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group text-xs font-bold"
          aria-label="Toggle background color menu"
        >
          <Palette size={16} className="text-amber-400 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Theme Color</span>
          <span className={`w-2.5 h-2.5 rounded-full ${activeOption.bgPreview} border border-white/30`} />
        </button>
      </div>
    );
  }

  // Header compact variant
  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 hover:border-amber-500 bg-white hover:bg-amber-50/50 text-slate-700 transition-colors shadow-2xs"
        aria-expanded={isOpen}
        aria-label="Change background color"
      >
        <Palette size={14} className="text-amber-600" />
        <span className="hidden sm:inline">Color</span>
        <span className={`w-2.5 h-2.5 rounded-full ${activeOption.bgPreview} border border-slate-300`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Change Background Theme
            </span>
          </div>
          <div className="space-y-1">
            {THEME_OPTIONS.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all text-xs ${
                  currentTheme === theme.id
                    ? 'bg-amber-500/10 text-amber-900 font-bold border border-amber-400/40'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-3.5 h-3.5 rounded-full ${theme.bgPreview} border border-slate-400/50 shrink-0`} />
                  <div>
                    <div className="font-semibold">{theme.label}</div>
                    <div className="text-[10px] text-slate-400">{theme.sublabel}</div>
                  </div>
                </div>
                {currentTheme === theme.id && <Check size={13} className="text-amber-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
