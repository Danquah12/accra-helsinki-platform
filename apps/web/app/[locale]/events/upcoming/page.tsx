import { PageHeader } from "@/components/shared/PageHeader";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Upcoming Events | CSRTA",
    description: "Upcoming events on environmental dumping.",
  };
}

const upcomingEvents = [
  {
    id: 1,
    title: "MOP-37: 37th Meeting of the Parties to the Montreal Protocol",
    date: "October 14-18, 2026",
    location: "Kigali, Rwanda",
    type: "Conference",
    description: "International delegates convene to discuss the ongoing implementation of the Kigali Amendment, with a special focus on the African transition to natural refrigerants and the challenge of obsolete equipment dumping."
  },
  {
    id: 2,
    title: "CSRTA Annual Technical Workshop",
    date: "November 5-7, 2026",
    location: "Accra, Ghana",
    type: "Workshop",
    description: "A three-day technical intensive for environmental policymakers, customs officials, and recycling industry leaders to standardize inspection protocols across the ECOWAS region."
  },
  {
    id: 3,
    title: "RAC Technician Masterclass: R-290 Safety",
    date: "November 20, 2026",
    location: "Nairobi, Kenya",
    type: "Training",
    description: "Hands-on certification training for RAC technicians on the safe handling, recovery, and servicing of propane-based (R-290) air conditioning systems."
  },
  {
    id: 4,
    title: "E-Waste Policy Innovations Webinar",
    date: "December 2, 2026",
    location: "Virtual / Online",
    type: "Webinar",
    description: "An online panel featuring experts from the EU and African Union discussing the implementation of Extended Producer Responsibility (EPR) frameworks."
  },
];

export default async function UpcomingEventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Upcoming Events"
        description="Mark your calendar. Join global experts and local stakeholders in the fight against environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="md:w-1/4 flex flex-col justify-center items-center p-4 bg-emerald-50 rounded-lg text-emerald-900 border border-emerald-100">
                  <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-1">{event.type}</span>
                  <Calendar className="w-8 h-8 mb-2 text-emerald-600" />
                  <span className="font-bold text-center text-sm">{event.date}</span>
                </div>
                <div className="md:w-3/4 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{event.title}</h3>
                  <div className="flex items-center text-slate-500 mb-4 text-sm font-medium">
                    <MapPin className="w-4 h-4 mr-1" /> {event.location}
                  </div>
                  <p className="text-slate-600 mb-6">{event.description}</p>
                  <div>
                    <button className="text-amber-600 font-bold hover:text-amber-700 flex items-center transition-colors">
                      Register Interest <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
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
