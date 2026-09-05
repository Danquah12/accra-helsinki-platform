import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Leadership Team | Accra-Helsinki Platform', description: 'Meet the team behind CSRTA.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Leadership Team" description="Meet the team behind CSRTA." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Leadership Team', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {name: 'Kofi Agyarko', title: 'CEO', org: 'Former Director of RE & EE, Energy Commission of Ghana'},
        {name: 'Jane Doe', title: 'CTO', org: 'CSRTA'},
        {name: 'John Smith', title: 'Research Director', org: 'CSRTA'},
        {name: 'Sarah Lee', title: 'Policy Director', org: 'CSRTA'},
        {name: 'Michael Chen', title: 'Communications Director', org: 'CSRTA'}
      ].map(p => (
        <div key={p.name} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden text-center p-6 hover:shadow-md transition-shadow">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-800 rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">{p.name.split(' ').map(n=>n[0]).join('')}</div>
          <h3 className="text-xl font-bold text-emerald-900">{p.name}</h3>
          <p className="text-amber-600 font-medium my-1">{p.title}</p>
          <p className="text-sm text-slate-500">{p.org}</p>
        </div>
      ))}
    </div></div>
    </main>
  );
}
