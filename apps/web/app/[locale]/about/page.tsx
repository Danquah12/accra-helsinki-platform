import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { 
  title: 'Leadership & Partners | Accra-Helsinki Group', 
  description: 'Leadership, co-chairs, international partners, and governance of the Accra-Helsinki Group for Sustainable Cooling.' 
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader 
        title="Leadership & Partners" 
        description="Co-chairs, participating international partners, advisory experts, and governance of the Accra-Helsinki Group." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Leadership & Partners', href: '#' }]} 
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-slate-700 leading-relaxed">
            An informal community of like-minded individuals and groups fostering shared responsibility between Article 5 (developing) and Article 2 (developed) Parties to prevent climate tipping points.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { path: 'leadership', title: 'Co-Chairs & Leadership', desc: 'Led by Kofi Agyarko (Ghana) and Tapio Reinikainen (Finland).' },
            { path: 'partners', title: 'International Partners', desc: 'Collaborating international organizations, secretariats, and research institutions.' },
            { path: 'history', title: 'History & Lineage', desc: 'The historic lineage and precedent from the Stockholm and Toronto Groups.' },
            { path: 'advisory-board', title: 'Advisory Board & Experts', desc: 'Senior climate, legal, and refrigeration engineering technical specialists.' },
            { path: 'documents', title: 'Official Documents & Records', desc: 'UNEP meeting documents, slide decks, presentations, and side event transcripts.' },
            { path: 'contact', title: 'Official Inquiries & Contact', desc: 'Direct communications with group conveners: info@accra-helsinki.org.' }
          ].map(l => (
            <Link 
              key={l.path} 
              href={`/${locale}/about/${l.path}`} 
              className="bg-white p-7 rounded-2xl shadow-xs border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-emerald-950 text-lg mb-2 group-hover:text-emerald-700 transition-colors">{l.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{l.desc}</p>
              </div>
              <span className="text-amber-600 font-semibold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                View Details &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
