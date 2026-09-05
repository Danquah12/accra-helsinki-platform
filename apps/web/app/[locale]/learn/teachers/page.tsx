import { PageHeader } from "@/components/shared/PageHeader";
import { Users, FileDown, Presentation } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Teachers | Learn | CSRTA",
    description: "Curriculum integration guides and classroom activities.",
  };
}

export default async function TeachersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Educators & Teachers"
        description="Equip your classroom with ready-to-use materials on sustainability and e-waste."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                <FileDown className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Lesson Plans</h3>
                <p className="text-slate-600 mb-4">Modules aligned with standard science curriculums, covering topics from the ozone layer to electronic waste recycling.</p>
                <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors">Download PDF Bundle</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                <Presentation className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Classroom Presentations</h3>
                <p className="text-slate-600 mb-4">Visually engaging slide decks designed to capture students' attention and explain complex environmental issues simply.</p>
                <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors">Download PPTX</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
