import Link from 'next/link';
import { ArrowLeft, FileText, ThermometerSun, CheckCircle, TrendingDown } from 'lucide-react';
import treatiesData from '@/lib/data/treaties.json';

export default async function KigaliAmendmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const treaty = treatiesData.find(t => t.id === 'kigali-amendment');

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href={`/${locale}/policy/montreal-protocol`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Montreal Protocol Center
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-purple-900 p-10 text-white">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-12 h-12 text-purple-400" />
              <h1 className="text-4xl font-bold">{treaty?.name || 'Kigali Amendment'}</h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">
              {treaty?.description || 'The international agreement to gradually reduce the consumption and production of hydrofluorocarbons (HFCs).'}
            </p>
          </div>

          <div className="p-10">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Adopted</div>
                <div className="text-2xl font-bold text-slate-900">2016</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Entered into Force</div>
                <div className="text-2xl font-bold text-slate-900">2019</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Ratifications</div>
                <div className="text-2xl font-bold text-purple-600">150+</div>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-purple-600" /> The HFC Phase-down
                </h2>
                <div className="prose max-w-none text-slate-600">
                  <p className="text-lg">
                    While HFCs do not deplete the ozone layer, they are powerful greenhouse gases with Global Warming Potentials (GWPs) hundreds to thousands of times greater than carbon dioxide.
                  </p>
                  <p className="mt-4">
                    The Kigali Amendment aims to phase down HFCs by more than 80% over the next 30 years. This single action is expected to prevent up to 0.5°C of global warming by the end of the century.
                  </p>
                </div>
              </section>

              <section className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                  <ThermometerSun className="w-5 h-5 text-purple-600" /> Impact on Africa
                </h2>
                <p className="text-purple-800 mb-6">
                  {treaty?.relevanceToAfrica || 'Crucial for climate change mitigation while improving cooling access and energy efficiency.'}
                </p>
                
                <h3 className="font-bold text-purple-900 mb-3">Article 5 Group 1 Schedule (Most African Nations):</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-800"><strong>2024:</strong> Freeze in consumption at baseline levels</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-800"><strong>2029:</strong> 10% reduction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-800"><strong>2035:</strong> 30% reduction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-800"><strong>2040:</strong> 50% reduction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-800"><strong>2045:</strong> 80% reduction</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
