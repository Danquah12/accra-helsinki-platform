import { PageHeader } from "@/components/shared/PageHeader";
import { Calendar, MapPin, Users, ArrowRight, ExternalLink } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Upcoming Events | Accra-Helsinki Group",
    description: "Upcoming Montreal Protocol side events and conferences on sustainable cooling and stopping environmental dumping.",
  };
}

const upcomingEvents = [
  {
    id: 1,
    title: "Accra-Helsinki Group Side Event — Kigali",
    date: "2 November 2026 • 1:00 PM",
    location: "Kigali, Rwanda • Montreal Protocol Session",
    type: "UNEP Side Event",
    description: "Theme: “VSLS - a growing uncontrolled threat to the ozone layer”. The Accra-Helsinki Group convenes in Kigali to address Very Short-Lived Substances (VSLS) and uncontrolled chemical threats to ozone layer recovery and climate stabilization. Topics: TBD.",
    unepUrl: "https://ozone.unep.org/meetings/47th-meeting-open-ended-working-group-parties/side-events",
    unepText: "UNEP Ozone Secretariat Side Events Portal"
  },
  {
    id: 2,
    title: "MOP-38: 38th Meeting of the Parties to the Montreal Protocol",
    date: "Fall 2026",
    location: "UNEP Convened Session",
    type: "UNEP Conference",
    description: "International delegates and Montreal Protocol community convene on the Kigali Amendment implementation, non-chemical cooling solutions, and advancing shared responsibility across both exporting and importing nations."
  },
  {
    id: 3,
    title: "Accra-Helsinki Technical Strategy Working Session",
    date: "Late 2026",
    location: "Geneva / Virtual",
    type: "Working Group",
    description: "Informal closed-door technical and policy consultation under the Chatham House Rule, addressing short-lived and long-lived climate pollutants (SF₆) and refrigerant lifecycle stewardship."
  }
];

export default async function UpcomingEventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Upcoming Events & Side Events"
        description="Mark your calendar. Join the Montreal Protocol community and the Accra-Helsinki Group in advancing sustainable cooling."
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
                    {event.unepUrl ? (
                      <a 
                        href={event.unepUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm"
                      >
                        <span>{event.unepText}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href="mailto:info@accra-helsinki.org?subject=Inquiry on upcoming session"
                        className="text-amber-600 font-bold hover:text-amber-700 flex items-center transition-colors"
                      >
                        Inquire &bull; Suggest Topic <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    )}
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
