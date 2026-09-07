'use client';

import React from 'react';
import { Flame, Clock, ThermometerSnowflake, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme, ThemeId } from '@/lib/context/ThemeContext';

const STATS_THEME_STYLES: Record<
  ThemeId,
  {
    section: string;
    card: string;
    value: string;
    label: string;
    detail: string;
  }
> = {
  white: {
    section: 'bg-slate-100/90 py-14 relative z-20 shadow-sm border-y border-slate-200',
    card: 'bg-white border-slate-200/90 hover:border-amber-500 shadow-sm hover:shadow-md hover:bg-slate-50/80',
    value: 'text-slate-900',
    label: 'text-slate-700',
    detail: 'text-slate-500',
  },
  dark: {
    section: 'bg-slate-900 py-14 relative z-20 shadow-2xl border-y border-white/10',
    card: 'bg-white/[0.04] border-white/[0.08] hover:border-amber-400/30 hover:bg-white/[0.07]',
    value: 'text-white',
    label: 'text-slate-200',
    detail: 'text-slate-400',
  },
  nordic: {
    section: 'bg-[#061427] py-14 relative z-20 shadow-2xl border-y border-sky-800/40',
    card: 'bg-sky-900/30 border-sky-700/40 hover:border-cyan-400/40 hover:bg-sky-900/50',
    value: 'text-white',
    label: 'text-sky-100',
    detail: 'text-sky-300/80',
  },
  emerald: {
    section: 'bg-[#021f15] py-14 relative z-20 shadow-2xl border-y border-emerald-800/40',
    card: 'bg-emerald-900/30 border-emerald-700/40 hover:border-emerald-400/40 hover:bg-emerald-900/50',
    value: 'text-white',
    label: 'text-emerald-100',
    detail: 'text-emerald-300/80',
  },
  sand: {
    section: 'bg-[#ede7db]/80 py-14 relative z-20 shadow-sm border-y border-amber-200/80',
    card: 'bg-white/90 border-amber-200/90 hover:border-amber-500 shadow-sm hover:shadow-md hover:bg-white',
    value: 'text-stone-900',
    label: 'text-stone-800',
    detail: 'text-stone-600',
  },
};

export function StatsBar() {
  const { theme } = useTheme();
  const themeStyle = STATS_THEME_STYLES[theme] || STATS_THEME_STYLES.dark;

  const stats = [
    { 
      value: '24,300×', 
      label: 'SF₆ Global Warming Potential vs CO₂', 
      detail: 'Long-Lived Climate Pollutant (LLCP)',
      icon: Flame,
      color: 'text-rose-400',
      bg: 'bg-rose-500/20'
    },
    { 
      value: '3,200+ Yrs', 
      label: 'Atmospheric Lifetime of SF₆', 
      detail: 'Irreversible Multi-Millennial Risk',
      icon: Clock,
      color: 'text-amber-400',
      bg: 'bg-amber-500/20'
    },
    { 
      value: 'Up to 0.5°C', 
      label: 'Avoidable Global Temperature Rise', 
      detail: 'Via Kigali HFC Phasedown + Energy Efficiency',
      icon: ThermometerSnowflake,
      color: 'text-sky-400',
      bg: 'bg-sky-500/20'
    },
    { 
      value: 'MOP36 & 37', 
      label: 'Montreal Protocol Convenings', 
      detail: 'Bangkok (Launch) & Nairobi (SF₆ Side Event)',
      icon: Users2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/20'
    },
  ];

  return (
    <section className={`py-14 relative z-20 transition-colors duration-300 ${themeStyle.section}`} id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-start space-x-4 p-5 rounded-2xl border transition-all duration-200 ${themeStyle.card}`}
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-black tracking-tight transition-colors ${themeStyle.value}`}>{stat.value}</div>
                  <div className={`text-xs sm:text-sm font-semibold mt-1 transition-colors ${themeStyle.label}`}>{stat.label}</div>
                  <div className={`text-[11px] font-medium mt-0.5 transition-colors ${themeStyle.detail}`}>{stat.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
