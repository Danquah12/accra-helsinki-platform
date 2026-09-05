'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  region: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    region: 'Global / West & Southern Africa',
    flag: '🇬🇧'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    region: 'Afrique de l’Ouest et Centrale',
    flag: '🇫🇷'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    region: 'شمال إفريقيا (North Africa)',
    flag: '🇪🇬'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    region: 'África Lusófona (Angola, Mozambique)',
    flag: '🇵🇹'
  },
  {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    region: 'Afrika Mashariki (East Africa)',
    flag: '🇰🇪'
  }
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const activeLanguage = LANGUAGES.find(l => l.code === currentLocale) || LANGUAGES[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (newCode: string) => {
    setIsOpen(false);
    if (newCode === currentLocale) return;

    // Replace current locale segment in pathname
    const segments = pathname.split('/');
    if (segments.length > 1 && LANGUAGES.some(l => l.code === segments[1])) {
      segments[1] = newCode;
    } else {
      segments.splice(1, 0, newCode);
    }
    const newPath = segments.join('/') || `/${newCode}`;
    router.push(newPath);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 hover:border-emerald-700 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 transition-colors shadow-2xs"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-emerald-700" />
        <span>{activeLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            Choose Language / Lugha / لغة
          </div>
          <div className="space-y-0.5">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLocale;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-emerald-50 transition-colors text-xs ${
                    isSelected ? 'bg-emerald-50/70 font-bold text-emerald-900' : 'text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="truncate">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-slate-900">{lang.nativeName}</span>
                        {lang.nativeName !== lang.name && (
                          <span className="text-[10px] text-slate-400">({lang.name})</span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">{lang.region}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
