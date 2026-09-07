'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Wind, 
  Gauge, 
  ArrowRight, 
  Flame, 
  Activity, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { useTheme } from '@/lib/context/ThemeContext';

interface TheCrisesProps {
  locale: string;
}

export function FeaturedIssues({ locale }: TheCrisesProps) {
  const crises = [
    {
      id: 'slcps',
      title: 'Short-Lived Climate Pollutants (SLCPs)',
      subtitle: 'HFCs & Methane Mitigation',
      tag: 'Fast-Action Climate Shield',
      tagBg: 'bg-amber-100 text-amber-900 border-amber-200',
      icon: Flame,
      iconBg: 'bg-amber-500 text-white',
      accentBorder: 'hover:border-amber-400',
      desc: 'SLCPs such as Hydrofluorocarbons (HFCs) remain in the atmosphere from a few days to 15 years, but trap thousands of times more heat than CO₂. Fast mitigation under the Kigali Amendment is our fastest lever to prevent crossing 1.5°C planetary tipping points.',
      points: [
        'HFC warming potential up to 14,000× that of CO₂',
        'Can avoid up to 0.5°C of warming by 2100',
        'Coupled with cooling energy efficiency gains'
      ],
      href: `/${locale}/issues/refrigerants`,
    },
    {
      id: 'llcps',
      title: 'Long-Lived Climate Pollutants (LLCPs)',
      subtitle: 'SF₆ & Millennial Threats',
      tag: 'Multi-Millennial Risk',
      tagBg: 'bg-rose-100 text-rose-900 border-rose-200',
      icon: Gauge,
      iconBg: 'bg-rose-600 text-white',
      accentBorder: 'hover:border-rose-400',
      desc: 'Sulfur Hexafluoride (SF₆) is the most potent greenhouse gas known to science, with a global warming potential of ~24,300× CO₂ and an atmospheric persistence exceeding 3,200 years. The Group urges decisive EU and global regulation to phase down SF₆ in electrical switchgear.',
      points: [
        'Global Warming Potential: 24,300× CO₂',
        'Atmospheric Lifetime: 3,200+ years',
        'Urgent regulatory phase-down in high-voltage equipment'
      ],
      href: `/${locale}/policy/montreal-protocol`,
    },
    {
      id: 'obsolete-refrigerants',
      title: 'Obsolete Refrigerants & ODS',
      subtitle: 'Chemical Transition & Banks',
      tag: 'Montreal Protocol Core',
      tagBg: 'bg-blue-100 text-blue-900 border-blue-200',
      icon: Wind,
      iconBg: 'bg-blue-600 text-white',
      accentBorder: 'hover:border-blue-400',
      desc: 'Legacy HCFCs and obsolete high-GWP chemical refrigerants in cooling equipment pose severe atmospheric threats through venting and dumping. We champion Lifecycle Refrigerant Management (LRM) and accelerated transition to ultra-low-GWP natural refrigerants (R-290, R-600a).',
      points: [
        'Safe recovery and destruction of chemical banks',
        'Adoption of energy-efficient natural refrigerants',
        'Banning global trade of obsolete chemical tech'
      ],
      href: `/${locale}/policy/montreal-protocol/refrigerants`,
    },
  ];

  const { theme } = useTheme();
  const isDark = theme === 'dark' || theme === 'nordic' || theme === 'emerald';
  const isLight = !isDark;

  const sectionBg =
    {
      white: 'bg-slate-50 text-slate-900 border-b border-slate-200',
      sand: 'bg-[#f5f2eb] text-stone-900 border-b border-amber-200',
      nordic: 'bg-[#061427] text-sky-100 border-b border-sky-900/50',
      emerald: 'bg-[#021f15] text-emerald-100 border-b border-emerald-900/50',
      dark: 'bg-slate-900 text-white border-b border-slate-800',
    }[theme] || 'bg-slate-900 text-white border-b border-slate-800';

  return (
    <section className={`py-24 transition-colors duration-300 relative overflow-hidden ${sectionBg}`} id="crises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
            isLight ? 'bg-emerald-100/80 border-emerald-300/60 text-emerald-900' : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
          }`}>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            Global Environmental Priorities
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            The Crises: Major Environmental Threats
          </h2>
          <p className={`text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            The Accra-Helsinki Group represents <strong className={isLight ? 'text-slate-900' : 'text-white'}>global interests</strong> dedicated to the Montreal Protocol framework. Our primary scientific focus targets the twin atmospheric threats of super-pollutants and outdated cooling chemistries.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crises.map((crisis, index) => {
            const Icon = crisis.icon;
            return (
              <motion.div
                key={crisis.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group ${crisis.accentBorder} ${
                  isLight ? 'bg-white border-slate-200/90 text-slate-900' : 'bg-white/[0.04] border-white/10 text-white'
                }`}
              >
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${crisis.iconBg} flex items-center justify-center shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${crisis.tagBg}`}>
                    {crisis.tag}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className={`text-xs font-bold tracking-wider uppercase mb-1 ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                  {crisis.subtitle}
                </span>
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                  isLight ? 'text-slate-900 group-hover:text-emerald-900' : 'text-white group-hover:text-amber-300'
                }`}>
                  {crisis.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {crisis.desc}
                </p>

                {/* Key Bullet Points */}
                <div className={`mt-auto space-y-2.5 pt-4 border-t mb-6 ${isLight ? 'border-slate-100' : 'border-white/10'}`}>
                  {crisis.points.map((pt, i) => (
                    <div key={i} className={`flex items-start gap-2 text-xs font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={crisis.href}
                  className="inline-flex items-center gap-2 font-bold text-sm text-emerald-700 hover:text-emerald-900 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Science &amp; Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FeaturedIssues;
