import { PageHeader } from "@/components/shared/PageHeader";
import { Video, Film, Newspaper, FileText, Image as ImageIcon, Briefcase, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Media Center | CSRTA",
    description: "Media resources, news, documentaries, and press kits.",
  };
}

export default async function MediaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const sections = [
    { title: "News & Updates", icon: Newspaper, href: "/media/news", desc: "Latest updates from the field, policy changes, and project milestones." },
    { title: "Documentaries", icon: Film, href: "/media/documentaries", desc: "In-depth investigative films exposing the reality of environmental dumping." },
    { title: "Video Library", icon: Video, href: "/media/videos", desc: "Interviews, explainer videos, and short features on our work." },
    { title: "Press Releases", icon: FileText, href: "/media/press-releases", desc: "Official announcements and statements for the press." },
    { title: "Photo Gallery", icon: ImageIcon, href: "/media/photos", desc: "High-resolution imagery of our initiatives across Africa." },
    { title: "Press Kit", icon: Briefcase, href: "/media/press-kit", desc: "Logos, brand guidelines, and background information for journalists." },
    { title: "Speeches", icon: Mic, href: "/media/speeches", desc: "Transcripts and recordings of key addresses by leadership." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Media Intelligence Center"
        description="Explore stories, news, and multimedia resources documenting the fight against environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map(section => (
              <Link key={section.title} href={`/${locale}${section.href}`} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm">{section.desc}</p>
                <div className="flex items-center text-emerald-600 font-medium text-sm">
                  View {section.title.toLowerCase()} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
