import { Factory, Leaf, Link as LinkIcon, Building2 } from 'lucide-react';

const EPR_STATUS = [
  { country: 'South Africa', status: 'Implemented', year: '2021', details: 'Mandatory EPR for Electrical and Electronic Equipment (EEE), lighting, and packaging.' },
  { country: 'Ghana', status: 'Implemented', year: '2016', details: 'Act 917 incorporates EPR principles and an Eco-levy on imported electronic items to fund recycling.' },
  { country: 'Nigeria', status: 'Implemented', year: '2011', details: 'NESREA guidelines mandate EPR. Established the E-waste Producer Responsibility Organisation of Nigeria (EPRON).' },
  { country: 'Rwanda', status: 'Implemented', year: '2018', details: 'National e-waste management policy based on EPR, heavily driving the Enviroserve facility.' },
  { country: 'Kenya', status: 'Drafting', year: 'Ongoing', details: 'Draft Environmental Management (EPR) Regulations are currently under review.' },
  { country: 'Egypt', status: 'Implemented', year: '2020', details: 'Waste Management Law No. 202 mandates EPR for multiple waste streams including e-waste.' }
];

export default function EprPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <Factory className="w-8 h-8 text-amber-700" />
          </div>
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Extended Producer Responsibility (EPR)</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Tracking the adoption of policies that make manufacturers and importers physically and financially responsible for the end-of-life management of their products.
          </p>
        </div>

        {/* What is EPR */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">How EPR Works in the African Context</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-bold text-slate-900">1. Registration</h3>
              <p className="text-slate-600 text-sm">Manufacturers and importers of electronics (like ACs and fridges) must register with a Producer Responsibility Organization (PRO).</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <LinkIcon className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-bold text-slate-900">2. Financial Contribution</h3>
              <p className="text-slate-600 text-sm">Producers pay a fee (often an eco-levy at the port) based on the volume and type of equipment they place on the market.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-slate-900">3. End-of-Life Management</h3>
              <p className="text-slate-600 text-sm">The PRO uses these funds to subsidize formal collection, safe dismantling, and environmentally sound recycling of e-waste.</p>
            </div>
          </div>
        </div>

        {/* Status Table */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Status by Country</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {EPR_STATUS.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{item.country}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === 'Implemented' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {item.status} ({item.year})
                </span>
              </div>
              <p className="text-slate-600 text-sm">{item.details}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
