'use client';

import { Country } from '@/types/country';

export default function ProgressScorecard({ country }: { country: Country }) {
  // Convert categorical statuses to rough numerical scores for the scorecard (0-100)
  const getStatusScore = (status: string) => {
    if (!status) return 0;
    const lower = status.toLowerCase();
    if (lower.includes('implemented') || lower.includes('strict')) return 100;
    if (lower.includes('progress') || lower.includes('developing')) return 50;
    if (lower.includes('draft') || lower.includes('review')) return 30;
    if (lower.includes('basic')) return 40;
    return 70; // default for having legislation
  };

  const dimensions = [
    { name: 'Recycling Capacity', score: country.recycling_capacity_score },
    { name: 'Enforcement', score: country.enforcement_score },
    { name: 'MEPS Status', score: getStatusScore(country.meps_status), label: country.meps_status },
    { name: 'E-Waste Legislation', score: getStatusScore(country.ewaste_legislation), label: 'Active' },
    { name: 'Refrigerant Regs', score: getStatusScore(country.refrigerant_regulations), label: 'Active' },
  ];

  const avgScore = Math.round(dimensions.reduce((acc, curr) => acc + curr.score, 0) / dimensions.length);
  
  let grade = 'F';
  if (avgScore >= 80) grade = 'A';
  else if (avgScore >= 60) grade = 'B';
  else if (avgScore >= 40) grade = 'C';
  else if (avgScore >= 20) grade = 'D';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">National Progress Scorecard</h3>
          <p className="text-sm text-slate-500 mt-1">Aggregated scoring across 5 key dimensions</p>
        </div>
        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-emerald-900 text-white font-bold text-2xl shadow-inner">
          {grade}
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {dimensions.map((dim) => (
            <div key={dim.name}>
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-slate-700">{dim.name}</span>
                <span className="text-sm text-slate-500">{dim.label || `${dim.score}/100`}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    dim.score >= 80 ? 'bg-emerald-500' :
                    dim.score >= 50 ? 'bg-amber-500' :
                    'bg-red-400'
                  }`}
                  style={{ width: `${dim.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
