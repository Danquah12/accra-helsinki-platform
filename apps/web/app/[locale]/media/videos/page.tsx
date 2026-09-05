import { PageHeader } from "@/components/shared/PageHeader";
import { Play } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Videos | Media | CSRTA",
    description: "Video library on environmental dumping and solutions.",
  };
}

const videos = [
  { id: 1, title: "How Agbogbloshie is Changing", duration: "12:04", category: "Field Report", year: "2024" },
  { id: 2, title: "Understanding R-290 Safely", duration: "08:15", category: "Training", year: "2024" },
  { id: 3, title: "The Border Enforcement Challenge", duration: "15:30", category: "Policy", year: "2023" },
  { id: 4, title: "What is the Kigali Amendment?", duration: "05:45", category: "Explainer", year: "2023" },
  { id: 5, title: "Solar E-Waste: The Next Crisis?", duration: "10:20", category: "Field Report", year: "2025" },
  { id: 6, title: "Interview with EU Policy Makers", duration: "22:10", category: "Interview", year: "2025" }
];

export default async function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Video Library"
        description="Explainer videos, field reports, and interviews documenting our progress."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <div key={video.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-emerald-600 relative z-10 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <span className="text-emerald-600">{video.category}</span>
                    <span>{video.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
