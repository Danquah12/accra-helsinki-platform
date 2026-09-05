import { PageHeader } from "@/components/shared/PageHeader";
import { Fan, Leaf, Zap, ThermometerSnowflake } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Clean Cooling | Solutions | CSRTA",
    description: "Promoting natural refrigerants and energy-efficient cooling technologies.",
  };
}

export default async function CleanCoolingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Clean Cooling Technologies"
        description="Transitioning to highly efficient cooling solutions utilizing natural refrigerants to minimize climate impact and energy demand."
      />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="prose prose-emerald lg:prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Cooling Imperative</h2>
            <p className="text-slate-600 leading-relaxed">
              As temperatures rise globally, access to cooling is becoming a fundamental necessity for health, food security, and economic productivity. However, traditional cooling equipment heavily relies on hydrofluorocarbons (HFCs)—potent greenhouse gases—and consumes vast amounts of electricity. Africa requires sustainable cooling pathways to develop without catastrophic climate impacts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Leaf className="w-32 h-32" />
              </div>
              <ThermometerSnowflake className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Natural Refrigerants</h3>
              <p className="text-slate-600 mb-6">
                Championing the adoption of ultra-low Global Warming Potential (GWP) alternatives to HFCs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <span className="w-20 font-bold text-emerald-700">R-290</span> Propane for residential ACs
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-20 font-bold text-emerald-700">R-600a</span> Isobutane for domestic fridges
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-20 font-bold text-emerald-700">R-744</span> CO2 for commercial refrigeration
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap className="w-32 h-32" />
              </div>
              <Zap className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Energy Efficiency</h3>
              <p className="text-slate-600 mb-6">
                Coupling climate-friendly refrigerants with high-efficiency inverter technologies and superior insulation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  Inverter-driven compressors
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  Microchannel heat exchangers
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  Solar direct-drive cooling
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">The Green Cooling Initiative</h2>
            <p className="text-emerald-50/90 text-lg mb-8 leading-relaxed">
              A collaborative network promoting the integration of natural refrigerants and energy efficiency into national policies. The initiative supports technology transfer, pilot projects, and policy formulation to leapfrog high-GWP technologies directly to sustainable solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">40%</div>
                <div className="text-sm text-emerald-100">Energy Savings Potential</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">&gt;99%</div>
                <div className="text-sm text-emerald-100">Reduction in Direct Emissions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
                <div className="text-sm text-emerald-100">Partner Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">5k+</div>
                <div className="text-sm text-emerald-100">Technicians Trained</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
