'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { MonitorPlay, Globe2, FileText, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export function StatsBar() {
  const t = useTranslations('home');

  const stats = [
    { value: t('stat1'), label: t('stat1Label'), icon: MonitorPlay },
    { value: t('stat2'), label: t('stat2Label'), icon: Globe2 },
    { value: t('stat3'), label: t('stat3Label'), icon: FileText },
    { value: t('stat4'), label: t('stat4Label'), icon: AlertTriangle },
  ];

  return (
    <section className="bg-emerald-900 py-16 relative z-20 shadow-xl border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-emerald-800/50 transition-colors"
              >
                <div className="flex-shrink-0 p-3 bg-emerald-800/80 rounded-lg text-emerald-400">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-sm font-medium text-emerald-200/80 mt-1">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
