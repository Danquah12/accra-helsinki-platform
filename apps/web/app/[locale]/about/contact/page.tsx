import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = { title: 'Contact Us | Accra-Helsinki Platform', description: 'Get in touch with CSRTA.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Contact Us" description="Get in touch with CSRTA." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-8">Our Offices</h2>
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
            <h3 className="font-bold text-xl text-emerald-900 mb-2">Primary Office (Accra, Ghana)</h3>
            <p className="text-slate-600">Energy Commission Building<br/>Accra, Ghana</p>
            <p className="text-amber-600 font-medium mt-4">info-gh@accra-helsinki.org</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
            <h3 className="font-bold text-xl text-emerald-900 mb-2">Partner Office (Helsinki, Finland)</h3>
            <p className="text-slate-600">Ministry of Environment<br/>Helsinki, Finland</p>
            <p className="text-amber-600 font-medium mt-4">info-fi@accra-helsinki.org</p>
          </div>
        </div>
      </div>
      <div><ContactForm /></div>
    </div></div>
    </main>
  );
}
