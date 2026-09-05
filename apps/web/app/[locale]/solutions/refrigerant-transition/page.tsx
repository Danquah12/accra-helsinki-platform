import { PageHeader } from "@/components/shared/PageHeader";
import { ArrowRightLeft, BookOpen, Wrench, AlertTriangle } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Refrigerant Transition | Solutions | CSRTA",
    description: "Transitioning from HFCs to natural refrigerants under the Kigali Amendment.",
  };
}

export default async function RefrigerantTransitionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Refrigerant Transition"
        description="Implementing the Kigali Amendment by phasing down potent greenhouse gas refrigerants in favor of climate-friendly alternatives."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-emerald lg:prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900">The Kigali Amendment</h2>
            <p className="text-slate-600">
              The Kigali Amendment to the Montreal Protocol mandates a global phasedown of hydrofluorocarbons (HFCs). While HFCs do not deplete the ozone layer, they are extremely potent greenhouse gases—some thousands of times more powerful than CO2.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <ArrowRightLeft className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Phase-Down Schedule</h3>
              <p className="text-slate-600">African nations are working on schedules to freeze HFC consumption and achieve an 80% reduction over the coming decades through quotas and import bans on non-compliant equipment.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Dumping Threat</h3>
              <p className="text-slate-600">As developed nations transition away from HFCs faster, their obsolete HFC equipment is often dumped in African markets, burdening the continent with future emissions and servicing challenges.</p>
            </div>
          </div>

          <div className="bg-emerald-900 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Transition Roadmap for African Markets</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">National Inventories & Quotas</h4>
                  <p className="text-emerald-100">Establishing accurate baselines of HFC consumption and enforcing strict import quota systems to cap growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Customs Training & Identifiers</h4>
                  <p className="text-emerald-100">Equipping border agents with gas analyzers to prevent illegal smuggling of banned refrigerants mislabeled as legal alternatives.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Technician Certification</h4>
                  <p className="text-emerald-100">Training the informal servicing sector to safely handle flammable natural refrigerants (like R-290).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
