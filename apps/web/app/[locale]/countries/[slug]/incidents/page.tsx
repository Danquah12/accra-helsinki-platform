import { getCountryBySlug } from '@/lib/data/countries';
import { notFound } from 'next/navigation';

export default async function CountryIncidentsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) notFound();

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Environmental Incidents</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <p className="text-slate-500 mb-4">Reported dumping incidents and infractions for {country.name}</p>
        <div className="inline-block bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full font-medium">
          Incident Tracking Coming Soon
        </div>
      </div>
    </div>
  );
}
