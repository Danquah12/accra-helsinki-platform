import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  number: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatCard({ icon: Icon, number, label, trend, trendValue }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        {trend && trendValue && (
          <div className={`text-sm font-medium px-2 py-1 rounded-full ${
            trend === 'up' ? 'text-amber-700 bg-amber-100' :
            trend === 'down' ? 'text-emerald-700 bg-emerald-100' :
            'text-slate-700 bg-slate-100'
          }`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '-'} {trendValue}
          </div>
        )}
      </div>
      <div>
        <h4 className="text-3xl font-bold text-slate-900 mb-1">{number}</h4>
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}
