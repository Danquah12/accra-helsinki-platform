import { PageHeader } from "@/components/shared/PageHeader";
import { FileText, Calendar } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Press Releases | Media | CSRTA",
    description: "Official press releases from CSRTA.",
  };
}

const pressReleases = [
  { id: 1, title: "CSRTA Launches New Enforcement Taskforce with ECOWAS", date: "September 10, 2025" },
  { id: 2, title: "Joint Statement: African Nations Reject Continued Export of Non-Compliant Cooling Tech", date: "June 22, 2025" },
  { id: 3, title: "Funding Secured for Three New E-Waste Centers in East Africa", date: "April 5, 2025" },
  { id: 4, title: "Report Reveals 30% Drop in Hazardous Appliance Imports Following New Standards", date: "January 18, 2025" }
];

export default async function PressReleasesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Press Releases"
        description="Official announcements and statements for the press."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {pressReleases.map(pr => (
              <div key={pr.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-300 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center text-sm text-slate-500 font-medium mb-1">
                    <Calendar className="w-4 h-4 mr-1" /> {pr.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pr.title}</h3>
                  <button className="text-emerald-600 text-sm font-bold hover:text-emerald-700">Read Full Release →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
