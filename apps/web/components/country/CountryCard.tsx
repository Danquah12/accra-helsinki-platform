'use client';

import { Country } from '@/types/country';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function CountryCard({ country }: { country: Country }) {
  const { locale } = useParams();
  const name = locale === 'fr' ? country.name_fr : country.name;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{country.flag_emoji}</div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            {country.sub_region}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-4">{name}</h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Recycling Score</span>
            <span className="font-semibold text-slate-700">{country.recycling_capacity_score}/100</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Enforcement</span>
            <span className="font-semibold text-slate-700">{country.enforcement_score}/100</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-slate-500">MEPS Status</span>
            <span className="font-medium text-slate-700 truncate max-w-[120px] text-right" title={country.meps_status}>
              {country.meps_status}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Treaties</p>
          <div className="flex gap-2">
            {[
              { name: 'Basel', active: !!country.basel_ratified },
              { name: 'Bamako', active: !!country.bamako_ratified },
              { name: 'Montreal', active: !!country.montreal_ratified },
              { name: 'Kigali', active: !!country.kigali_ratified },
            ].map((t) => (
              <span 
                key={t.name}
                className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded ${t.active ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-50 text-slate-400 border border-slate-200'}`}
                title={`${t.name} ${t.active ? 'Ratified' : 'Not Ratified'}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
        <Link 
          href={`/${locale}/countries/${country.slug}`}
          className="flex items-center justify-between text-emerald-700 font-medium hover:text-emerald-800 transition-colors group"
        >
          View Profile
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
