import { getCountryBySlug } from '@/lib/data/countries';
import CountryHero from '@/components/country/CountryHero';
import CountryTabs from '@/components/country/CountryTabs';
import { notFound } from 'next/navigation';

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <CountryHero country={country} />
      <CountryTabs slug={slug} />
      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}
