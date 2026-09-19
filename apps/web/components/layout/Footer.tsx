'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Twitter, Linkedin, Facebook, Globe2 } from 'lucide-react';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="inline-block">
              <AccraHelsinkiLogo size="md" variant="dark" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4">
              An informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol on Substances that Deplete the Ozone Layer, and preventing ozone depletion and climate tipping points.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links (No Countries!) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Environmental Dumping Issues', href: '/issues' },
                { label: 'Research Library', href: '/research/library' },
                { label: 'Montreal Protocol Database', href: '/policy/montreal-protocol/refrigerants' },
                { label: 'Sustainable Cooling Solutions', href: '/solutions/clean-cooling' },
                { label: 'MOP37 News & Activities', href: '/media/news' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={`/${locale}${item.href}`} className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Frameworks (Replacing Take Action!) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Treaties &amp; Policy
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Vienna Convention & Montreal Protocol', href: '/policy/montreal-protocol' },
                { label: 'Kigali Amendment (HFC Phasedown)', href: '/policy/montreal-protocol/kigali' },
                { label: 'SF₆ Regulatory Phasedown Measures', href: '/policy/montreal-protocol#sf6' },
                { label: 'Global Compliance Checker', href: '/policy/compliance-checker' },
                { label: 'International Treaty Timeline', href: '/policy/timeline' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={`/${locale}${item.href}`} className="text-xs sm:text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Co-Chairs */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Co-Chairs &amp; Community
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <p>
                <strong className="text-slate-200">Kofi A. Agyarko</strong> (Ghana)<br />
                <span className="text-[11px] text-slate-400">CEO of Center for Shared Responsibility and Technology Ambition (CSRTA), former Director, Energy Commission, Ghana</span>
              </p>
              <p>
                <strong className="text-slate-200">Tapio Reinikainen</strong> (Finland)<br />
                <span className="text-[11px] text-slate-500">Chief Specialist, Climate Solutions, Finnish Environment Institute</span>
              </p>
              <p className="text-[11px] text-amber-400/90 pt-1">
                Operates under the Chatham House Rule &bull; Lineage of the Toronto and Stockholm Groups
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-slate-500 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Accra-Helsinki Group for Sustainable Cooling. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">&bull;</span>
            <p>
              Designed &amp; Developed by{' '}
              <a
                href="https://expediteconsults.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 font-medium transition-colors underline underline-offset-2"
              >
                Expedite Consults LLC
              </a>
            </p>
          </div>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href={`/${locale}/about/accra-helsinki`} className="hover:text-white transition-colors">About the Group</Link>
            <Link href={`/${locale}/about/contact`} className="hover:text-white transition-colors">Contact</Link>
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
