'use client';

import { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, Info, CheckCircle2, XCircle, Settings, ExternalLink } from 'lucide-react';

export default function ComplianceCheckerPage() {
  const [formData, setFormData] = useState({
    applianceType: 'Refrigerator',
    refrigerant: 'R-134a',
    energyRating: 'Unknown',
    condition: 'Used',
    manufacturingYear: '2015',
    destinationCountry: 'GHA'
  });

  const [result, setResult] = useState<null | {
    status: 'COMPLIANT' | 'WARNING' | 'NON_COMPLIANT',
    issues: string[],
    laws: {name: string, url: string}[],
    documents: string[]
  }>(null);
  
  const [isChecking, setIsChecking] = useState(false);

  const COUNTRIES = [
    { code: 'GHA', name: 'Ghana' },
    { code: 'NGA', name: 'Nigeria' },
    { code: 'KEN', name: 'Kenya' },
    { code: 'ZAF', name: 'South Africa' },
    { code: 'SEN', name: 'Senegal' }
  ];

  const REFRIGERANTS = ['R-12', 'R-22', 'R-134a', 'R-410A', 'R-32', 'R-290', 'R-600a', 'None'];
  const APPLIANCES = ['Refrigerator', 'Air Conditioner', 'Washing Machine', 'Television', 'Computer', 'Solar Panel'];
  
  // Generate years 2000-2025
  const YEARS = Array.from({length: 26}, (_, i) => (2025 - i).toString());

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setResult(null);

    setTimeout(() => {
      // Basic Rules Engine
      const issues: string[] = [];
      const laws: {name: string, url: string}[] = [];
      const docs = ['Commercial Invoice', 'Bill of Lading', 'Certificate of Origin'];
      let status: 'COMPLIANT' | 'WARNING' | 'NON_COMPLIANT' = 'COMPLIANT';

      // Rule 1: CFCs are banned
      if (formData.refrigerant === 'R-12') {
        issues.push('R-12 (CFC) is universally banned under the Montreal Protocol.');
        laws.push({ name: 'Montreal Protocol Article 2A', url: '#' });
        status = 'NON_COMPLIANT';
      }

      // Rule 2: Used cooling appliances in Ghana
      if (formData.destinationCountry === 'GHA' && formData.condition === 'Used' && 
         (formData.applianceType === 'Refrigerator' || formData.applianceType === 'Air Conditioner')) {
        issues.push('Ghana prohibits the importation of used refrigerators and air conditioners.');
        laws.push({ name: 'Energy Efficiency Regulations (LI 1932)', url: '#' });
        status = 'NON_COMPLIANT';
      }

      // Rule 3: HCFCs phase-out
      if (formData.refrigerant === 'R-22') {
        issues.push('R-22 (HCFC) is subject to strict import quotas and rapid phase-out.');
        status = status === 'NON_COMPLIANT' ? 'NON_COMPLIANT' : 'WARNING';
        docs.push('National EPA Import Permit (Quota)');
      }

      // Rule 4: Old electronics
      const age = 2025 - parseInt(formData.manufacturingYear);
      if (age > 10 && formData.condition === 'Used' && formData.destinationCountry === 'NGA') {
        issues.push('Nigeria restricts e-waste and near-end-of-life electronics. Age > 10 years may be classified as waste.');
        laws.push({ name: 'NESREA Harmful Waste Framework', url: '#' });
        laws.push({ name: 'Basel Convention (Prior Informed Consent required)', url: '#' });
        status = status === 'NON_COMPLIANT' ? 'NON_COMPLIANT' : 'WARNING';
        docs.push('Basel Convention Notification Document');
      }

      if (status === 'COMPLIANT' && issues.length === 0) {
        issues.push('No obvious regulatory violations detected based on input data.');
        laws.push({ name: 'National Customs Tariff Schedule', url: '#' });
      }

      setResult({ status, issues, laws, documents: docs });
      setIsChecking(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Import Compliance Checker</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Verify shipment compliance against national laws and international environmental treaties.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Input Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-emerald-600" />
              Shipment Details
            </h2>

            <form onSubmit={handleCheck} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Destination Country</label>
                <select 
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.destinationCountry}
                  onChange={(e) => setFormData({...formData, destinationCountry: e.target.value})}
                >
                  {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Appliance Type</label>
                <select 
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.applianceType}
                  onChange={(e) => setFormData({...formData, applianceType: e.target.value})}
                >
                  {APPLIANCES.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Condition</label>
                <select 
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.condition}
                  onChange={(e) => setFormData({...formData, condition: e.target.value})}
                >
                  <option value="New">New (In Original Packaging)</option>
                  <option value="Used">Used / Second-hand</option>
                  <option value="Waste">Waste / End-of-Life</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mfg Year</label>
                  <select 
                    className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.manufacturingYear}
                    onChange={(e) => setFormData({...formData, manufacturingYear: e.target.value})}
                  >
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Energy Rating</label>
                  <select 
                    className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.energyRating}
                    onChange={(e) => setFormData({...formData, energyRating: e.target.value})}
                  >
                    <option value="A">Class A (or equiv)</option>
                    <option value="B">Class B</option>
                    <option value="C">Class C</option>
                    <option value="D">Class D/Lower</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
              </div>

              {(formData.applianceType === 'Refrigerator' || formData.applianceType === 'Air Conditioner') && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Refrigerant Gas</label>
                  <select 
                    className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.refrigerant}
                    onChange={(e) => setFormData({...formData, refrigerant: e.target.value})}
                  >
                    {REFRIGERANTS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isChecking}
                className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2"
              >
                {isChecking ? 'Analyzing Rules...' : 'Check Compliance'}
              </button>
            </form>
          </div>

          {/* Results Panel */}
          <div className="md:col-span-3">
            {!result && !isChecking && (
              <div className="bg-white rounded-xl border border-slate-200 h-full flex flex-col items-center justify-center p-12 text-center text-slate-500">
                <ShieldCheck className="w-16 h-16 text-slate-200 mb-4" />
                <p>Fill out the shipment details and click "Check Compliance" to run the rules engine against our legal database.</p>
              </div>
            )}

            {isChecking && (
              <div className="bg-white rounded-xl border border-slate-200 h-full flex flex-col items-center justify-center p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mb-4"></div>
                <p className="text-slate-600 font-medium animate-pulse">Cross-referencing legal database...</p>
              </div>
            )}

            {result && !isChecking && (
              <div className={`bg-white rounded-xl shadow-md border-t-8 h-full flex flex-col ${
                result.status === 'COMPLIANT' ? 'border-emerald-500' : 
                result.status === 'WARNING' ? 'border-amber-500' : 'border-red-500'
              }`}>
                <div className="p-6 border-b border-slate-100 flex items-start gap-4">
                  {result.status === 'COMPLIANT' ? <CheckCircle2 className="w-10 h-10 text-emerald-500 mt-1" /> :
                   result.status === 'WARNING' ? <AlertTriangle className="w-10 h-10 text-amber-500 mt-1" /> :
                   <XCircle className="w-10 h-10 text-red-500 mt-1" />}
                  
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {result.status === 'COMPLIANT' ? 'Likely Compliant' : 
                       result.status === 'WARNING' ? 'Requires Verification' : 'Likely Non-Compliant'}
                    </h2>
                    <p className="text-slate-600 text-sm mt-1">Based on the provided parameters for {COUNTRIES.find(c => c.code === formData.destinationCountry)?.name}.</p>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col gap-6">
                  
                  <div>
                    <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Findings</h3>
                    <ul className="space-y-2">
                      {result.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Applicable Laws</h3>
                      <ul className="space-y-2">
                        {result.laws.map((law, idx) => (
                          <li key={idx}>
                            <a href={law.url} className="text-sm text-emerald-600 hover:underline flex items-center gap-1">
                              <ExternalLink className="w-3 h-3" /> {law.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Required Documents</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {result.documents.map((doc, idx) => (
                          <li key={idx} className="text-sm text-slate-600">{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="bg-slate-100 p-4 text-xs text-slate-500 rounded-b-xl text-center">
                  <strong>Disclaimer:</strong> This tool provides preliminary guidance based on digitized legal texts. It does not constitute formal legal advice or binding customs clearance. Always consult official national authorities.
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
