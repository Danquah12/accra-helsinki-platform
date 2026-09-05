import { PageHeader } from "@/components/shared/PageHeader";
import { Users } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Petitions | Take Action | CSRTA",
    description: "Active petitions against environmental dumping.",
  };
}

const petitions = [
  {
    id: 1,
    title: "Demand Immediate Enforcement of LI 2250 on Used ACs",
    target: "Ministry of Energy, Ghana",
    description: "Despite legislative bans, obsolete air conditioners continue to leak into the market. We call on the Ministry to empower the Energy Commission with tighter border inspection resources.",
    signatures: 14500,
    goal: 20000
  },
  {
    id: 2,
    title: "Stop the Export of Non-Functional E-Waste from the EU",
    target: "European Commission Directorate-General for Environment",
    description: "Sign the open letter demanding that the EU strictly enforces the ban on exporting broken electronics mislabeled as 'repairable goods' to West Africa.",
    signatures: 42300,
    goal: 50000
  },
  {
    id: 3,
    title: "Mandate EPR (Extended Producer Responsibility) Nationwide",
    target: "National Environmental Management Authority (NEMA), Kenya",
    description: "Producers must pay for the end-of-life management of the electronics they sell. Urge NEMA to finalize and enforce the national EPR regulations immediately.",
    signatures: 8900,
    goal: 10000
  }
];

export default async function PetitionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Active Petitions"
        description="Add your name to demand policy changes and strict enforcement against environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {petitions.map(petition => {
              const progress = (petition.signatures / petition.goal) * 100;
              return (
                <div key={petition.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{petition.title}</h2>
                  <div className="text-sm font-medium text-emerald-700 mb-4">Target: {petition.target}</div>
                  <p className="text-slate-600 mb-6">{petition.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                      <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {petition.signatures.toLocaleString()} signed</span>
                      <span>Goal: {petition.goal.toLocaleString()}</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                  
                  <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors">
                    Sign Now
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
