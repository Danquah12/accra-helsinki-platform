import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const MOCK_NEWS = [
  {
    id: 1,
    title: 'New Policy Framework for E-Waste Management Announced',
    excerpt: 'The environmental ministries have agreed on a comprehensive new framework targeting the reduction of illegal e-waste imports across West Africa.',
    date: 'Oct 12, 2024',
    category: 'Policy',
    image: 'bg-gradient-to-br from-emerald-800 to-emerald-950',
    href: '/media/news/1',
  },
  {
    id: 2,
    title: 'Joint Task Force Intercepts Illegal Refrigerant Shipment',
    excerpt: 'A multi-national task force successfully intercepted a major shipment of ozone-depleting substances disguised as legitimate cargo.',
    date: 'Oct 08, 2024',
    category: 'Action',
    image: 'bg-gradient-to-br from-emerald-600 to-emerald-900',
    href: '/media/news/2',
  },
  {
    id: 3,
    title: 'Annual Research Report Highlights Shift in Dumping Patterns',
    excerpt: 'Our latest data analysis reveals significant shifts in the routes used for environmental dumping of end-of-life vehicles.',
    date: 'Sep 29, 2024',
    category: 'Research',
    image: 'bg-gradient-to-br from-amber-600 to-emerald-900',
    href: '/media/news/3',
  },
];

export default function LatestNews({ locale }: { locale: string }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Latest News & Activities</h2>
            <p className="text-lg text-slate-600">
              Stay updated on our latest initiatives, policy developments, and field actions across the region.
            </p>
          </div>
          <Link
            href={`/${locale}/media/news`}
            className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
          >
            View all news
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS.map((news) => (
            <div key={news.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className={`aspect-video w-full ${news.image} relative overflow-hidden`}>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-900">
                  {news.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar size={14} />
                  <time>{news.date}</time>
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                  {news.excerpt}
                </p>
                <Link
                  href={`/${locale}${news.href}`}
                  className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors mt-auto"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
