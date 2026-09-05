import Link from 'next/link';
import { ArrowLeft, Globe, Shield, AlertTriangle, FileCheck } from 'lucide-react';
import treatiesData from '@/lib/data/treaties.json';

export default async function BaselConventionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const treaty = treatiesData.find(t => t.id === 'basel-convention');

  if (!treaty) return <div>Treaty not found</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href={`/${locale}/policy`} className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Policy Hub
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-emerald-900 p-10 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-12 h-12 text-emerald-400" />
              <h1 className="text-4xl font-bold">{treaty.name}</h1>
            </div>
            <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
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
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Entry into Force</div>
                <div className="text-2xl font-bold text-slate-900">{new Date(treaty.entryIntoForce).getFullYear()}</div>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-emerald-600" /> Key Provisions
                </h2>
                <ul className="grid gap-4">
                  {treaty.keyProvisions.map((prov, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{prov}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-emerald-600" /> Relevance to Africa
                </h2>
                <div className="prose max-w-none text-slate-600">
                  <p className="text-lg">{treaty.relevanceToAfrica}</p>
                  <p className="mt-4">
                    The Basel Convention is critical for African nations to prevent the dumping of e-waste disguised as "used goods" from developed nations. The Prior Informed Consent (PIC) procedure ensures that receiving countries must explicitly agree to import hazardous materials.
                  </p>
                </div>
              </section>

              <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" /> The Ban Amendment
                </h2>
                <p className="text-amber-800">
                  Entered into force in 2019, the Ban Amendment prohibits the export of hazardous wastes for any reason from OECD, EU, and Liechtenstein to all other Parties. This was a crucial victory for developing nations to stop "toxic colonialism".
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
