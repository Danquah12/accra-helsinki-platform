import { PageHeader } from "@/components/shared/PageHeader";
import { MapPin, Calendar, FileText } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Past Events | CSRTA",
    description: "Archive of past events on environmental dumping.",
  };
}

const pastEvents = [
  {
    id: 1,
    title: "Africa Clean Cooling Summit 2025",
    date: "June 10-12, 2025",
    location: "Dakar, Senegal",
    outcomes: "Resulted in the Dakar Declaration on Sustainable Cooling, committing 12 nations to fast-track MEPS integration.",
    image: "bg-slate-200"
  },
  {
    id: 2,
    title: "E-Waste Circularity Forum",
    date: "March 15, 2025",
    location: "Lagos, Nigeria",
    outcomes: "Launched the pan-African EPR working group and published the 2025 E-waste baseline report.",
    image: "bg-slate-200"
  },
  {
    id: 3,
    title: "Joint Customs Operations Training",
    date: "January 20-24, 2025",
    location: "Mombasa, Kenya",
    outcomes: "Trained 45 port officials from East Africa on identifying counterfeit refrigerants using multi-gas analyzers.",
    image: "bg-slate-200"
  }
];

export default async function PastEventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Past Events & Outcomes"
        description="Review the proceedings, key decisions, and outcomes from our previous engagements."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                <div className={`md:w-1/3 h-48 md:h-auto ${event.image} flex items-center justify-center text-slate-400 border-r border-slate-200`}>
                  [Photo Placeholder]
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-emerald-600 flex items-center"><Calendar className="w-4 h-4 mr-1" /> {event.date}</span>
                    <span className="text-sm font-medium text-slate-500 flex items-center"><MapPin className="w-4 h-4 mr-1" /> {event.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{event.title}</h3>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-1 flex items-center"><FileText className="w-4 h-4 mr-2" /> Key Outcomes</h4>
                    <p className="text-emerald-800 text-sm">{event.outcomes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
