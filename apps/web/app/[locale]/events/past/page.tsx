import { PageHeader } from "@/components/shared/PageHeader";
import { MapPin, Calendar, FileText, ExternalLink } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Past Events | Accra-Helsinki Group",
    description: "Archive of past Montreal Protocol side events and meetings convened by the Accra-Helsinki Group.",
  };
}

const pastEvents = [
  {
    id: 1,
    title: "MOP-37 Side Event — Accra-Helsinki Group for Sustainable Cooling",
    date: "November 3, 2025",
    location: "Nairobi, Kenya &bull; 37th Meeting of the Parties",
    outcomes: "Focused on regulatory measures for sulfur hexafluoride (SF₆), phasing down super-pollutants under the Montreal Protocol, and actionable market solutions. Convened over 40 global participants, co-chaired by Kofi Agyarko & Tapio Reinikainen.",
    unepUrl: "https://ozone.unep.org/meetings/thirty-seventh-meeting-parties/side-events?arg_1=2025-11-03",
    unepText: "UNEP Official Side Events Schedule (Nov 3, 2025)"
  },
  {
    id: 2,
    title: "MOP-36 Inaugural Side Event — Founding of Accra-Helsinki Group",
    date: "November 2024",
    location: "Bangkok, Thailand &bull; 36th Meeting of the Parties",
    outcomes: "Formally inaugurated the Accra-Helsinki Group, establishing shared responsibility between Article 5 and Article 2 Parties to stop the dumping of inefficient cooling appliances with obsolete ODS & HFCs.",
    unepUrl: "https://ozone.unep.org/system/files/documents/History%20of%20Accra-Helsinki%20Group_Marco%20and%20Stephen.pdf",
    unepText: "UNEP Document: History of Accra-Helsinki Group"
  },
  {
    id: 3,
    title: "OEWG-46 Technical Side Event & Consultation",
    date: "July 2024",
    location: "Montreal, Canada &bull; 46th Open-ended Working Group",
    outcomes: "Initial high-level consultations exploring the establishment of the Group, tackling market dumping barriers, and tying energy efficiency to the Kigali Amendment.",
    unepUrl: "https://iifiir.org/en/news/live-from-oewg-meetings-what-is-accra-helsinki-roup",
    unepText: "IIR Report: Live from OEWG-46"
  }
];

export default async function PastEventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Past Events & Side Event Records"
        description="Review the proceedings, key discussions, and official UNEP documents from our previous sessions."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/4 p-6 bg-slate-900 text-white flex flex-col justify-center items-center text-center">
                  <Calendar className="w-8 h-8 text-amber-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-amber-300">{event.date}</span>
                </div>
                <div className="md:w-3/4 p-8">
                  <div className="flex items-center text-slate-500 mb-2 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span dangerouslySetInnerHTML={{ __html: event.location }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-4">
                    <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-1 flex items-center">
                      <FileText className="w-3.5 h-3.5 mr-1.5" /> Key Focus &amp; Outcomes
                    </h4>
                    <p className="text-emerald-900 text-xs sm:text-sm leading-relaxed">{event.outcomes}</p>
                  </div>
                  {event.unepUrl && (
                    <a
                      href={event.unepUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
                    >
                      <span>{event.unepText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
