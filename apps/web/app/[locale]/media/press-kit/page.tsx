import { PageHeader } from "@/components/shared/PageHeader";
import { Download, FileImage, FileText, LayoutTemplate } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Press Kit | Media | CSRTA",
    description: "Downloadable press kit and brand assets.",
  };
}

export default async function PressKitPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Press Kit"
        description="Official assets, brand guidelines, and background information for journalists and partners."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-emerald-900 text-white p-10 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-2">Full Press Kit 2025</h2>
              <p className="text-emerald-100">Includes all logos, fact sheets, leadership bios, and high-res photos.</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-xl flex items-center transition-colors whitespace-nowrap shadow-lg">
              <Download className="w-5 h-5 mr-2" /> Download Full Kit (45MB)
            </button>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Individual Assets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <FileImage className="w-6 h-6 text-slate-700" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Logos & Identity</h4>
              <p className="text-sm text-slate-600 flex-1 mb-4">Official CSRTA logos in EPS, PNG, and SVG formats, including dark and light variants.</p>
              <button className="text-emerald-600 font-bold text-sm flex items-center hover:text-emerald-700">
                <Download className="w-4 h-4 mr-1" /> Download Logos (12MB)
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <LayoutTemplate className="w-6 h-6 text-slate-700" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Brand Guidelines</h4>
              <p className="text-sm text-slate-600 flex-1 mb-4">Detailed instructions on logo usage, color palettes, typography, and tone of voice.</p>
              <button className="text-emerald-600 font-bold text-sm flex items-center hover:text-emerald-700">
                <Download className="w-4 h-4 mr-1" /> Download Guidelines (PDF)
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-slate-700" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Fact Sheets</h4>
              <p className="text-sm text-slate-600 flex-1 mb-4">Quick facts, statistics, and contextual backgrounders on environmental dumping.</p>
              <button className="text-emerald-600 font-bold text-sm flex items-center hover:text-emerald-700">
                <Download className="w-4 h-4 mr-1" /> Download Fact Sheets (PDF)
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
