'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Earth, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 group inline-flex">
              <div className="p-2 bg-emerald-800 rounded-lg text-white">
                <Earth className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white tracking-tight">ACCRA-HELSINKI</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              {t('organization')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('explore')}</h3>
            <ul className="space-y-3">
              {['Issues', 'Countries', 'Research & Data', 'Laws & Policy'].map((item) => (
                <li key={item}>
                  <Link href={`/${locale}/${item.toLowerCase().split(' ')[0]}`} className="text-sm hover:text-emerald-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Take Action Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('takeAction')}</h3>
            <ul className="space-y-3">
              {['Report Incident', 'Volunteer', 'Donate', 'Campaigns'].map((item) => (
                <li key={item}>
                  <Link href={`/${locale}/action`} className="text-sm hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('newsletter')}</h3>
            <form className="mt-4 flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-600 transition-colors font-medium text-sm"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">{t('terms')}</Link>
            <Link href={`/${locale}/accessibility`} className="hover:text-white transition-colors">{t('accessibility')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
