'use client';

import { Country } from '@/types/country';
import { useParams } from 'next/navigation';
import { Users, MapPin } from 'lucide-react';

export default function CountryHero({ country }: { country: Country }) {
  const { locale } = useParams();
  const name = locale === 'fr' ? country.name_fr : country.name;

  return (
    <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-8 md:p-12 mb-8 relative overflow-hidden shadow-lg">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">
        {country.flag_emoji}
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl">{country.flag_emoji}</span>
          <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
        </div>
        
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-800/50 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <p className="text-xs text-emerald-200/70 uppercase tracking-wider">Region</p>
              <p className="font-medium">{country.sub_region}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="bg-emerald-800/50 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <p className="text-xs text-emerald-200/70 uppercase tracking-wider">Capital</p>
              <p className="font-medium">{country.capital}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="bg-emerald-800/50 p-2 rounded-lg">
              <Users className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <p className="text-xs text-emerald-200/70 uppercase tracking-wider">Population</p>
              <p className="font-medium">{country.population.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
