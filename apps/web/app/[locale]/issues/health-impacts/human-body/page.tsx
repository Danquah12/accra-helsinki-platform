import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
import { InteractiveBody } from './InteractiveBody';

export const metadata: Metadata = { title: 'Interactive Body Diagram | Accra-Helsinki Platform', description: 'Visualizing health impacts.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Interactive Body Diagram" description="Visualizing health impacts." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Interactive Body Diagram', href: '#' }]} />
      <div className="container mx-auto px-4 py-12"><InteractiveBody /></div>
    </main>
  );
}
