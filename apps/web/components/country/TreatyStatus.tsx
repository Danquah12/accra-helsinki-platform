import { Country } from '@/types/country';
import { CheckCircle2, XCircle, Calendar } from 'lucide-react';

export default function TreatyStatus({ country }: { country: Country }) {
  const treaties = [
    { name: 'Basel Convention', date: country.basel_ratified, desc: 'Control of Transboundary Movements of Hazardous Wastes' },
    { name: 'Bamako Convention', date: country.bamako_ratified, desc: 'Ban of the Import into Africa of Hazardous Wastes' },
    { name: 'Montreal Protocol', date: country.montreal_ratified, desc: 'Substances that Deplete the Ozone Layer' },
    { name: 'Kigali Amendment', date: country.kigali_ratified, desc: 'Phase-down of hydrofluorocarbons (HFCs)' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Treaty Ratification Status</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {treaties.map((treaty) => (
          <div key={treaty.name} className="flex p-4 rounded-lg border border-slate-100 bg-slate-50 items-start gap-4">
            {treaty.date ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-slate-300 shrink-0" />
            )}
            <div>
              <h4 className="font-semibold text-slate-900">{treaty.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{treaty.desc}</p>
              
              <div className="flex items-center gap-1 mt-2 text-sm">
                {treaty.date ? (
                  <>
                    <Calendar className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Ratified: {treaty.date}</span>
                  </>
                ) : (
                  <span className="text-slate-400">Not Ratified</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
