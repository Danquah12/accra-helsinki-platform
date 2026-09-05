import { PageHeader } from "@/components/shared/PageHeader";
import { Ship, ScanEye, ScrollText, Network } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Port Enforcement | Solutions | CSRTA",
    description: "Customs inspection and border control best practices to intercept illegal shipments.",
  };
}

export default async function PortEnforcementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Border & Port Enforcement"
        description="Equipping customs and environmental officers with the intelligence and tools to intercept illegal shipments of obsolete equipment."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-emerald-900 text-white p-8 md:p-12 rounded-2xl mb-12">
            <Ship className="w-16 h-16 text-emerald-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">The First Line of Defense</h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-8">
              Environmental dumping relies heavily on misclassification. E-waste is often disguised as "second-hand goods," and banned refrigerants are smuggled in mislabeled cylinders. Robust port enforcement is critical to halting this illegal trade.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-800 p-6 rounded-xl">
                <ScanEye className="w-8 h-8 text-amber-400 mb-3" />
                <h4 className="font-bold mb-2">Intelligence-Led Targeting</h4>
                <p className="text-sm text-emerald-200">Using data analytics to identify high-risk shipments based on origin, route, and historical compliance data.</p>
              </div>
              <div className="bg-emerald-800 p-6 rounded-xl">
                <Network className="w-8 h-8 text-amber-400 mb-3" />
                <h4 className="font-bold mb-2">Inter-Agency Cooperation</h4>
                <p className="text-sm text-emerald-200">Fostering seamless communication between Customs, Environmental Protection Agencies, and Energy Commissions.</p>
              </div>
              <div className="bg-emerald-800 p-6 rounded-xl">
                <ScrollText className="w-8 h-8 text-amber-400 mb-3" />
                <h4 className="font-bold mb-2">HS Code Harmonization</h4>
                <p className="text-sm text-emerald-200">Refining tariff codes to clearly distinguish between new, highly-efficient equipment and used, near-end-of-life items.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Interventions</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0 mr-6">
                <ScanEye className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Refrigerant Identifiers Deployment</h4>
                <p className="text-slate-600">Provision of multi-gas identifiers to customs officers to instantly detect counterfeit refrigerants or banned substances (like CFCs and HCFCs) smuggled in cylinders labeled as legal HFCs.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0 mr-6">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Prior Informed Consent (PIC) Enforcement</h4>
                <p className="text-slate-600">Strengthening the application of the Basel Convention's PIC procedure for transboundary movements of hazardous wastes, ensuring importing countries have explicitly authorized the shipment.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
