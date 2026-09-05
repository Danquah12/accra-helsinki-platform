import { Country } from '@/types/country';
import { Activity, ShieldCheck, Zap, Recycle, Wind } from 'lucide-react';

export default function IndicatorGrid({ country }: { country: Country }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Recycle className="w-5 h-5 text-emerald-700" />
          </div>
          <h4 className="font-semibold text-slate-900">Recycling Capacity</h4>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-emerald-900">{country.recycling_capacity_score}</span>
          <span className="text-slate-500 pb-1">/ 100</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div 
            className="bg-emerald-500 h-2 rounded-full" 
            style={{ width: `${country.recycling_capacity_score}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-blue-700" />
          </div>
          <h4 className="font-semibold text-slate-900">Enforcement Index</h4>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-blue-900">{country.enforcement_score}</span>
          <span className="text-slate-500 pb-1">/ 100</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${country.enforcement_score}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-100 p-2 rounded-lg">
            <Zap className="w-5 h-5 text-amber-700" />
          </div>
          <h4 className="font-semibold text-slate-900">MEPS Status</h4>
        </div>
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
            {country.meps_status}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:col-span-2 lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-slate-400" />
              <h5 className="font-medium text-slate-700">E-Waste Legislation</h5>
            </div>
            <p className="text-sm text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-100 min-h-[60px]">
              {country.ewaste_legislation}
            </p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Wind className="w-4 h-4 text-slate-400" />
              <h5 className="font-medium text-slate-700">Refrigerant Regulations</h5>
            </div>
            <p className="text-sm text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-100 min-h-[60px]">
              {country.refrigerant_regulations}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
