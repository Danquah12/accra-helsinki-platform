import { Server, Lock, Activity, Code } from 'lucide-react';

const ENDPOINTS = [
  {
    method: 'GET',
    path: '/api/v1/countries',
    description: 'Retrieve a list of all African countries tracked by the platform along with basic metadata (population, GDP, regions).',
    req: null,
    res: `{\n  "data": [\n    {\n      "id": "GHA",\n      "name": "Ghana",\n      "region": "West Africa",\n      "population": 32830000\n    }\n  ],\n  "meta": {\n    "count": 54\n  }\n}`
  },
  {
    method: 'GET',
    path: '/api/v1/research',
    description: 'Search the research library. Accepts query parameters: q (search string), type, category, year_start, year_end, limit, offset.',
    req: null,
    res: `{\n  "data": [\n    {\n      "id": 1,\n      "title": "E-waste flow in West Africa",\n      "authors": ["Mensah, A.", "Osei, K."],\n      "date": "2023-10-15"\n    }\n  ],\n  "meta": {\n    "total": 150,\n    "page": 1\n  }\n}`
  },
  {
    method: 'GET',
    path: '/api/v1/treaties',
    description: 'List international treaties and conventions related to waste and refrigerants, including African ratification status.',
    req: null,
    res: `{\n  "data": [\n    {\n      "id": "basel-convention",\n      "name": "Basel Convention",\n      "adoptionDate": "1989-03-22"\n    }\n  ]\n}`
  },
  {
    method: 'GET',
    path: '/api/v1/refrigerants',
    description: 'Database of refrigerants (CFCs, HCFCs, HFCs, Naturals) with GWP, ODP, and phase-out status.',
    req: null,
    res: `{\n  "data": [\n    {\n      "ashraeNumber": "R-134a",\n      "type": "HFC",\n      "gwp": 1430,\n      "phaseOutStatus": "Phase-down"\n    }\n  ]\n}`
  },
  {
    method: 'POST',
    path: '/api/v1/compliance/check',
    description: 'Programmatically check if a shipment or appliance complies with national laws and international treaties.',
    req: `{\n  "applianceType": "Refrigerator",\n  "refrigerant": "R-12",\n  "condition": "Used",\n  "destinationCountry": "GHA"\n}`,
    res: `{\n  "status": "LIKELY NON-COMPLIANT",\n  "issues": [\n    "R-12 (CFC) is universally banned under the Montreal Protocol.",\n    "Used refrigerators older than 5 years are banned in Ghana."\n  ]\n}`
  }
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Developer API</h1>
          <p className="text-lg text-slate-600 mb-6">
            Integrate Accra-Helsinki environmental intelligence data directly into your applications, research tools, or customs systems using our RESTful API.
          </p>
          <div className="flex gap-4">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              <Lock className="w-4 h-4" /> Get API Key
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium">
              <Server className="w-4 h-4" /> API Status
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4 text-emerald-700">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-bold">Authentication</h2>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              All API requests require a Bearer token passed in the Authorization header. You can generate a token in your developer dashboard.
            </p>
            <pre className="bg-slate-900 text-slate-300 p-3 rounded-lg text-xs overflow-x-auto">
              Authorization: Bearer YOUR_API_KEY
            </pre>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4 text-emerald-700">
              <Activity className="w-6 h-6" />
              <h2 className="text-xl font-bold">Rate Limits</h2>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              To ensure fair usage, API requests are rate-limited based on your account tier.
            </p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>Public (Unauthenticated)</span>
                <span className="font-semibold text-slate-800">100 / hour</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>Registered Researcher</span>
                <span className="font-semibold text-slate-800">5,000 / day</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Institutional Partner</span>
                <span className="font-semibold text-slate-800">Unlimited</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
          <Code className="w-6 h-6" /> Endpoints
        </h2>

        <div className="space-y-8">
          {ENDPOINTS.map((endpoint, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 p-4 bg-slate-50 flex items-center gap-3">
                <span className={`px-2 py-1 text-xs font-bold rounded ${endpoint.method === 'GET' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>
                  {endpoint.method}
                </span>
                <code className="font-mono text-slate-800 font-semibold">{endpoint.path}</code>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6">{endpoint.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {endpoint.req && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Request Body</h4>
                      <pre className="bg-slate-900 text-emerald-400 p-4 rounded-lg text-xs overflow-x-auto">
                        {endpoint.req}
                      </pre>
                    </div>
                  )}
                  <div className={endpoint.req ? '' : 'md:col-span-2'}>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Sample Response</h4>
                    <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto">
                      {endpoint.res}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
