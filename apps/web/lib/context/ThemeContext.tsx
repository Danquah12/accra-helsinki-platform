'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'dark' | 'white' | 'nordic' | 'emerald' | 'sand';

export interface ThemeOption {
  id: ThemeId;
  label: string;
  sublabel: string;
  bgPreview: string;
  textColor: string;
  dotColor: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'dark',
    label: 'Dark Midnight',
    sublabel: 'Deep atmospheric slate (Default)',
    bgPreview: 'bg-slate-950',
    textColor: 'text-white',
    dotColor: 'bg-amber-400',
  },
  {
    id: 'white',
    label: 'Clean White',
    sublabel: 'Pure crisp high-contrast light',
    bgPreview: 'bg-white',
    textColor: 'text-slate-900',
    dotColor: 'bg-emerald-600',
  },
  {
    id: 'nordic',
    label: 'Nordic Blue',
    sublabel: 'Finnish Arctic marine tone',
    bgPreview: 'bg-sky-950',
    textColor: 'text-sky-100',
    dotColor: 'bg-cyan-400',
  },
  {
    id: 'emerald',
    label: 'Montreal Emerald',
    sublabel: 'Sustainable cooling deep green',
    bgPreview: 'bg-emerald-950',
    textColor: 'text-emerald-100',
    dotColor: 'bg-emerald-400',
  },
  {
    id: 'sand',
    label: 'Warm Sand',
    sublabel: 'Diplomatic warm parchment',
    bgPreview: 'bg-[#f7f5f0]',
    textColor: 'text-amber-950',
    dotColor: 'bg-amber-600',
  },
];

export function applyThemeToDOM(theme: ThemeId) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;

  root.setAttribute('data-theme', theme);

  if (body) {
    body.classList.remove('theme-dark', 'theme-white', 'theme-nordic', 'theme-emerald', 'theme-sand');
    body.classList.add(`theme-${theme}`);
  }

  // Broadcast custom event so all listeners update reactively
  window.dispatchEvent(new CustomEvent('accra-helsinki-theme-change', { detail: { theme } }));
}

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  themeOption: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  themeOption: THEME_OPTIONS[0],
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('accra-helsinki-theme') as ThemeId | null;
    if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
      setThemeState(saved);
      applyThemeToDOM(saved);
    } else {
      applyThemeToDOM('dark');
    }

    const handleExternalChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: ThemeId }>;
      if (customEvent.detail?.theme) {
        setThemeState(customEvent.detail.theme);
      }
    };

    window.addEventListener('accra-helsinki-theme-change', handleExternalChange);
    return () => {
      window.removeEventListener('accra-helsinki-theme-change', handleExternalChange);
    };
  }, []);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('accra-helsinki-theme', newTheme);
    } catch (e) {
      console.warn('Could not save theme to localStorage', e);
    }
    applyThemeToDOM(newTheme);
  };

  const themeOption = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeOption }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
