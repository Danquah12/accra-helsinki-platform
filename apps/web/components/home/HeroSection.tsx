'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';
import { useTheme, ThemeId } from '@/lib/context/ThemeContext';

const HERO_THEME_STYLES: Record<
  ThemeId,
  {
    section: string;
    overlayGradient: string;
    radialAmbient: string;
    radialNordic: string;
    logoVariant: 'light' | 'dark';
    logoCard: string;
    subBadge: string;
    badgeDot: string;
    title: string;
    titleGradient: string;
    descCard: string;
    subtitle: string;
    scrollArrow: string;
  }
> = {
  white: {
    section: 'bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900',
    overlayGradient: 'bg-gradient-to-b from-slate-100/80 via-emerald-50/30 to-slate-100/90 opacity-90',
    radialAmbient: 'from-amber-600/10 via-emerald-600/10 to-transparent',
    radialNordic: 'from-sky-500/10 via-transparent to-transparent',
    logoVariant: 'light',
    logoCard: 'bg-white/95 border-slate-300 shadow-xl',
    subBadge: 'text-amber-800 font-bold',
    badgeDot: 'bg-amber-600',
    title: 'text-slate-900',
    titleGradient: 'from-amber-600 via-emerald-700 to-teal-700',
    descCard: 'bg-white/95 border-slate-200 text-slate-800 shadow-md',
    subtitle: 'text-slate-800',
    scrollArrow: 'text-slate-400 hover:text-amber-600',
  },
  dark: {
    section: 'bg-slate-950 text-white',
    overlayGradient: 'bg-gradient-to-b from-slate-950 via-emerald-950/80 to-slate-950 opacity-95',
    radialAmbient: 'from-amber-600/15 via-emerald-700/10 to-transparent',
    radialNordic: 'from-sky-600/10 via-transparent to-transparent',
    logoVariant: 'dark',
    logoCard: 'bg-white/5 border-white/20 shadow-2xl',
    subBadge: 'text-amber-400/90',
    badgeDot: 'bg-amber-400',
    title: 'text-white',
    titleGradient: 'from-amber-400 via-emerald-300 to-sky-300',
    descCard: 'bg-white/[0.04] border-white/10 text-emerald-100 shadow-xl',
    subtitle: 'text-emerald-100',
    scrollArrow: 'text-white/40 hover:text-amber-400',
  },
  nordic: {
    section: 'bg-[#07162c] text-sky-100',
    overlayGradient: 'bg-gradient-to-b from-[#07162c] via-[#0b2240] to-[#07162c] opacity-95',
    radialAmbient: 'from-cyan-500/15 via-sky-600/10 to-transparent',
    radialNordic: 'from-blue-600/20 via-transparent to-transparent',
    logoVariant: 'dark',
    logoCard: 'bg-sky-950/60 border-sky-500/40 shadow-2xl',
    subBadge: 'text-cyan-300 font-semibold',
    badgeDot: 'bg-cyan-400',
    title: 'text-white',
    titleGradient: 'from-cyan-300 via-sky-300 to-teal-300',
    descCard: 'bg-sky-950/50 border-sky-500/20 text-sky-100 shadow-xl',
    subtitle: 'text-sky-100',
    scrollArrow: 'text-sky-400/60 hover:text-cyan-300',
  },
  emerald: {
    section: 'bg-[#02261a] text-emerald-100',
    overlayGradient: 'bg-gradient-to-b from-[#02261a] via-[#043324] to-[#02261a] opacity-95',
    radialAmbient: 'from-emerald-500/20 via-teal-600/10 to-transparent',
    radialNordic: 'from-emerald-600/20 via-transparent to-transparent',
    logoVariant: 'dark',
    logoCard: 'bg-emerald-950/60 border-emerald-500/40 shadow-2xl',
    subBadge: 'text-emerald-300 font-semibold',
    badgeDot: 'bg-emerald-400',
    title: 'text-white',
    titleGradient: 'from-emerald-300 via-teal-300 to-amber-300',
    descCard: 'bg-emerald-950/50 border-emerald-500/20 text-emerald-100 shadow-xl',
    subtitle: 'text-emerald-100',
    scrollArrow: 'text-emerald-400/60 hover:text-emerald-300',
  },
  sand: {
    section: 'bg-[#faf8f4] text-stone-900',
    overlayGradient: 'bg-gradient-to-b from-[#f5f2ea] via-[#faf8f4] to-[#ede7db] opacity-95',
    radialAmbient: 'from-amber-600/10 via-amber-700/10 to-transparent',
    radialNordic: 'from-yellow-600/10 via-transparent to-transparent',
    logoVariant: 'light',
    logoCard: 'bg-white/90 border-amber-300/70 shadow-xl',
    subBadge: 'text-amber-900 font-bold',
    badgeDot: 'bg-amber-600',
    title: 'text-stone-900',
    titleGradient: 'from-amber-700 via-emerald-800 to-amber-900',
    descCard: 'bg-white/90 border-amber-200 text-stone-800 shadow-md',
    subtitle: 'text-stone-800',
    scrollArrow: 'text-stone-400 hover:text-amber-700',
  },
};

export function HeroSection({ locale: _locale }: { locale: string }) {
  const { theme } = useTheme();
  const themeStyle = HERO_THEME_STYLES[theme] || HERO_THEME_STYLES.dark;

  return (
    <section className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden transition-colors duration-300 ${themeStyle.section}`}>
      {/* Dynamic Atmospheric Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 transition-colors duration-300 ${themeStyle.overlayGradient}`} />
        
        {/* Soft atmospheric ambient glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-[30%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${themeStyle.radialAmbient} pointer-events-none`}
        />
        
        {/* Cool Nordic/Arctic atmospheric radial */}
        <div className={`absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] ${themeStyle.radialNordic} pointer-events-none`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 pb-12 w-full">
        
        {/* Official Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-6 sm:mb-8"
        >
          <div className={`p-2.5 backdrop-blur-md rounded-full border transition-all hover:scale-105 duration-300 ${themeStyle.logoCard}`}>
            <AccraHelsinkiLogo size="2xl" showText={false} variant={themeStyle.logoVariant} />
          </div>
          <div className={`mt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-colors ${themeStyle.subBadge}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${themeStyle.badgeDot}`} />
            Accra &bull; Helsinki &bull; Global Montreal Protocol Community
          </div>
        </motion.div>

        {/* Main Title: The Accra-Helsinki Group for Sustainable Cooling */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.1] transition-colors ${themeStyle.title}`}
        >
          The Accra-Helsinki Group <br className="hidden sm:inline" />
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${themeStyle.titleGradient}`}>
            for Sustainable Cooling
          </span>
        </motion.h1>
        
        {/* Slogan Description: Horizontal match with Official Mission width below, no quotes, trailing period */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className={`mt-8 w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-colors ${themeStyle.descCard}`}
        >
          <p className={`text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-center ${themeStyle.subtitle}`}>
            An informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol on Substances that Deplete the Ozone Layer, and preventing ozone depletion and climate tipping points.
          </p>
        </motion.div>

        {/* Subtle Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`mt-10 flex justify-center transition-colors ${themeStyle.scrollArrow}`}
        >
          <a href="#about-group" aria-label="Scroll to overview">
            <ChevronDown className="w-6 h-6 transition-colors" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;
