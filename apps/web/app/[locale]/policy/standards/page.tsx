import { CheckSquare, Info } from 'lucide-react';

const STANDARDS = [
  {
    country: 'Ghana',
    appliance: 'Refrigerators',
    meps: 'Adopted (2008)',
    limits: 'Max 600 kWh/yr for 300L combi',
    labels: '1-5 Stars (Mandatory)'
  },
  {
    country: 'Ghana',
    appliance: 'Air Conditioners',
    meps: 'Adopted (2005)',
    limits: 'Min EER 2.8 W/W',
    labels: '1-5 Stars (Mandatory)'
  },
  {
    country: 'Kenya',
    appliance: 'Refrigerators',
    meps: 'Draft',
    limits: 'Aligning with U4E Model Guidelines',
    labels: 'Voluntary'
  },
  {
    country: 'Nigeria',
    appliance: 'Air Conditioners',
    meps: 'Adopted (2020)',
    limits: 'Min EER 2.9 W/W',
    labels: 'Mandatory'
  },
  {
    country: 'South Africa',
    appliance: 'Refrigerators',
    meps: 'Adopted (2015)',
    limits: 'Class B (SANS 941)',
    labels: 'Mandatory A-G scale'
  }
];

export default function StandardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <CheckSquare className="w-8 h-8 text-blue-700" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Appliance Standards (MEPS)</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Minimum Energy Performance Standards are critical tools used by African nations to prevent the dumping of inefficient, obsolete appliances.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-amber-800 text-sm flex items-start gap-3">
            <Info className="w-5 h-5 flex-shrink-0" />
            <p><strong>Note on "Dumping":</strong> Exporters often ship extremely low-efficiency appliances to countries without MEPS. These appliances consume massive amounts of electricity and often contain phased-out refrigerants.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-semibold">Country</th>
                  <th className="p-4 font-semibold">Appliance Type</th>
                  <th className="p-4 font-semibold">MEPS Status</th>
                  <th className="p-4 font-semibold">Efficiency Limits</th>
                  <th className="p-4 font-semibold">Labeling Scheme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {STANDARDS.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">{s.country}</td>
                    <td className="p-4 text-slate-700">{s.appliance}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        s.meps.includes('Adopted') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {s.meps}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{s.limits}</td>
                    <td className="p-4 text-sm text-slate-600">{s.labels}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
