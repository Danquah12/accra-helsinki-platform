import Link from 'next/link';
import { Scale, MapPin, ExternalLink, Download } from 'lucide-react';

const COUNTRIES = [
  {
    name: 'Ghana',
    laws: [
      {
        title: 'Energy Efficiency (Refrigerating Appliances) Regulations, 2008 (LI 1932)',
        description: 'Prohibits the importation of used refrigerator appliances and incandescent filament lamps.',
        year: '2008'
      },
      {
        title: 'Hazardous and Electronic Waste Control and Management Act (Act 917)',
        description: 'Comprehensive framework for e-waste management, incorporating the EPR principle and an Eco-levy.',
        year: '2016'
      }
    ]
  },
  {
    name: 'Nigeria',
    laws: [
      {
        title: 'National Environmental (Electrical/Electronic Sector) Regulations',
        description: 'Mandates Extended Producer Responsibility (EPR) for the electronics sector.',
        year: '2011'
      },
      {
        title: 'Harmful Waste (Special Criminal Provisions) Act',
        description: 'Prohibits the carrying, depositing and dumping of harmful waste on any land or territorial waters.',
        year: '2004'
      }
    ]
  },
  {
    name: 'Kenya',
    laws: [
      {
        title: 'E-Waste Management Regulations',
        description: 'Provides for appropriate legal and institutional framework for the management of e-waste handling, collection, transportation, and recycling.',
        year: '2013'
      }
    ]
  }
];

export default function NationalLawsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
            <Scale className="w-8 h-8 text-emerald-700" />
          </div>
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">National Laws Directory</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive repository of domestic legislation governing e-waste imports, refrigerant quotas, and environmental compliance across Africa.
          </p>
        </div>

        <div className="space-y-12">
          {COUNTRIES.map(country => (
            <div key={country.name} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 p-6 border-b border-slate-200 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">{country.name}</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {country.laws.map((law, idx) => (
                    <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-800 pr-8">{law.title}</h3>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                          {law.year}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4 text-sm">{law.description}</p>
                      <div className="flex gap-4">
                        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" /> View Full Text
                        </button>
                        <button className="text-slate-500 hover:text-slate-700 text-sm font-semibold flex items-center gap-1">
                          <Download className="w-4 h-4" /> PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
