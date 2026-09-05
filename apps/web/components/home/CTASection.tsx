'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { AlertOctagon, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection({ locale }: { locale: string }) {
  const t = useTranslations('home');

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Left: Report */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-lg border border-amber-100 flex flex-col items-start relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <AlertOctagon className="w-48 h-48 text-amber-900" />
            </div>
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner z-10">
              <AlertOctagon className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 z-10">{t('reportTitle')}</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-md z-10">
              {t('reportDesc')}
            </p>
            <Link 
              href={`/${locale}/report`}
              className="mt-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors shadow-md z-10"
            >
              {t('reportBtn')}
            </Link>
          </motion.div>

          {/* Right: AI Assistant */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-900 p-10 rounded-3xl shadow-lg flex flex-col items-start relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Bot className="w-48 h-48 text-emerald-100" />
            </div>
            <div className="w-16 h-16 bg-emerald-800 text-emerald-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner z-10">
              <Bot className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 z-10">{t('aiTitle')}</h3>
            <p className="text-lg text-emerald-100 mb-8 max-w-md z-10">
              {t('aiDesc')}
            </p>
            <Link 
              href={`/${locale}/ai-assistant`}
              className="mt-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-lg font-bold transition-colors shadow-md z-10"
            >
              {t('aiBtn')}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
