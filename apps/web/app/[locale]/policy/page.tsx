import Link from 'next/link';
import { BookText, Scale, Globe2, ShieldCheck, CheckSquare, Clock, FileText, Factory } from 'lucide-react';

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Laws & Policy Hub</h1>
          <p className="text-xl md:text-2xl text-emerald-100/80 mb-10 max-w-3xl mx-auto">
            Navigating international treaties, national legislation, and compliance frameworks for environmental intelligence.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-6 bg-slate-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-emerald-900">International Treaties</h2>
            <Link href={`/${locale}/policy/timeline`} className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2">
              <Clock className="w-4 h-4" /> View Treaty Timeline
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link href={`/${locale}/policy/basel-convention`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group">
              <Globe2 className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Basel Convention</h3>
              <p className="text-sm text-slate-600">Control of transboundary movements of hazardous wastes and their disposal.</p>
            </Link>

            <Link href={`/${locale}/policy/bamako-convention`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bamako Convention</h3>
              <p className="text-sm text-slate-600">Treaty of African nations prohibiting the import of hazardous waste into Africa.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group">
              <BookText className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Montreal Protocol</h3>
              <p className="text-sm text-slate-600">Global agreement to protect the stratospheric ozone layer by phasing out ODS.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/kigali`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group">
              <FileText className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Kigali Amendment</h3>
              <p className="text-sm text-slate-600">Amendment to phase down the production and consumption of HFCs.</p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-emerald-900 mb-8">National Frameworks & Compliance</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href={`/${locale}/policy/national-laws`} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="h-32 bg-emerald-100 flex items-center justify-center">
                <Scale className="w-16 h-16 text-emerald-700 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">National Laws</h3>
                <p className="text-slate-600 mb-4 text-sm">Explore country-specific environmental regulations, import restrictions, and e-waste management bills.</p>
                <span className="text-emerald-600 font-semibold text-sm">Browse Directory →</span>
              </div>
            </Link>

            <Link href={`/${locale}/policy/standards`} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="h-32 bg-blue-100 flex items-center justify-center">
                <CheckSquare className="w-16 h-16 text-blue-700 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Appliance Standards (MEPS)</h3>
                <p className="text-slate-600 mb-4 text-sm">Compare Minimum Energy Performance Standards across African nations to combat dumping.</p>
                <span className="text-blue-600 font-semibold text-sm">Compare Standards →</span>
              </div>
            </Link>

            <Link href={`/${locale}/policy/epr`} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="h-32 bg-amber-100 flex items-center justify-center">
                <Factory className="w-16 h-16 text-amber-700 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Extended Producer Responsibility</h3>
                <p className="text-slate-600 mb-4 text-sm">Track the implementation of EPR schemes requiring manufacturers to manage end-of-life products.</p>
                <span className="text-amber-600 font-semibold text-sm">Track Progress →</span>
              </div>
            </Link>
          </div>

          {/* Featured Tool */}
          <div className="mt-16 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Featured Tool</div>
              <h2 className="text-3xl font-bold mb-4">Import Compliance Checker</h2>
              <p className="text-emerald-100 text-lg mb-0">
                Instantly verify if a specific appliance, refrigerant, or e-waste shipment complies with national laws and international treaties before it reaches the port.
              </p>
            </div>
            <Link href={`/${locale}/policy/compliance-checker`} className="flex-shrink-0 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg transition-colors text-lg whitespace-nowrap">
              Launch Checker Tool
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
