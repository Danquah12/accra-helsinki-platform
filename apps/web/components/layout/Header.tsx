'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, ChevronDown, CheckCircle, Bot, AlertTriangle } from 'lucide-react';
import MobileNav from './MobileNav';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Issues',
    href: '/issues',
    dropdown: [
      {
        title: 'Environmental Dumping',
        links: [
          { label: 'E-Waste', href: '/issues/e-waste' },
          { label: 'Obsolete Appliances', href: '/issues/obsolete-appliances' },
          { label: 'Refrigerants & ODS', href: '/issues/refrigerants' },
          { label: 'Solar Panel Waste', href: '/issues/solar-panels' },
          { label: 'Used Vehicles', href: '/issues/used-vehicles' },
          { label: 'Textile Waste', href: '/issues/textiles' },
        ],
      },
      {
        title: 'Health Impacts',
        links: [
          { label: 'Chemicals & Pollutants', href: '/issues/health-impacts/chemicals' },
          { label: 'Human Body Effects', href: '/issues/health-impacts/human-body' },
          { label: 'Air Quality', href: '/issues/health-impacts/air' },
          { label: 'Water Contamination', href: '/issues/health-impacts/water' },
          { label: 'Soil Pollution', href: '/issues/health-impacts/soil' },
          { label: 'Infographics', href: '/issues/infographics' },
        ],
      },
    ],
  },
  {
    name: 'Countries',
    href: '/countries',
    dropdown: [
      {
        title: 'Explore',
        links: [
          { label: 'All Countries', href: '/countries' },
          { label: 'Interactive Map', href: '/countries/map' },
          { label: 'Compare Countries', href: '/countries/compare' },
        ],
      },
      {
        title: 'Featured',
        links: [
          { label: '🇬🇭 Ghana', href: '/countries/ghana' },
          { label: '🇳🇬 Nigeria', href: '/countries/nigeria' },
          { label: '🇰🇪 Kenya', href: '/countries/kenya' },
          { label: '🇿🇦 South Africa', href: '/countries/south-africa' },
          { label: '🇪🇬 Egypt', href: '/countries/egypt' },
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
          { label: 'Academic Papers', href: '/research/academic' },
          { label: 'UN Reports', href: '/research/un' },
          { label: 'Government Publications', href: '/research/gov' },
          { label: 'NGO Research', href: '/research/ngo' },
        ],
      },
      {
        title: 'Data',
        links: [
          { label: 'Country Data Portal', href: '/research/statistics' },
          { label: 'Open Datasets', href: '/research/datasets' },
          { label: 'Import Statistics', href: '/research/imports' },
          { label: 'Environmental Indicators', href: '/research/indicators' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'AI Research Assistant', href: '/research/ai-assistant', icon: <Bot size={16} className="inline mr-2" /> },
          { label: 'Interactive Maps', href: '/research/maps' },
          { label: 'REST API', href: '/research/api' },
        ],
      },
    ],
  },
  {
    name: 'Laws & Policy',
    href: '/policy',
    dropdown: [
      {
        title: 'International Treaties',
        links: [
          { label: 'Basel Convention', href: '/policy/basel-convention' },
          { label: 'Bamako Convention', href: '/policy/bamako-convention' },
          { label: 'Montreal Protocol', href: '/policy/montreal-protocol' },
          { label: 'Kigali Amendment', href: '/policy/montreal-protocol/kigali' },
        ],
      },
      {
        title: 'National',
        links: [
          { label: 'E-Waste Laws', href: '/policy/national-laws' },
          { label: 'Appliance Standards (MEPS)', href: '/policy/standards' },
          { label: 'EPR Legislation', href: '/policy/epr' },
        ],
      },
      {
        title: 'Tools',
        links: [
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
        title: 'Initiatives',
        links: [
          { label: 'Circular Economy', href: '/solutions/circular' },
          { label: 'Local Innovations', href: '/solutions/innovations' },
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
        title: 'News & Press',
        links: [
          { label: 'Latest News', href: '/media/news' },
          { label: 'Press Releases', href: '/media/press' },
          { label: 'Media Kits', href: '/media/kits' },
        ],
      },
    ],
  },
  {
    name: 'Learn',
    href: '/learn',
    dropdown: [
      {
        title: 'Education',
        links: [
          { label: 'Online Courses', href: '/learn/courses' },
          { label: 'Webinars', href: '/learn/webinars' },
          { label: 'Fact Sheets', href: '/learn/fact-sheets' },
        ],
      },
    ],
  },
  {
    name: 'Take Action',
    href: '/take-action',
    dropdown: [
      {
        title: 'Report',
        links: [
          { label: 'Report Dumping', href: '/take-action/report', icon: <AlertTriangle size={16} className="inline mr-2 text-red-500" /> },
          { label: 'Submit Evidence', href: '/take-action/evidence' },
          { label: 'Track Reports', href: '/take-action/track' },
        ],
      },
      {
        title: 'Campaigns',
        links: [
          { label: 'Active Petitions', href: '/take-action/petitions' },
          { label: 'Advocacy Campaigns', href: '/take-action/campaigns' },
        ],
      },
      {
        title: 'Join',
        links: [
          { label: 'Volunteer', href: '/take-action/volunteer' },
          { label: 'Newsletter', href: '/take-action/newsletter' },
          { label: 'Donate', href: '/take-action/donate' },
        ],
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      {
        title: 'Organization',
        links: [
          { label: 'Our Mission', href: '/about/mission' },
          { label: 'Team', href: '/about/team' },
          { label: 'Partners', href: '/about/partners' },
          { label: 'Contact Us', href: '/about/contact' },
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-b-emerald-100/50 shadow-sm border-b-[3px] border-b-gradient-to-r from-emerald-900 to-amber-600">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900 text-white">
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-emerald-900 leading-tight">ACCRA-HELSINKI</span>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">CSRTA Platform</span>
            </div>
          </Link>

          {/* Desktop Nav */}
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
                    activeMenu === item.name || pathname.includes(item.href)
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-0 w-max min-w-[200px] max-w-screen-md bg-white border border-emerald-100 shadow-xl rounded-xl overflow-hidden p-6 grid gap-8 z-50"
                        style={{ gridTemplateColumns: `repeat(${item.dropdown.length}, minmax(0, 1fr))` }}
                      >
                        {item.dropdown.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-3 min-w-[180px]">
                            <h4 className="font-semibold text-emerald-900 text-sm uppercase tracking-wider mb-1">{col.title}</h4>
                            <div className="flex flex-col gap-2">
                              {col.links.map((link, linkIdx) => (
                                <Link
                                  key={linkIdx}
                                  href={`/${locale}${link.href}`}
                                  className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors flex items-center"
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

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={toggleLocale}
              className="text-sm font-bold text-emerald-900 hover:text-emerald-700 transition-colors uppercase px-2 py-1 rounded-md hover:bg-emerald-50"
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </button>
            <Link
              href={`/${locale}/take-action`}
              className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-all shadow-sm shadow-amber-600/20 active:scale-95"
            >
              Take Action
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-emerald-900"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-emerald-900 via-emerald-600 to-amber-600"></div>

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
