import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
import { GroupOverview } from '@/components/home/GroupOverview';

export const metadata: Metadata = { 
  title: 'About The Accra-Helsinki Group | Sustainable Cooling', 
  description: 'An informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol and preventing ozone depletion and climate tipping points.' 
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-950 text-white pb-20">
      <PageHeader 
        title="The Accra-Helsinki Group for Sustainable Cooling" 
        description="An informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol on Substances that Deplete the Ozone Layer, and preventing ozone depletion and climate tipping points." 
        breadcrumbs={[{ label: 'Home', href: `/${locale}` }, { label: 'About', href: `/${locale}/about` }, { label: 'Accra-Helsinki Group', href: '#' }]} 
      />
      <GroupOverview locale={locale} />
    </main>
  );
}
