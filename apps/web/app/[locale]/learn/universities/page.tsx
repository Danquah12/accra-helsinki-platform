import { PageHeader } from "@/components/shared/PageHeader";
import { GraduationCap, Database, FileText } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Universities | Learn | CSRTA",
    description: "Academic resources, research datasets, and thesis topics.",
  };
}

export default async function UniversitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="University & Research"
        description="Empowering the next generation of researchers with data and policy insights."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-emerald max-w-none mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Academic Partnerships</h2>
            <p className="text-slate-600">
              We collaborate with academic institutions across Africa and Europe to deepen the understanding of transboundary waste flows, policy effectiveness, and the socio-economic impacts of the informal recycling sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <Database className="w-8 h-8 text-purple-600 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Open Datasets</h3>
                <p className="text-sm text-slate-600 mb-3">Access anonymized trade data and field surveys on appliance imports.</p>
                <button className="text-purple-600 text-sm font-bold">Access Data Portal →</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <FileText className="w-8 h-8 text-purple-600 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Suggested Thesis Topics</h3>
                <p className="text-sm text-slate-600 mb-3">Curated list of pressing research gaps in environmental law and engineering.</p>
                <button className="text-purple-600 text-sm font-bold">View Topics →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
