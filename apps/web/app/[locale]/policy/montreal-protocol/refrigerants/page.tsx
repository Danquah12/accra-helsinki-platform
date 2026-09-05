'use client';

import { useState } from 'react';
import { Search, Filter, Info, AlertOctagon } from 'lucide-react';
import { getAllRefrigerants, Refrigerant } from '@/lib/data/refrigerants';

export default function RefrigerantsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  
  const refrigerants = getAllRefrigerants();

  const filtered = refrigerants.filter(r => {
    const matchesSearch = r.ashraeNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || r.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || r.phaseOutStatus === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: Refrigerant['phaseOutStatus']) => {
    switch(status) {
      case 'Banned': return 'bg-red-100 text-red-800 border-red-200';
      case 'Phase-out': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Phase-down': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Alternative': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Refrigerant Database</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive database of cooling gases, their environmental impact, and their regulatory status under the Montreal Protocol.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search by ASHRAE number or name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select 
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="CFC">CFC</option>
              <option value="HCFC">HCFC</option>
              <option value="HFC">HFC</option>
              <option value="Natural">Natural</option>
            </select>
            <select 
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Banned">Banned</option>
              <option value="Phase-out">Phase-out</option>
              <option value="Phase-down">Phase-down</option>
              <option value="Alternative">Alternative</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-semibold">ASHRAE</th>
                  <th className="p-4 font-semibold">Name / Composition</th>
                  <th className="p-4 font-semibold">Type</th>
                  <th className="p-4 font-semibold text-right">GWP <Info className="inline w-4 h-4 ml-1 text-slate-400" /></th>
                  <th className="p-4 font-semibold text-right">ODP <Info className="inline w-4 h-4 ml-1 text-slate-400" /></th>
                  <th className="p-4 font-semibold">Safety Class</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filtered.map(r => (
                  <tr key={r.slug} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{r.ashraeNumber}</td>
                    <td className="p-4 text-slate-700">{r.name}</td>
                    <td className="p-4">
                      <span className="text-slate-600 font-medium">{r.type}</span>
                    </td>
                    <td className={`p-4 text-right font-mono ${r.gwp > 1000 ? 'text-red-600 font-bold' : 'text-slate-700'}`}>
                      {r.gwp.toLocaleString()}
                    </td>
                    <td className={`p-4 text-right font-mono ${r.odp > 0 ? 'text-red-600 font-bold' : 'text-slate-700'}`}>
                      {r.odp}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        r.safetyClass.includes('3') ? 'bg-red-100 text-red-800' :
                        r.safetyClass.includes('2') ? 'bg-orange-100 text-orange-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {r.safetyClass}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(r.phaseOutStatus)}`}>
                        {r.phaseOutStatus}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-500">
                      No refrigerants found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
