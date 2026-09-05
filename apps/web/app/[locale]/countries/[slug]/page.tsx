import { getCountryBySlug, getAllCountries } from '@/lib/data/countries';
import IndicatorGrid from '@/components/country/IndicatorGrid';
import TreatyStatus from '@/components/country/TreatyStatus';
import { notFound } from 'next/navigation';


export default async function CountryOverviewPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const overview = locale === 'fr' ? country.overview_fr : country.overview_en;

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Country Overview</h2>
        <div className="prose prose-slate max-w-none bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-700 leading-relaxed">
          <p>{overview}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Indicators</h2>
        <IndicatorGrid country={country} />
      </section>

      <section>
        <TreatyStatus country={country} />
      </section>
    </div>
  );
}
