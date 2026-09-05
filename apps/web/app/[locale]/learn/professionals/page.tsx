import { PageHeader } from "@/components/shared/PageHeader";
import { PenTool, Shield, Wrench, FileCheck2 } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Technical Professionals | Learn | CSRTA",
    description: "Resources for RAC technicians and technical professionals.",
  };
}

export default async function ProfessionalsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Technical Professionals"
        description="Specialized manuals, safety protocols, and certification pathways for RAC technicians."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-emerald-900 text-white p-8 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">RAC Technician Certification Portal</h2>
              <p className="text-emerald-100 max-w-xl">Register for upcoming certification exams, access study materials, and join the verified network of green cooling professionals.</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl whitespace-nowrap">Access Portal</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Shield className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Safety Protocols</h3>
              <p className="text-sm text-slate-600 mb-4">Guidelines for handling flammable hydrocarbon refrigerants safely.</p>
              <button className="text-emerald-600 text-sm font-bold">Download Guide</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Wrench className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Best Practices</h3>
              <p className="text-sm text-slate-600 mb-4">Manuals on proper recovery, recycling, and reclamation techniques.</p>
              <button className="text-emerald-600 text-sm font-bold">Download Manual</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <FileCheck2 className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Policy Updates</h3>
              <p className="text-sm text-slate-600 mb-4">Keep up with the latest phasedown schedules and banned substances lists.</p>
              <button className="text-emerald-600 text-sm font-bold">View Updates</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
