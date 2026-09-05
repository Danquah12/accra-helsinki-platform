import { PageHeader } from "@/components/shared/PageHeader";
import { Play } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Documentaries | Media | CSRTA",
    description: "Featured documentaries about e-waste in Africa.",
  };
}

export default async function DocumentariesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Featured Documentaries"
        description="In-depth investigative films exposing the reality of environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-12">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
              <div className="aspect-video bg-slate-900 relative flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="w-20 h-20 bg-emerald-600/90 rounded-full flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm font-medium">52:14</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Award Winning</span>
                  <span className="text-slate-500 text-sm">2024</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Cooling Paradox</h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  An investigative journey from the ports of Europe to the markets of West Africa, tracing the illegal flow of obsolete, energy-guzzling air conditioners that continue to harm the climate long after their supposed retirement.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Ghana</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Nigeria</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">EU Policy</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
              <div className="aspect-video bg-slate-800 relative flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="w-20 h-20 bg-emerald-600/90 rounded-full flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm font-medium">45:30</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-slate-500 text-sm">2023</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Digital Graveyards</h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Exploring the hidden cost of the global transition to new technology. This film highlights the localized environmental and health impacts of processing e-waste informally, while showcasing the grassroots movements pushing for formalized recycling systems.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Kenya</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">E-Waste</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Health</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
