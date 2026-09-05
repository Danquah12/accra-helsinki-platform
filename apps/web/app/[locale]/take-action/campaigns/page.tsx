import { PageHeader } from "@/components/shared/PageHeader";

export async function generateMetadata() {
  return {
    title: "Advocacy Campaigns | Take Action | CSRTA",
    description: "Ongoing advocacy campaigns for environmental protection.",
  };
}

export default async function CampaignsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Advocacy Campaigns"
        description="Join our targeted campaigns to raise awareness and drive systemic change."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-48 bg-slate-800 flex items-center justify-center p-6 text-center">
                <h3 className="text-3xl font-black text-white">#CoolWithoutWarming</h3>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wide mb-4">Active</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Promoting Natural Refrigerants</h4>
                <p className="text-slate-600 mb-6">A digital campaign educating consumers on how to identify and demand appliances that use R-290 (propane) instead of climate-damaging HFCs.</p>
                <button className="text-emerald-600 font-bold border border-emerald-600 rounded-lg px-4 py-2 hover:bg-emerald-50 w-full text-center">Get Campaign Toolkit</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-48 bg-amber-500 flex items-center justify-center p-6 text-center">
                <h3 className="text-3xl font-black text-slate-900">The Right to Repair</h3>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wide mb-4">Active</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Empowering the Informal Sector</h4>
                <p className="text-slate-600 mb-6">Advocating for manufacturers to provide accessible repair manuals and affordable spare parts to local technicians to extend appliance lifespans safely.</p>
                <button className="text-emerald-600 font-bold border border-emerald-600 rounded-lg px-4 py-2 hover:bg-emerald-50 w-full text-center">Join the Coalition</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
