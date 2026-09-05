import { PageHeader } from "@/components/shared/PageHeader";
import { Download, Filter, Search } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Resources Library | Learn | CSRTA",
    description: "Downloadable resources, fact sheets, and posters.",
  };
}

export default async function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Resource Library"
        description="A comprehensive repository of all our educational materials, reports, and toolkits."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search resources..." className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 outline-none focus:border-emerald-500" />
            </div>
            <button className="flex items-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 w-full md:w-auto">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </button>
          </div>

          <div className="space-y-4">
            {[
              { id: 1, type: "Report", title: "E-Waste Flow Analysis 2024", size: "4.2 MB", audience: "Policy Makers" },
              { id: 2, type: "Poster", title: "R-290 Safety Do's and Don'ts", size: "1.8 MB", audience: "Technicians" },
              { id: 3, type: "Worksheet", title: "Classroom Recycling Challenge", size: "0.5 MB", audience: "Teachers" },
              { id: 4, type: "Fact Sheet", title: "The Kigali Amendment Explained", size: "1.1 MB", audience: "General" }
            ].map(doc => (
              <div key={doc.id} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">{doc.type}</span>
                    <span className="text-xs font-medium text-emerald-600 border border-emerald-200 bg-emerald-50 px-2 py-1 rounded">{doc.audience}</span>
                  </div>
                  <h3 className="font-bold text-slate-900">{doc.title}</h3>
                </div>
                <button className="flex items-center text-sm font-medium text-slate-600 hover:text-emerald-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> PDF ({doc.size})
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
