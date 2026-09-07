'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/context/ThemeContext';

export function CTASection({ locale }: { locale: string }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || theme === 'nordic' || theme === 'emerald';
  const isLight = !isDark;

  const sectionBg =
    {
      white: 'bg-gradient-to-b from-slate-50 to-emerald-50/40',
      sand: 'bg-gradient-to-b from-[#faf8f4] to-[#f5f2eb]',
      nordic: 'bg-gradient-to-b from-[#07162c] to-[#0b2240]',
      emerald: 'bg-gradient-to-b from-[#02261a] to-[#043324]',
      dark: 'bg-gradient-to-b from-slate-950 to-slate-900',
    }[theme] || 'bg-gradient-to-b from-slate-950 to-slate-900';

  return (
    <section className={`py-24 transition-colors duration-300 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left: Policy & Compliance Checker */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 sm:p-10 rounded-3xl shadow-sm border flex flex-col items-start relative overflow-hidden group hover:shadow-md transition-all ${
              isLight
                ? 'bg-white border-emerald-100 text-slate-900'
                : 'bg-slate-900/90 border-slate-800 text-white hover:border-emerald-500/30'
            }`}
          >
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner z-10 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
              Montreal Protocol Regulatory Tool
            </span>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-4 z-10 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Global Compliance &amp; Treaty Checker
            </h3>
            <p className={`text-base mb-8 z-10 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Assess cooling equipment compliance with national regulations, Montreal Protocol control measures, and Kigali Amendment HFC phase-down obligations across global jurisdictions.
            </p>
            <Link 
              href={`/${locale}/policy/compliance-checker`}
              className="mt-auto inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold transition-all shadow-sm group-hover:gap-3"
            >
              <span>Launch Compliance Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: AI Assistant */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-800 flex flex-col items-start relative overflow-hidden text-white group hover:border-amber-400/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Bot className="w-48 h-48 text-emerald-100" />
            </div>
            <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-inner z-10">
              <Bot className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              AI-Powered RAG Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 z-10">
              AI Sustainable Cooling Assistant
            </h3>
            <p className="text-base text-slate-300 mb-8 z-10 leading-relaxed">
              Explore treaties, research publications, GWP coefficients, and low-GWP refrigerant alternatives with our specialized conversational AI assistant.
            </p>
            <Link 
              href={`/${locale}/research/ai-assistant`}
              className="mt-auto inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-bold transition-all shadow-md group-hover:gap-3"
            >
              <span>Ask the Cooling Assistant</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CTASection;
