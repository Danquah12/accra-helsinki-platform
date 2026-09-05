import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'About Us | Accra-Helsinki Platform', description: 'Mission and structure of the Accra-Helsinki Platform.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="About Us" description="Mission and structure of the Accra-Helsinki Platform." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto text-center mb-12"><p className="text-xl text-slate-700">Dedicated to ending environmental dumping in Africa.</p></div>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[{path:'mission', title:'Mission & Vision'},{path:'history', title:'History'},{path:'leadership', title:'Leadership'},{path:'accra-helsinki', title:'Accra-Helsinki Initiative'},{path:'partners', title:'Partners'},{path:'advisory-board', title:'Advisory Board'},{path:'contact', title:'Contact'},{path:'documents', title:'Documents'}].map(l => (
         <Link key={l.path} href={`/${locale}/about/${l.path}`} className="bg-white p-6 rounded-2xl shadow border border-slate-200 hover:border-emerald-500 transition-all">
           <h3 className="font-bold text-emerald-900 text-lg mb-2">{l.title}</h3>
           <span className="text-amber-600 font-medium">Learn More &rarr;</span>
         </Link>
      ))}
    </div></div>
    </main>
  );
}
