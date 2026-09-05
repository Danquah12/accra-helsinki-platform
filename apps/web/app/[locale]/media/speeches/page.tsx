import { PageHeader } from "@/components/shared/PageHeader";
import { Mic, Calendar, User } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Speeches | Media | CSRTA",
    description: "Speeches and interviews archive.",
  };
}

const speeches = [
  {
    id: 1,
    title: "The Urgency of MEPS in Combating Dumping",
    speaker: "Dr. Kwame Osei",
    role: "Director, CSRTA Africa",
    event: "COP 29, Baku",
    date: "November 14, 2024",
    excerpt: "We cannot allow our continent to remain the final resting place for equipment that the rest of the world has deemed too inefficient or toxic to use."
  },
  {
    id: 2,
    title: "Financing the Transition to Natural Refrigerants",
    speaker: "Amina Ndour",
    role: "Policy Lead",
    event: "Africa Climate Summit",
    date: "September 5, 2024",
    excerpt: "The upfront cost of high-efficiency, natural refrigerant cooling systems must be mitigated through innovative financial mechanisms and international support."
  },
  {
    id: 3,
    title: "Strengthening Border Defenses Against E-Waste",
    speaker: "Col. Thomas Mensah",
    role: "Head of Customs Enforcement",
    event: "WCO Regional Conference",
    date: "May 22, 2024",
    excerpt: "Without intelligence-led targeting, identifying illegal e-waste shipments amidst millions of containers is like finding a needle in a haystack."
  }
];

export default async function SpeechesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Speeches & Interviews"
        description="Transcripts, audio, and video recordings of key addresses by our leadership and partners."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            {speeches.map(speech => (
              <div key={speech.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-4">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {speech.date}</span>
                  <span className="flex items-center"><Mic className="w-4 h-4 mr-1" /> {speech.event}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{speech.title}</h2>
                <div className="flex items-center text-emerald-700 font-medium mb-6">
                  <User className="w-4 h-4 mr-2" /> {speech.speaker}, <span className="text-slate-500 font-normal ml-1">{speech.role}</span>
                </div>
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-700 mb-6 text-lg">
                  "{speech.excerpt}"
                </blockquote>
                <div className="flex gap-4">
                  <button className="text-emerald-600 font-bold hover:text-emerald-700 text-sm">Read Transcript</button>
                  <button className="text-emerald-600 font-bold hover:text-emerald-700 text-sm">Watch Video</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
