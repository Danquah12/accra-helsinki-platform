'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations('home');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 opacity-90" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800/20 via-transparent to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight max-w-5xl mx-auto leading-tight"
        >
          {t('heroTitle')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href={`/${locale}/action`}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2"
          >
            {t('takeAction')}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href={`/${locale}/research`}
            className="px-8 py-4 bg-transparent border-2 border-white/80 hover:bg-white/10 text-white rounded-lg font-bold text-lg transition-all"
          >
            {t('exploreData')}
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto rounded-full" />
      </motion.div>
    </section>
  );
}
