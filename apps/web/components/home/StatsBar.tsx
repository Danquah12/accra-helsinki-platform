'use client';

import React from 'react';
import { Flame, Clock, ThermometerSnowflake, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function StatsBar() {
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
      color: 'text-sky-300',
      bg: 'bg-sky-500/20'
    },
    { 
      value: 'MOP36 & 37', 
      label: 'Montreal Protocol Convenings', 
      detail: 'Bangkok (Launch) & Nairobi (SF₆ Side Event)',
      icon: Users2,
      color: 'text-emerald-300',
      bg: 'bg-emerald-500/20'
    },
  ];

  return (
    <section className="bg-slate-900 py-14 relative z-20 shadow-2xl border-y border-white/10" id="stats">
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
                className="flex items-start space-x-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30 transition-all hover:bg-white/[0.07]"
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-0.5">{stat.detail}</div>
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
