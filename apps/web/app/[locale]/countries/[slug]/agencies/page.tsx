import { getCountryBySlug } from '@/lib/data/countries';
import { notFound } from 'next/navigation';

export default async function CountryAgenciesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) notFound();

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Government Agencies</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <p className="text-slate-500 mb-4">Relevant ministries and bodies in {country.name}</p>
        <div className="inline-block bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full font-medium">
          Agency Directory Coming Soon
        </div>
      </div>
    </div>
  );
}
