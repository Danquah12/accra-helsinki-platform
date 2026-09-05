'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface CountryFiltersProps {
  onSearchChange: (search: string) => void;
  onRegionChange: (region: string) => void;
  selectedRegion: string;
}

const regions = ['All', 'West Africa', 'East Africa', 'North Africa', 'Southern Africa'];

export default function CountryFilters({ 
  onSearchChange, 
  onRegionChange, 
  selectedRegion 
}: CountryFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      <div className="relative w-full md:w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors"
          placeholder="Search countries..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2 w-full md:w-auto">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedRegion === region
                ? 'bg-emerald-900 text-white'
                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
