'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Bot, BookOpen, ChevronDown } from 'lucide-react';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

export function HeroSection({ locale }: { locale: string }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Dynamic Atmospheric Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/80 to-slate-950 opacity-95" />
        
        {/* Soft atmospheric ambient glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/15 via-emerald-700/10 to-transparent pointer-events-none"
        />
        
        {/* Cool Nordic/Arctic atmospheric radial */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-600/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        
        {/* Official Logo Emblem with Deepened Golden-Yellow hosting the Black Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="p-3 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl hover:border-amber-400/40 transition-colors">
            <AccraHelsinkiLogo size="xl" showText={false} variant="dark" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-400/90">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Accra &bull; Helsinki &bull; Global Montreal Protocol Community
          </div>
        </motion.div>

        {/* Main Title: Accra-Helsinki Group for Sustainable Cooling */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.1] text-white"
        >
          Accra-Helsinki Group <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-emerald-300 to-sky-300">
            for Sustainable Cooling
          </span>
        </motion.h1>
        
        {/* Mandated Subtitle: An informal community of like-minded individuals... */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-xl sm:text-2xl md:text-3xl text-emerald-100/90 max-w-4xl mx-auto leading-relaxed font-serif italic font-normal"
        >
          “An informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol on Substances that Deplete the Ozone Layer, and preventing ozone depletion and climate tipping points”
        </motion.p>

        {/* Global Action CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#about-group"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl shadow-amber-950/40 flex items-center justify-center gap-2"
          >
            <span>Learn About the Group &amp; MOP37</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <Link 
            href={`/${locale}/policy/montreal-protocol`}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <span>Montreal Protocol Framework</span>
          </Link>
          
          <Link 
            href={`/${locale}/research/ai-assistant`}
            className="w-full sm:w-auto px-6 py-4 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-200 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
          >
            <Bot className="w-5 h-5 text-emerald-400" />
            <span>AI Cooling Assistant</span>
          </Link>
        </motion.div>

        {/* Quick Co-chairs indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400">Co-Chairs:</span>
            <span>Kofi A. Agyarko (Ghana) &amp; Tapio Reinikainen (Finland)</span>
          </div>
          <span className="hidden sm:inline text-white/30">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-400">Inaugurated:</span>
            <span>MOP36 Bangkok (2024)</span>
          </div>
          <span className="hidden sm:inline text-white/30">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sky-400">Convention:</span>
            <span>Vienna Convention &amp; Montreal Protocol</span>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <a href="#about-group" aria-label="Scroll to overview">
          <ChevronDown className="w-6 h-6 hover:text-amber-400 transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
