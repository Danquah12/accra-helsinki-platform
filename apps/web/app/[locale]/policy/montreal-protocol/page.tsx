import Link from 'next/link';
import { ArrowLeft, BookText, FileText, Wind, ShieldAlert, History, Users, Database, Bot } from 'lucide-react';

export default async function MontrealProtocolHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href={`/${locale}/policy`} className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Policy Hub
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <BookText className="w-16 h-16 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold">Montreal Protocol Center</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            The landmark global agreement to protect the stratospheric ozone layer and mitigate climate change by phasing out ozone-depleting substances and phasing down HFCs.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link href={`/${locale}/policy/montreal-protocol/history`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <History className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">History & Success</h3>
              <p className="text-slate-600">The journey from the discovery of the ozone hole to universal ratification.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/kigali`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kigali Amendment</h3>
              <p className="text-slate-600">The 2016 agreement to phase down HFCs, crucial for climate change mitigation.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/refrigerants`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group border-l-4 border-l-blue-500">
              <Wind className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Refrigerant Database</h3>
              <p className="text-slate-600">Searchable database of CFCs, HCFCs, HFCs, and natural alternatives.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/compliance`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <ShieldAlert className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance & Quotas</h3>
              <p className="text-slate-600">Understanding Article 5 schedules, licensing systems, and import quotas.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/training`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <Users className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Customs Training</h3>
              <p className="text-slate-600">Resources for identifying illegal trade in controlled substances.</p>
            </Link>

            <Link href={`/${locale}/research/ai-assistant`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group bg-gradient-to-br from-white to-blue-50">
              <Bot className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ask the AI</h3>
              <p className="text-slate-600">Query our AI assistant specifically about Montreal Protocol regulations.</p>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
