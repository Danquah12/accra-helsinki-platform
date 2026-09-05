import Link from 'next/link';
import { Map as MapIcon, Globe, Layers, Navigation } from 'lucide-react';

export default async function MapsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
            <MapIcon className="w-8 h-8 text-emerald-700" />
          </div>
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Data Maps</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Geospatial visualizations of environmental data, e-waste flows, and policy implementation across the African continent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Main Interactive Map */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
              {/* Placeholder image for map */}
              <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center">
                <Globe className="w-32 h-32 text-emerald-900/20" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">Interactive</span>
                <h2 className="text-2xl font-bold text-slate-900">Platform Explorer Map</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Our primary geographic interface. Explore country profiles, e-waste processing hubs, and regional treaty ratification statuses on a unified interactive map.
              </p>
              <Link href={`/${locale}/countries/map`} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors w-full justify-center">
                <Navigation className="w-5 h-5" />
                Launch Interactive Map
              </Link>
            </div>
          </div>

          {/* Secondary Maps Grid */}
          <div className="flex flex-col gap-6">
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-start gap-4 hover:border-emerald-300 transition-colors cursor-pointer">
              <div className="bg-amber-100 p-3 rounded-lg text-amber-700 flex-shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Trade Flow Visualization</h3>
                <p className="text-sm text-slate-600">Map showing the major routes of end-of-life cooling appliances from Europe and Asia into West and East African ports.</p>
                <span className="inline-block mt-3 text-xs font-semibold text-slate-400 uppercase">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-start gap-4 hover:border-emerald-300 transition-colors cursor-pointer">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700 flex-shrink-0">
                <MapIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Agbogbloshie Toxicity Heatmap</h3>
                <p className="text-sm text-slate-600">High-resolution spatial analysis of heavy metal concentration in the soil and water surrounding the Agbogbloshie scrapyard in Accra.</p>
                <span className="inline-block mt-3 text-xs font-semibold text-slate-400 uppercase">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-start gap-4 hover:border-emerald-300 transition-colors cursor-pointer">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-700 flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">EPR Implementation Status</h3>
                <p className="text-sm text-slate-600">Choropleth map detailing the legislative status of Extended Producer Responsibility frameworks across the continent.</p>
                <span className="inline-block mt-3 text-xs font-semibold text-slate-400 uppercase">Coming Soon</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
