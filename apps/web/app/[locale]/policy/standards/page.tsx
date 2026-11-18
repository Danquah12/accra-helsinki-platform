import { CheckSquare, Info, ExternalLink, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <CheckSquare className="w-8 h-8 text-blue-700" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Appliance Standards (MEPS)</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Minimum Energy Performance Standards are critical tools used by African nations to prevent the dumping of inefficient, obsolete appliances.
          </p>
        </div>

        {/* Standards Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-amber-800 text-sm flex items-start gap-3">
            <Info className="w-5 h-5 flex-shrink-0" />
            <p><strong>Note on &ldquo;Dumping&rdquo;:</strong> Exporters often ship extremely low-efficiency appliances to countries without MEPS. These appliances consume massive amounts of electricity and often contain phased-out refrigerants.</p>
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

        {/* Featured Conference Card: China-Africa Standardization Cooperation 2026 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full bg-slate-900">
              <img
                src="/images/gallery/china-africa-2026/china-africa-full-delegation-main-banner.jpg"
                alt="China-Africa Standardization Cooperation Conference 2026, Beijing"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                  Beijing Summit
                </span>
              </div>
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar size={13} /> 7–9 November 2026</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1"><MapPin size={13} /> Beijing, China</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                China-Africa Standardization Cooperation Conference 2026
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                African energy efficiency and standards experts convened in Beijing for the <em>Seminar on Green, Low-Carbon and Sustainable Standardization</em>. Led by Mr. Kofi A. Agyarko (CSRTA / Accra-Helsinki Group), African delegates urged international manufacturing partners to eliminate dual-standard exports and help prevent Africa from becoming a dumping ground for energy-inefficient cooling equipment.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                <a
                  href="https://gna.org.gh/2026/10/africa-must-not-become-a-dumping-ground-for-inefficient-appliances/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors"
                >
                  <span>GNA Report: Stop Dumping Ground</span>
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://gna.org.gh/2026/10/african-experts-push-for-common-cooling-appliance-standards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors"
                >
                  <span>GNA: Common Cooling Standards</span>
                  <ExternalLink size={13} />
                </a>
                <Link
                  href="/en/media/photos"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                >
                  <span>View All 6 Conference Photos</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
