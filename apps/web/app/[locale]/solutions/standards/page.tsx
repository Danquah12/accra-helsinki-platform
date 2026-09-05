import { PageHeader } from "@/components/shared/PageHeader";
import { CheckCircle2, Shield, Activity, TrendingDown } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Appliance Standards | Solutions | CSRTA",
    description: "Minimum Energy Performance Standards (MEPS) success stories.",
  };
}

export default async function StandardsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Appliance Standards (MEPS)"
        description="Implementing Minimum Energy Performance Standards to protect markets from being dumping grounds for inefficient, obsolete products."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Standards Matter</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Without robust standards, countries become destinations for low-quality, energy-intensive appliances that cannot legally be sold in the regions where they are manufactured. MEPS establish the minimum efficiency floor for products entering a country.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-emerald-600 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Consumer Protection</h4>
                  <p className="text-slate-600 text-sm">Prevents consumers from being burdened with exorbitant electricity bills.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingDown className="w-6 h-6 text-emerald-600 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Grid Relief</h4>
                  <p className="text-slate-600 text-sm">Reduces strain on national electricity grids, averting blackouts.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Success Stories</h3>
          
          <div className="space-y-6">
            <div className="bg-emerald-900 text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Ghana's LI 2250</h4>
              <p className="text-emerald-50 mb-4">
                Ghana was the first African country to prohibit the importation of used cooling appliances. 
                Legislative Instrument 2250 has successfully prevented millions of energy-guzzling units from entering the market, saving the country over 400 GWh of electricity annually.
              </p>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-amber-500" /> Established in 2008, updated continuously</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-amber-500" /> Backed by rigorous customs enforcement</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-amber-500" /> Included a successful rebate scheme to encourage transition</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Kenya's Comprehensive Standards</h4>
              <p className="text-slate-600 mb-4">
                The Kenya Bureau of Standards (KEBS) implements stringent MEPS and labeling requirements for both domestic and commercial refrigeration equipment.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><Activity className="w-4 h-4 mr-2 text-emerald-600" /> Mandatory star-rating labels for consumer awareness</li>
                <li className="flex items-center"><Activity className="w-4 h-4 mr-2 text-emerald-600" /> Pre-export Verification of Conformity (PVoC) requirement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
