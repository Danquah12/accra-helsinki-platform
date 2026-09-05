'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Monitor, Wind, Sun, Car, Shirt, Refrigerator, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturedIssues({ locale }: { locale: string }) {
  const t = useTranslations('home');
  const common = useTranslations('common');

  const issues = [
    { id: 'e-waste', icon: Monitor, title: 'E-Waste Dumping', desc: 'Millions of tonnes of electronic waste are illegally exported to Africa annually.', color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 'appliances', icon: Refrigerator, title: 'Obsolete Appliances', desc: 'Inefficient cooling appliances consuming massive energy and containing harmful refrigerants.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 'refrigerants', icon: Wind, title: 'Toxic Refrigerants', desc: 'Ozone-depleting substances and potent greenhouse gases smuggled in used equipment.', color: 'text-teal-600', bg: 'bg-teal-100' },
    { id: 'solar', icon: Sun, title: 'Solar Panel Waste', desc: 'The impending crisis of end-of-life solar panels lacking recycling infrastructure.', color: 'text-amber-600', bg: 'bg-amber-100' },
    { id: 'vehicles', icon: Car, title: 'Used Vehicles', desc: 'Highly polluting end-of-life vehicles exported from developed nations.', color: 'text-slate-600', bg: 'bg-slate-200' },
    { id: 'textiles', icon: Shirt, title: 'Textile Waste', desc: 'Fast fashion waste flooding African markets and polluting waterways.', color: 'text-rose-600', bg: 'bg-rose-100' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('theCrisis')}</h2>
          <p className="text-lg text-slate-600">{t('theCrisisSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${issue.bg} ${issue.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{issue.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{issue.desc}</p>
                <Link 
                  href={`/${locale}/issues/${issue.id}`}
                  className="inline-flex items-center font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  {common('readMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
