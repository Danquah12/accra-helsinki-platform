'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CountryTabs({ slug }: { slug: string }) {
  const pathname = usePathname();
  const { locale } = useParams();

  const tabs = [
    { name: 'Overview', path: `/${locale}/countries/${slug}` },
    { name: 'Laws & Regulations', path: `/${locale}/countries/${slug}/laws` },
    { name: 'Data & Stats', path: `/${locale}/countries/${slug}/data` },
    { name: 'Incidents', path: `/${locale}/countries/${slug}/incidents` },
    { name: 'Agencies', path: `/${locale}/countries/${slug}/agencies` },
    { name: 'Progress Scorecard', path: `/${locale}/countries/${slug}/progress` },
  ];

  return (
    <div className="flex overflow-x-auto border-b border-slate-200 mb-8 pb-[1px] no-scrollbar">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.name}
            href={tab.path}
            className={`relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors hover:text-emerald-700 ${
              isActive ? 'text-emerald-900' : 'text-slate-500'
            }`}
          >
            {tab.name}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                initial={false}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
