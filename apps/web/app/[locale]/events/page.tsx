import { PageHeader } from "@/components/shared/PageHeader";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Events Hub | CSRTA",
    description: "Conferences, workshops, and training events related to environmental dumping.",
  };
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Events Hub"
        description="Join the conversation. Discover upcoming conferences, workshops, and webinars focused on combating environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <CalendarDays className="w-12 h-12 text-emerald-600 mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
              <p className="text-slate-600 mb-8">
                Register for our upcoming capacity-building workshops, international policy negotiations, and regional strategy meetings.
              </p>
              <Link href={`/${locale}/events/upcoming`} className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
                View Upcoming Events
              </Link>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <Clock className="w-12 h-12 text-slate-400 mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Past Events</h2>
              <p className="text-slate-600 mb-8">
                Access proceedings, outcome documents, and recordings from our previous conferences and training sessions.
              </p>
              <Link href={`/${locale}/events/past`} className="inline-flex items-center justify-center bg-white border-2 border-slate-200 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
                View Past Events
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
