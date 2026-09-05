import { PageHeader } from "@/components/shared/PageHeader";
import { Wrench, ShieldAlert, Award, BookOpen } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Technician Training | Solutions | CSRTA",
    description: "RAC technician training programs for safe handling of natural refrigerants.",
  };
}

export default async function TechnicianTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Technician Training & Certification"
        description="Empowering the informal sector through rigorous training on the safe handling of flammable natural refrigerants and efficient servicing practices."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-slate-800 p-8 flex flex-col justify-center text-white">
              <Wrench className="w-12 h-12 mb-4 text-emerald-400" />
              <h2 className="text-2xl font-bold mb-4">The Frontline of Climate Action</h2>
              <p className="text-slate-300">
                Refrigeration and Air Conditioning (RAC) technicians are essential to the transition. Proper servicing prevents refrigerant leakage and maintains equipment efficiency over its lifespan.
              </p>
            </div>
            <div className="md:w-3/5 p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <ShieldAlert className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Safety First</h4>
                <p className="text-sm text-slate-600">Natural refrigerants like propane (R-290) are highly efficient but flammable. Specialized safety training is non-negotiable.</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Certification</h4>
                <p className="text-sm text-slate-600">Formalizing the sector through recognized national qualification frameworks and licensing.</p>
              </div>
              <div className="sm:col-span-2">
                <BookOpen className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Best Practices</h4>
                <p className="text-sm text-slate-600">Training covers proper recovery, recycling, and reclamation (RRR) of refrigerants to prevent atmospheric venting during repairs.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Program Components</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-emerald-100 mb-4">01</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Curriculum Development</h4>
              <p className="text-slate-600 text-sm">Partnering with technical institutes to integrate natural refrigerants into TVET syllabi.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-emerald-100 mb-4">02</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Train-the-Trainer</h4>
              <p className="text-slate-600 text-sm">Building local capacity by qualifying master trainers who cascade knowledge to grassroots technicians.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-emerald-100 mb-4">03</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Tooling Support</h4>
              <p className="text-slate-600 text-sm">Providing access to specialized tools (recovery machines, identifiers, leak detectors) required for safe handling.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
