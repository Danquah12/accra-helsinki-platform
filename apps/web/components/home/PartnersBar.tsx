'use client';

import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { ThemeId, THEME_OPTIONS, applyThemeToDOM } from '@/components/shared/ThemeColorSwitcher';

const PARTNERS = [
  { name: 'UNEP Ozone Secretariat', tag: 'UN Environment', dot: 'bg-sky-400' },
  { name: 'Montreal Protocol', tag: 'Treaty Framework', dot: 'bg-blue-400' },
  { name: 'Climate & Clean Air Coalition (CCAC)', tag: 'Fast Mitigation', dot: 'bg-emerald-400' },
  { name: 'IGSD', tag: 'Governance & Science', dot: 'bg-amber-400' },
  { name: 'Ghana EPA', tag: 'Article 5 Co-Chair Host', dot: 'bg-amber-400' },
  { name: 'Ministry of the Environment Finland', tag: 'Article 2 Co-Chair Host', dot: 'bg-cyan-400' },
  { name: 'European Commission (DG CLIMA)', tag: 'Policy Leadership', dot: 'bg-indigo-400' },
  { name: 'International Institute of Refrigeration (IIR)', tag: 'Global RAC Science', dot: 'bg-teal-400' },
  { name: 'African Union Commission', tag: 'Pan-African Transition', dot: 'bg-emerald-400' },
  { name: 'Basel & Bamako Conventions', tag: 'Waste Dumping Controls', dot: 'bg-rose-400' },
];

const THEME_STYLES: Record<
  ThemeId,
  {
    section: string;
    badge: string;
    badgeDot: string;
    subtitle: string;
    card: string;
    cardTitle: string;
    cardTag: string;
    glow1: string;
    glow2: string;
  }
> = {
  dark: {
    section: 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white border-y border-white/10',
    badge: 'bg-white/[0.06] border-white/15 text-amber-400',
    badgeDot: 'bg-amber-400',
    subtitle: 'text-slate-400',
    card: 'bg-white/[0.04] hover:bg-white/[0.09] border-white/10 hover:border-amber-400/50 shadow-lg text-slate-200',
    cardTitle: 'text-slate-200 group-hover:text-white',
    cardTag: 'text-slate-400 group-hover:text-amber-300/90',
    glow1: 'bg-emerald-500/10',
    glow2: 'bg-amber-500/10',
  },
  white: {
    section: 'bg-gradient-to-b from-slate-100/90 via-white to-slate-100/90 text-slate-900 border-y border-slate-300/80',
    badge: 'bg-emerald-100/90 border-emerald-300 text-emerald-950 font-bold',
    badgeDot: 'bg-emerald-600',
    subtitle: 'text-slate-600',
    card: 'bg-white hover:bg-slate-50 border border-slate-300/80 hover:border-emerald-600 shadow-md hover:shadow-lg text-slate-900',
    cardTitle: 'text-slate-900 font-bold group-hover:text-emerald-950',
    cardTag: 'text-slate-600 font-semibold group-hover:text-emerald-700',
    glow1: 'bg-emerald-500/5',
    glow2: 'bg-amber-500/5',
  },
  nordic: {
    section: 'bg-gradient-to-b from-[#07162c] via-[#0b2240] to-[#07162c] text-sky-100 border-y border-sky-800/50',
    badge: 'bg-sky-500/10 border-sky-400/20 text-cyan-300',
    badgeDot: 'bg-cyan-400',
    subtitle: 'text-sky-300/80',
    card: 'bg-sky-900/30 hover:bg-sky-900/50 border-sky-800/40 hover:border-cyan-400/50 shadow-lg text-sky-100',
    cardTitle: 'text-sky-100 font-bold group-hover:text-white',
    cardTag: 'text-sky-300/80 font-semibold group-hover:text-cyan-300',
    glow1: 'bg-cyan-500/10',
    glow2: 'bg-blue-500/10',
  },
  emerald: {
    section: 'bg-gradient-to-b from-[#02261a] via-[#043324] to-[#02261a] text-emerald-100 border-y border-emerald-800/50',
    badge: 'bg-emerald-500/10 border-emerald-400/20 text-emerald-300',
    badgeDot: 'bg-emerald-400',
    subtitle: 'text-emerald-300/80',
    card: 'bg-emerald-900/30 hover:bg-emerald-900/50 border-emerald-800/40 hover:border-emerald-400/50 shadow-lg text-emerald-100',
    cardTitle: 'text-emerald-100 font-bold group-hover:text-white',
    cardTag: 'text-emerald-300/80 font-semibold group-hover:text-emerald-300',
    glow1: 'bg-emerald-500/15',
    glow2: 'bg-teal-500/15',
  },
  sand: {
    section: 'bg-gradient-to-b from-[#f5f2eb] via-[#faf8f4] to-[#f5f2eb] text-amber-950 border-y border-amber-300/70',
    badge: 'bg-amber-100/90 border-amber-300 text-amber-900 font-bold',
    badgeDot: 'bg-amber-600',
    subtitle: 'text-amber-800/80',
    card: 'bg-white/90 hover:bg-white border-amber-200/90 hover:border-amber-600 shadow-sm hover:shadow-md text-amber-950',
    cardTitle: 'text-amber-950 font-bold group-hover:text-amber-950',
    cardTag: 'text-amber-800/90 font-semibold group-hover:text-amber-950',
    glow1: 'bg-amber-500/10',
    glow2: 'bg-yellow-500/10',
  },
};

export default function PartnersBar() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('accra-helsinki-theme') as ThemeId | null;
    if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
      setCurrentTheme(saved);
    }

    const handleExternalChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: ThemeId }>;
      if (customEvent.detail?.theme) {
        setCurrentTheme(customEvent.detail.theme);
      }
    };

    window.addEventListener('accra-helsinki-theme-change', handleExternalChange);
    return () => {
      window.removeEventListener('accra-helsinki-theme-change', handleExternalChange);
    };
  }, []);

  const handleThemeChange = (theme: ThemeId) => {
    setCurrentTheme(theme);
    localStorage.setItem('accra-helsinki-theme', theme);
    applyThemeToDOM(theme);
  };

  const themeStyle = THEME_STYLES[currentTheme] || THEME_STYLES.dark;

  return (
    <section className={`py-16 ${themeStyle.section} relative overflow-hidden select-none transition-colors duration-300`}>
      {/* Atmospheric ambient glows */}
      <div className={`absolute -top-24 left-1/4 w-96 h-48 ${themeStyle.glow1} rounded-full blur-3xl pointer-events-none transition-colors duration-300`} />
      <div className={`absolute -bottom-24 right-1/4 w-96 h-48 ${themeStyle.glow2} rounded-full blur-3xl pointer-events-none transition-colors duration-300`} />

      <div className="container mx-auto px-4 lg:px-8 mb-8 text-center relative z-10">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-2.5 ${themeStyle.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${themeStyle.badgeDot} animate-pulse`} />
          Our Partners &amp; Global Collaborators
        </div>
        <p className={`text-xs max-w-md mx-auto mb-4 ${themeStyle.subtitle}`}>
          Fostering shared responsibility between Article 5 and Article 2 Parties to the Montreal Protocol.
        </p>

        {/* Interactive Background Color Palette Toggle */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 opacity-70 flex items-center gap-1">
            <Palette size={12} className="text-amber-500" />
            Background:
          </span>
          {THEME_OPTIONS.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                currentTheme === theme.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm scale-105'
                  : 'hover:bg-black/10 dark:hover:bg-white/10 text-current opacity-80 hover:opacity-100'
              }`}
              aria-label={`Switch background to ${theme.label}`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${theme.bgPreview} border border-black/20 dark:border-white/30`} />
              <span>{theme.label}</span>
              {currentTheme === theme.id && <Check size={11} className="stroke-[3]" />}
            </button>
          ))}
        </div>
      </div>
      
      {/* Seamless infinite marquee with side-by-side tracks (Zero text overlap) */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
        <div className="flex w-max animate-partners-marquee hover:[animation-play-state:paused]">
          
          {/* First Track */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7 pr-5 sm:pr-7">
            {PARTNERS.map((partner, i) => (
              <div
                key={`partner-track1-${i}`}
                className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl border transition-all duration-200 group cursor-default backdrop-blur-sm ${themeStyle.card}`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${partner.dot} shadow-[0_0_8px_rgba(255,255,255,0.4)] shrink-0`} />
                <div className="flex flex-col text-left">
                  <span className={`text-sm sm:text-base tracking-tight whitespace-nowrap transition-colors ${themeStyle.cardTitle}`}>
                    {partner.name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider transition-colors ${themeStyle.cardTag}`}>
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate Second Track for seamless continuous loop */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7 pr-5 sm:pr-7" aria-hidden="true">
            {PARTNERS.map((partner, i) => (
              <div
                key={`partner-track2-${i}`}
                className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl border transition-all duration-200 group cursor-default backdrop-blur-sm ${themeStyle.card}`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${partner.dot} shadow-[0_0_8px_rgba(255,255,255,0.4)] shrink-0`} />
                <div className="flex flex-col text-left">
                  <span className={`text-sm sm:text-base tracking-tight whitespace-nowrap transition-colors ${themeStyle.cardTitle}`}>
                    {partner.name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider transition-colors ${themeStyle.cardTag}`}>
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Linear seamless 50% keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes partnersMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-partners-marquee {
          animation: partnersMarquee 42s linear infinite;
          will-change: transform;
        }
      `}} />
    </section>
  );
}

