'use client';

import { useState } from 'react';
import { Country } from '@/types/country';
import ComparisonTable from '@/components/country/ComparisonTable';
import { getAllCountries } from '@/lib/data/countries';

export default function ComparePage() {
  const [countries] = useState<Country[]>(getAllCountries());
  const [c1Slug, setC1Slug] = useState<string>('');
  const [c2Slug, setC2Slug] = useState<string>('');

  const country1 = countries.find(c => c.slug === c1Slug) || null;
  const country2 = countries.find(c => c.slug === c2Slug) || null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Compare Countries</h1>
        <p className="text-lg text-slate-600">
          Select two countries to compare their environmental indicators, treaty ratifications, and legislative progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">First Country</label>
          <select 
            className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2 border bg-slate-50"
            value={c1Slug}
            onChange={(e) => setC1Slug(e.target.value)}
          >
            <option value="">Select a country...</option>
            {countries.map(c => (
              <option key={c.slug} value={c.slug} disabled={c.slug === c2Slug}>
                {c.flag_emoji} {c.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Second Country</label>
          <select 
            className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2 border bg-slate-50"
            value={c2Slug}
            onChange={(e) => setC2Slug(e.target.value)}
          >
            <option value="">Select a country...</option>
            {countries.map(c => (
              <option key={c.slug} value={c.slug} disabled={c.slug === c1Slug}>
                {c.flag_emoji} {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {country1 && country2 ? (
        <ComparisonTable country1={country1} country2={country2} />
      ) : (
        <div className="mt-12 text-center p-12 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
          <p className="text-slate-500 text-lg">
            Please select two countries above to view the comparison.
          </p>
        </div>
      )}
    </div>
  );
}
