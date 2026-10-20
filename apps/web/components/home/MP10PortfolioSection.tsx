'use client';

import React, { useState } from 'react';
import { MP10_PORTFOLIO, MP10Opportunity } from '@/data/mp10Portfolio';
import { FileText, Download, CheckCircle2, Sparkles, Filter, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface MP10PortfolioSectionProps {
  isLight?: boolean;
  locale?: string;
}

export function MP10PortfolioSection({ isLight = false, locale = 'en' }: MP10PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Kigali & Efficiency',
    'Lifecycle & Feedstocks',
    'Substances & Emissions',
    'Natural & Non-Chemical',
  ];

  const filteredOpportunities = selectedCategory === 'All'
    ? MP10_PORTFOLIO
    : MP10_PORTFOLIO.filter(item => item.category === selectedCategory);

  const getColorClasses = (color: MP10Opportunity['color']) => {
    switch (color) {
      case 'emerald':
        return {
          num: isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
          badge: isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
          hover: 'hover:border-emerald-500/50',
          dot: 'bg-emerald-500',
        };
      case 'amber':
        return {
          num: isLight ? 'bg-amber-100 text-amber-800' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
          badge: isLight ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-amber-500/10 text-amber-300 border-amber-500/20',
          hover: 'hover:border-amber-500/50',
          dot: 'bg-amber-500',
        };
      case 'sky':
        return {
          num: isLight ? 'bg-sky-100 text-sky-800' : 'bg-sky-500/20 text-sky-400 border border-sky-500/30',
          badge: isLight ? 'bg-sky-50 text-sky-700 border-sky-200' : 'bg-sky-500/10 text-sky-300 border-sky-500/20',
          hover: 'hover:border-sky-500/50',
          dot: 'bg-sky-500',
        };
      case 'indigo':
        return {
          num: isLight ? 'bg-indigo-100 text-indigo-800' : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
          badge: isLight ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
          hover: 'hover:border-indigo-500/50',
          dot: 'bg-indigo-500',
        };
      case 'purple':
        return {
          num: isLight ? 'bg-purple-100 text-purple-800' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
          badge: isLight ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-purple-500/10 text-purple-300 border-purple-500/20',
          hover: 'hover:border-purple-500/50',
          dot: 'bg-purple-500',
        };
      case 'rose':
      case 'red':
        return {
          num: isLight ? 'bg-rose-100 text-rose-800' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30',
          badge: isLight ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-rose-500/10 text-rose-300 border-rose-500/20',
          hover: 'hover:border-rose-500/50',
          dot: 'bg-rose-500',
        };
      case 'cyan':
      default:
        return {
          num: isLight ? 'bg-cyan-100 text-cyan-800' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
          badge: isLight ? 'bg-cyan-50 text-cyan-700 border-cyan-200' : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
          hover: 'hover:border-cyan-500/50',
          dot: 'bg-cyan-500',
        };
    }
  };

  return (
    <div className={`mt-14 pt-12 border-t ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Accra-Helsinki Group Official Agenda
          </div>
          <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            The MP10 Portfolio of Opportunities
          </h3>
          <p className={`text-sm sm:text-base mt-2 max-w-3xl leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Ten concrete, actionable priorities for the Montreal Protocol community to synchronize energy efficiency, phase down super-pollutants, prevent environmental dumping, and accelerate truly sustainable cooling worldwide.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="/documents/accra-helsinki-mp10-portfolio-of-opportunities.pdf"
            download="accra-helsinki-mp10-portfolio-of-opportunities.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 group"
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Official MP10 PDF</span>
          </a>
          <Link
            href={`/${locale}/policy/mp10`}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 ${
              isLight
                ? 'bg-white hover:bg-slate-100 border border-slate-300 text-slate-800'
                : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
            }`}
          >
            <span>Full Document View</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
        <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mr-2 shrink-0 ${
          isLight ? 'text-slate-500' : 'text-slate-400'
        }`}>
          <Filter size={13} />
          <span>Category:</span>
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black scale-102'
                  : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
              {cat === 'All' && ` (${MP10_PORTFOLIO.length})`}
            </button>
          );
        })}
      </div>

      {/* 10 Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpportunities.map((item) => {
          const theme = getColorClasses(item.color);
          return (
            <div
              key={item.id}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
                theme.hover
              } ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
              }`}
            >
              <div>
                {/* Header Row: Number Pill & Badges */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-black tracking-tight ${theme.num}`}>
                      {String(item.id).padStart(2, '0')} &bull; {item.code}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                      {item.badgeText}
                    </span>
                  </div>
                  {item.highlightStat && (
                    <span className={`hidden sm:inline-block text-[11px] font-bold ${
                      isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {item.highlightStat}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className={`text-base sm:text-lg font-bold leading-snug mb-3 transition-colors ${
                  isLight ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-amber-300'
                }`}>
                  {item.id}. {item.title}
                </h4>

                {/* Description from PDF */}
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Bottom metadata */}
              <div className={`mt-5 pt-4 border-t flex items-center justify-between text-xs ${
                isLight ? 'border-slate-100 text-slate-500' : 'border-white/5 text-slate-400'
              }`}>
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${theme.dot}`}></span>
                  <span className="font-semibold">{item.category}</span>
                </span>
                <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-bold">
                  MP10 #{item.id}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Footnote from PDF */}
      <div className={`mt-8 p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isLight
          ? 'bg-amber-50/70 border-amber-200 text-amber-950'
          : 'bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent border-amber-500/20 text-slate-300'
      }`}>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
          <p className="text-xs sm:text-sm">
            <strong>Official Document:</strong> <em>Accra-Helsinki Group for Sustainable Cooling: The MP10 Portfolio of Opportunities.</em>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/documents/accra-helsinki-mp10-portfolio-of-opportunities.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
          >
            <span>Open PDF in Tab</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
