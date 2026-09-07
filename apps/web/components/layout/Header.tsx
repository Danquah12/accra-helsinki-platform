'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, CheckCircle, Bot, BookOpen, Sparkles } from 'lucide-react';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeColorSwitcher from '@/components/shared/ThemeColorSwitcher';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Issues',
    href: '/issues',
    dropdown: [
      {
        title: 'Atmospheric Threats',
        links: [
          { label: 'SLCPs (Short-Lived Pollutants)', href: '/issues/refrigerants' },
          { label: 'LLCPs (Long-Lived Pollutants / SF₆)', href: '/policy/montreal-protocol' },
          { label: 'Obsolete Chemical Refrigerants', href: '/policy/montreal-protocol/refrigerants' },
          { label: 'SF₆ Industrial Emissions', href: '/policy/montreal-protocol' },
        ],
      },
      {
        title: 'Impacts & Science',
        links: [
          { label: 'Climate Tipping Points', href: '/issues/health-impacts/air' },
          { label: 'Chemical Hazards & Super-Pollutants', href: '/issues/health-impacts/chemicals' },
          { label: 'Human & Ecological Health', href: '/issues/health-impacts/human-body' },
        ],
      },
    ],
  },
  {
    name: 'Research & Data',
    href: '/research',
    dropdown: [
      {
        title: 'Research',
        links: [
          { label: 'Research Library', href: '/research/library' },
          { label: 'Scientific Assessments', href: '/research/library' },
          { label: 'UNEP & Montreal Protocol Reports', href: '/research/library' },
        ],
      },
      {
        title: 'Data & Statistics',
        links: [
          { label: 'Global Indicators & Dashboards', href: '/research/statistics' },
          { label: 'Open Datasets', href: '/research/datasets' },
          { label: 'Refrigerant Database (GWP/ODP)', href: '/policy/montreal-protocol/refrigerants' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'AI Sustainable Cooling Assistant', href: '/research/ai-assistant', icon: <Bot size={16} className="inline mr-2 text-emerald-600" /> },
          { label: 'Compliance Checker', href: '/policy/compliance-checker', icon: <CheckCircle size={16} className="inline mr-2 text-emerald-600" /> },
        ],
      },
    ],
  },
  {
    name: 'Laws & Policy',
    href: '/policy',
    dropdown: [
      {
        title: 'Global Frameworks',
        links: [
          { label: 'Montreal Protocol', href: '/policy/montreal-protocol' },
          { label: 'Kigali Amendment (HFC Phasedown)', href: '/policy/montreal-protocol/kigali' },
          { label: 'SF₆ Regulatory Measures (EU & Global)', href: '/policy/montreal-protocol' },
          { label: 'Basel & Vienna Conventions', href: '/policy/basel-convention' },
        ],
      },
      {
        title: 'Standards & Tools',
        links: [
          { label: 'Energy Performance Standards (MEPS)', href: '/policy/standards' },
          { label: 'Lifecycle Refrigerant Management', href: '/policy/epr' },
          { label: 'Compliance Checker', href: '/policy/compliance-checker', icon: <CheckCircle size={16} className="inline mr-2 text-emerald-600" /> },
          { label: 'Treaty Timeline', href: '/policy/timeline' },
        ],
      },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    dropdown: [
      {
        title: 'Cooling Innovations',
        links: [
          { label: 'Clean Cooling & Cold Chains', href: '/solutions/clean-cooling' },
          { label: 'Natural Refrigerants (R-290, R-600a)', href: '/solutions/refrigerant-transition' },
          { label: 'Circular Economy & Reclamation', href: '/solutions/circular' },
          { label: 'Best Practices', href: '/solutions/best-practices' },
        ],
      },
    ],
  },
  {
    name: 'Media',
    href: '/media',
    dropdown: [
      {
        title: 'Press & Activities',
        links: [
          { label: 'Latest News & Activities', href: '/media/news' },
          { label: 'MOP37 Nairobi Side Event', href: '/media/news' },
          { label: 'Press Releases & Speeches', href: '/media/news' },
        ],
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      {
        title: 'The Group',
        links: [
          { label: 'The Accra-Helsinki Group', href: '/about/accra-helsinki' },
          { label: 'Co-Chairs & Leadership', href: '/about/leadership' },
          { label: 'Chatham House Rule & Lineage', href: '/about/mission' },
          { label: 'International Partners', href: '/about/partners' },
          { label: 'Contact', href: '/about/contact' },
        ],
      },
    ],
  },
];

export default function Header({ locale }: { locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/90 border-b border-b-slate-200/80 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo with Deepened Yellow Hosting the Black Star */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <AccraHelsinkiLogo size="md" variant="light" />
          </Link>

          {/* Desktop Nav (Countries & Take Action removed) */}
          <nav className="hidden lg:flex items-center h-full gap-1 ml-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={`/${locale}${item.href === '/' ? '' : item.href}`}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeMenu === item.name || (item.href !== '/' && pathname.includes(item.href))
                      ? 'text-emerald-800 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-100/80'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} 
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-0 w-max min-w-[220px] max-w-screen-md bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden p-6 grid gap-8 z-50"
                        style={{ gridTemplateColumns: `repeat(${item.dropdown.length}, minmax(0, 1fr))` }}
                      >
                        {item.dropdown.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-3 min-w-[190px]">
                            <h4 className="font-bold text-emerald-950 text-xs uppercase tracking-wider mb-1">
                              {col.title}
                            </h4>
                            <div className="flex flex-col gap-2">
                              {col.links.map((link, linkIdx) => (
                                <Link
                                  key={linkIdx}
                                  href={`/${locale}${link.href}`}
                                  className="text-slate-600 hover:text-emerald-700 text-sm font-medium transition-colors flex items-center"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {link.icon && link.icon}
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions: Language Switcher, Color Theme Switcher and AI Assistant */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeColorSwitcher variant="header" />
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/research/ai-assistant`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
            >
              <Bot size={16} />
              <span>AI Assistant</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-900 via-amber-600 to-sky-700"></div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav
            locale={locale}
            navItems={navItems}
            onClose={() => setIsMobileMenuOpen(false)}
            toggleLocale={toggleLocale}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
