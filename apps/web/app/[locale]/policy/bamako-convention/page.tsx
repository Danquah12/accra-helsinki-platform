import Link from 'next/link';
import { ArrowLeft, Flag, ShieldAlert, CheckCircle, Scale } from 'lucide-react';
import treatiesData from '@/lib/data/treaties.json';

export default async function BamakoConventionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const treaty = treatiesData.find(t => t.id === 'bamako-convention');

  if (!treaty) return <div>Treaty not found</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href={`/${locale}/policy`} className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Policy Hub
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-amber-900 p-10 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Flag className="w-12 h-12 text-amber-400" />
              <h1 className="text-4xl font-bold">{treaty.name}</h1>
            </div>
            <p className="text-xl text-amber-100 max-w-3xl leading-relaxed">
              {treaty.description}
            </p>
          </div>

          <div className="p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Adoption Date</div>
                <div className="text-2xl font-bold text-slate-900">{new Date(treaty.adoptionDate).getFullYear()}</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Status</div>
                <div className="text-2xl font-bold text-emerald-600">{treaty.ratificationStatus}</div>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-amber-600" /> Key Provisions vs Basel
                </h2>
                <div className="prose max-w-none text-slate-600">
                  <p className="text-lg font-medium text-slate-800 mb-4">{treaty.relevanceToAfrica}</p>
                  <p>
                    Unlike the original Basel Convention which allowed hazardous waste trade under the Prior Informed Consent (PIC) procedure, the Bamako Convention explicitly <strong>bans the import of all hazardous and radioactive waste into Africa</strong> from non-contracting parties.
                  </p>
                </div>
                
                <ul className="grid gap-4 mt-6">
                  {treaty.keyProvisions.map((prov, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{prov}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-600" /> Relevance to E-Waste
                </h2>
                <p className="text-emerald-800">
                  The Bamako Convention covers waste that is legally defined as hazardous in the country of manufacture, even if not covered by Basel. This makes it a powerful legal tool against the dumping of obsolete electronics and used appliances that contain toxic components.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
