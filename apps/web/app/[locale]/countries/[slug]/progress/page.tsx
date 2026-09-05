import { getCountryBySlug } from '@/lib/data/countries';
import ProgressScorecard from '@/components/country/ProgressScorecard';
import { notFound } from 'next/navigation';

export default async function CountryProgressPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) notFound();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Progress & Assessment</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          The progress scorecard provides a high-level assessment of {country.name}'s readiness and performance across key environmental intelligence dimensions.
        </p>
        <ProgressScorecard country={country} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Historical Timeline</h2>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center h-full min-h-[300px] flex flex-col items-center justify-center">
          <p className="text-slate-500 mb-4">Milestones and historical improvements for {country.name}</p>
          <div className="inline-block bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full font-medium">
            Timeline Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
