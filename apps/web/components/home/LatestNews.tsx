import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, ExternalLink, Globe2 } from 'lucide-react';

const NEWS_ARTICLES = [
  {
    id: 1,
    title: 'Accra-Helsinki Group Calls on EU for Decisive Regulatory Leadership on SF₆ at MOP37 Nairobi',
    excerpt: 'Co-chaired by Kofi A. Agyarko (Ghana) and Tapio Reinikainen (Finland), the session drew over 40 global participants to urge strong regulatory measures against sulfur hexafluoride emissions.',
    date: 'November 2025',
    category: 'MOP37 Nairobi',
    byline: 'Mabel Adorkor Annang (GBC Ghana Online)',
    badgeBg: 'bg-amber-100 text-amber-900',
    externalUrl: 'https://www.gbcghanaonline.com/general/eu-greenhouse/2025/',
    image: 'bg-gradient-to-br from-slate-900 to-amber-950',
  },
  {
    id: 2,
    title: 'Historic Launch: Accra-Helsinki Group Formally Inaugurated at MOP36 in Bangkok',
    excerpt: 'Operating under the Chatham House Rule, the Group was established in the tradition of the Toronto and Stockholm Groups to advance ambitious consensus on sustainable cooling.',
    date: 'November 2024',
    category: 'MOP36 Bangkok',
    byline: 'Montreal Protocol Dispatch',
    badgeBg: 'bg-emerald-100 text-emerald-900',
    href: '/about/accra-helsinki',
    image: 'bg-gradient-to-br from-emerald-900 to-slate-900',
  },
  {
    id: 3,
    title: 'Tackling the Twin Threats: Fast-Mitigation of SLCPs and Elimination of LLCPs',
    excerpt: 'Scientific review of near-term HFC reductions alongside long-lived SF₆ containment to safeguard the ozone layer and avoid breaching catastrophic 1.5°C climate tipping points.',
    date: '2025 Briefing',
    category: 'Policy & Science',
    byline: 'Policy Research Team',
    badgeBg: 'bg-blue-100 text-blue-900',
    href: '/issues/refrigerants',
    image: 'bg-gradient-to-br from-sky-900 to-slate-900',
  },
];

export default function LatestNews({ locale }: { locale: string }) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-100/90 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 block">
              Meetings &bull; Dispatches &bull; Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Latest Group Activities &amp; Press
            </h2>
            <p className="text-base text-slate-600">
              Coverage of high-level convenings on the margins of Montreal Protocol Meetings of the Parties, policy declarations, and scientific dialogues.
            </p>
          </div>
          <Link
            href={`/${locale}/media/news`}
            className="inline-flex items-center gap-2 text-emerald-800 font-bold hover:text-emerald-900 transition-colors"
          >
            <span>All Press &amp; Media</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((news) => (
            <div 
              key={news.id} 
              className="group flex flex-col bg-slate-50/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/80"
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

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
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
                    className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors mt-auto text-sm"
                  >
                    <span>Read More</span>
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
