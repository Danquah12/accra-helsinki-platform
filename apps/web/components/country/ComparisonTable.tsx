'use client';

import { Country } from '@/types/country';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparisonTable({ 
  country1, 
  country2 
}: { 
  country1: Country | null, 
  country2: Country | null 
}) {
  if (!country1 || !country2) return null;

  const getWinnerClass = (val1: number, val2: number, isV1: boolean) => {
    if (val1 === val2) return 'text-slate-700 font-medium';
    if (isV1) return val1 > val2 ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-500';
    return val2 > val1 ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-500';
  };

  const renderTreaty = (date: string | null) => {
    return date ? (
      <div className="flex items-center justify-center gap-2 text-emerald-600">
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-sm font-medium">{date.substring(0, 4)}</span>
      </div>
    ) : (
      <div className="flex items-center justify-center text-slate-300">
        <XCircle className="w-5 h-5" />
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-8"
    >
      <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 divide-x divide-slate-200">
        <div className="p-6"></div>
        <div className="p-6 text-center">
          <div className="text-4xl mb-2">{country1.flag_emoji}</div>
          <h3 className="text-xl font-bold text-slate-900">{country1.name}</h3>
        </div>
        <div className="p-6 text-center">
          <div className="text-4xl mb-2">{country2.flag_emoji}</div>
          <h3 className="text-xl font-bold text-slate-900">{country2.name}</h3>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {/* Core Stats */}
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center bg-slate-50">Population</div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.population, country2.population, true)}`}>
            {country1.population.toLocaleString()}
          </div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.population, country2.population, false)}`}>
            {country2.population.toLocaleString()}
          </div>
        </div>
        
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center bg-slate-50">GDP per capita ($)</div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.gdp_per_capita, country2.gdp_per_capita, true)}`}>
            ${country1.gdp_per_capita.toLocaleString()}
          </div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.gdp_per_capita, country2.gdp_per_capita, false)}`}>
            ${country2.gdp_per_capita.toLocaleString()}
          </div>
        </div>

        {/* Scores */}
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center bg-slate-50">Recycling Score</div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.recycling_capacity_score, country2.recycling_capacity_score, true)}`}>
            {country1.recycling_capacity_score}/100
          </div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.recycling_capacity_score, country2.recycling_capacity_score, false)}`}>
            {country2.recycling_capacity_score}/100
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-slate-100">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center bg-slate-50">Enforcement Score</div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.enforcement_score, country2.enforcement_score, true)}`}>
            {country1.enforcement_score}/100
          </div>
          <div className={`p-4 text-center flex items-center justify-center ${getWinnerClass(country1.enforcement_score, country2.enforcement_score, false)}`}>
            {country2.enforcement_score}/100
          </div>
        </div>

        {/* Treaties */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/50">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center">Basel Convention</div>
          <div className="p-4 text-center flex justify-center items-center">{renderTreaty(country1.basel_ratified)}</div>
          <div className="p-4 text-center flex justify-center items-center">{renderTreaty(country2.basel_ratified)}</div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/50">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center">Bamako Convention</div>
          <div className="p-4 text-center flex justify-center items-center">{renderTreaty(country1.bamako_ratified)}</div>
          <div className="p-4 text-center flex justify-center items-center">{renderTreaty(country2.bamako_ratified)}</div>
        </div>
        
        <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/50">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center">Kigali Amendment</div>
          <div className="p-4 text-center flex justify-center items-center">{renderTreaty(country1.kigali_ratified)}</div>
          <div className="p-4 text-center flex justify-center items-center">{renderTreaty(country2.kigali_ratified)}</div>
        </div>
        
        {/* Policies */}
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          <div className="p-4 text-sm font-medium text-slate-500 flex items-center bg-slate-50">MEPS Status</div>
          <div className="p-4 text-center flex items-center justify-center text-sm">{country1.meps_status}</div>
          <div className="p-4 text-center flex items-center justify-center text-sm">{country2.meps_status}</div>
        </div>
      </div>
    </motion.div>
  );
}
