'use client';

import { useState } from 'react';
import { Country } from '@/types/country';
import CountryCard from './CountryCard';
import CountryFilters from './CountryFilters';
import { useParams } from 'next/navigation';

export default function CountryList({ initialCountries }: { initialCountries: Country[] }) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');
  const { locale } = useParams();

  const filteredCountries = initialCountries.filter((c) => {
    const nameMatches = (locale === 'fr' ? c.name_fr : c.name)
      .toLowerCase()
      .includes(search.toLowerCase());
    const regionMatches = region === 'All' || c.sub_region === region;
    return nameMatches && regionMatches;
  });

  return (
    <div>
      <CountryFilters 
        onSearchChange={setSearch} 
        onRegionChange={setRegion} 
        selectedRegion={region} 
      />
      
      {filteredCountries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-slate-500 text-lg">No countries found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
