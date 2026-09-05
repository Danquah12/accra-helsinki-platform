import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookOpen, Database, BarChart3, Map, Terminal, Bot } from 'lucide-react';

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Data Hub</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl">
            Access our comprehensive library of environmental policies, treaties, and datasets regarding Africa.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-emerald-800/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-emerald-100">Research Papers</div>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-emerald-100">Open Datasets</div>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">10</div>
              <div className="text-emerald-100">Focus Countries</div>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">4</div>
              <div className="text-emerald-100">Major Treaties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources Grid */}
      <section className="py-20 px-6 bg-slate-50 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">Explore Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href={`/${locale}/research/library`} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-500 transition-all h-full">
                <BookOpen className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Research Library</h3>
                <p className="text-slate-600">Search and filter through academic papers, UN reports, and government investigations.</p>
              </div>
            </Link>

            <Link href={`/${locale}/research/datasets`} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-500 transition-all h-full">
                <Database className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Open Data Center</h3>
                <p className="text-slate-600">Download environmental datasets in CSV, JSON, and Excel formats.</p>
              </div>
            </Link>

            <Link href={`/${locale}/research/statistics`} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-500 transition-all h-full">
                <BarChart3 className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Statistics & Dashboards</h3>
                <p className="text-slate-600">Interactive charts and visualizations of e-waste and refrigerant trends.</p>
              </div>
            </Link>

            <Link href={`/${locale}/research/maps`} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-500 transition-all h-full">
                <Map className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Maps</h3>
                <p className="text-slate-600">Geospatial visualizations of environmental data across Africa.</p>
              </div>
            </Link>

            <Link href={`/${locale}/research/api`} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-500 transition-all h-full">
                <Terminal className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Developer API</h3>
                <p className="text-slate-600">Documentation for accessing our data programmatically via REST endpoints.</p>
              </div>
            </Link>

            <Link href={`/${locale}/research/ai-assistant`} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-500 transition-all h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BETA</div>
                <Bot className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Research Assistant</h3>
                <p className="text-slate-600">Ask questions and get intelligent answers powered by our knowledge base.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
