import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Documents & Reports | Accra-Helsinki Platform', description: 'Organizational resources.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Documents & Reports" description="Organizational resources." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Documents & Reports', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {['Annual Reports', 'Strategic Plans', 'Policy Briefs', 'Meeting Reports', 'Governance Documents'].map(d => (
        <div key={d} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
           <div className="bg-emerald-50 p-4 rounded-xl text-emerald-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
           </div>
           <div>
             <h3 className="font-bold text-emerald-900">{d}</h3>
             <p className="text-sm text-slate-500 mt-1">PDF &bull; Multiple Files</p>
           </div>
        </div>
      ))}
    </div></div>
    </main>
  );
}
