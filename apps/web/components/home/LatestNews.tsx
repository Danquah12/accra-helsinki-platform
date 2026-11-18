'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, ExternalLink, Globe2 } from 'lucide-react';
import { useTheme } from '@/lib/context/ThemeContext';

const NEWS_ARTICLES = [
  {
    id: 1,
    title: 'Africa Must Not Become a Dumping Ground for Inefficient Appliances — Kofi Agyarko',
    excerpt: 'Mr. Kofi A. Agyarko, CEO of CSRTA and Co-Chair of the Accra-Helsinki Group, warns that Africa is inundated with both obsolete used cooling equipment and new inefficient appliances, calling for harmonized MEPS and shared responsibility.',
    date: 'October 2026',
    category: 'Appliance Standards',
    byline: 'Ghana News Agency (GNA)',
    badgeBg: 'bg-rose-100 text-rose-900',
    externalUrl: 'https://gna.org.gh/2026/10/africa-must-not-become-a-dumping-ground-for-inefficient-appliances/',
    image: 'bg-gradient-to-br from-slate-900 to-rose-950',
  },
  {
    id: 2,
    title: 'African Experts Push for Common Cooling Appliance Standards to Halt Inflow of Obsolete Units',
    excerpt: 'Energy efficiency authorities and standards experts across Africa advocate unified regional cooling regulations to halt environmental dumping, protect power grids from overload, and advance sustainable cooling.',
    date: 'October 2026',
    category: 'Regional Standards',
    byline: 'Ghana News Agency (GNA)',
    badgeBg: 'bg-amber-100 text-amber-900',
    externalUrl: 'https://gna.org.gh/2026/10/african-experts-push-for-common-cooling-appliance-standards/',
    image: 'bg-gradient-to-br from-amber-950 via-slate-900 to-emerald-950',
  },
  {
    id: 3,
    title: 'Accra-Helsinki Side Event at MOP 38 Kigali: VSLS Controls & Sustainable Cooling',
    excerpt: 'Official side event convened at the 38th Meeting of the Parties celebrating 10 years of the Kigali Amendment, gathering delegates, EU leadership, and atmospheric scientists on short-lived substances and cooling policy.',
    date: 'November 2026',
    category: 'MOP 38 Kigali',
    byline: 'Accra-Helsinki Secretariat',
    badgeBg: 'bg-emerald-100 text-emerald-900',
    href: '/media/photos',
    image: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950',
  },
];

export default function LatestNews({ locale }: { locale: string }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || theme === 'nordic' || theme === 'emerald';
  const isLight = !isDark;

  const sectionBg =
    {
      white: 'bg-white text-slate-900 border-t border-slate-200',
      sand: 'bg-[#faf8f4] text-stone-900 border-t border-amber-200',
      nordic: 'bg-[#07162c] text-sky-100 border-t border-sky-800/40',
      emerald: 'bg-[#02261a] text-emerald-100 border-t border-emerald-800/40',
      dark: 'bg-slate-950 text-white border-t border-slate-800',
    }[theme] || 'bg-slate-950 text-white border-t border-slate-800';

  return (
    <section className={`py-24 transition-colors duration-300 ${sectionBg}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2 block">
              Meetings &bull; Dispatches &bull; Analysis
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Latest Group Activities &amp; Press
            </h2>
            <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Coverage of high-level convenings on the margins of Montreal Protocol Meetings of the Parties, policy declarations, and scientific dialogues.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/media/photos`}
              className={`inline-flex items-center gap-2 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-sm ${
                isLight 
                  ? 'bg-emerald-800 hover:bg-emerald-900 text-white' 
                  : 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold'
              }`}
            >
              <span>Photo Gallery (16 Photos)</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href={`/${locale}/media/news`}
              className={`inline-flex items-center gap-2 font-bold text-sm transition-colors ${
                isLight ? 'text-emerald-800 hover:text-emerald-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>All News &amp; Dispatches</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((news) => (
            <div 
              key={news.id} 
              className={`group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border ${
                isLight ? 'bg-slate-50/90 border-slate-200 text-slate-900' : 'bg-slate-900/90 border-slate-800 text-white'
              }`}
            >
              <div className={`aspect-[16/9] w-full ${news.image} relative overflow-hidden flex items-center justify-center p-6 text-white`}>
                <Globe2 className="w-12 h-12 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${news.badgeBg}`}>
                  {news.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <time>{news.date}</time>
                  </div>
                  <span className="truncate max-w-[150px] italic">{news.byline}</span>
                </div>

                <h3 className={`text-lg font-bold mb-3 transition-colors line-clamp-2 ${
                  isLight ? 'text-slate-900 group-hover:text-emerald-800' : 'text-white group-hover:text-amber-300'
                }`}>
                  {news.title}
                </h3>

                <p className={`text-sm mb-6 line-clamp-3 flex-1 leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {news.excerpt}
                </p>

                {news.externalUrl ? (
                  <a
                    href={news.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition-colors mt-auto text-sm"
                  >
                    <span>Read on GBC Ghana Online</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link
                    href={`/${locale}${news.href}`}
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-amber-400 font-bold hover:text-emerald-700 dark:hover:text-amber-300 transition-colors mt-auto text-sm"
                  >
                    <span>View Photo Gallery (MOP 38 Kigali)</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
