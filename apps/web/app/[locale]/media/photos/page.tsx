import { PageHeader } from "@/components/shared/PageHeader";
import { Image as ImageIcon } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Photo Gallery | Media | CSRTA",
    description: "High-resolution imagery of our initiatives.",
  };
}

export default async function PhotosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Photo Gallery"
        description="Visual documentation of the environmental dumping challenge and our on-the-ground solutions."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <div key={i} className={`bg-slate-200 rounded-xl overflow-hidden relative group break-inside-avoid ${i % 3 === 0 ? 'aspect-square' : (i % 2 === 0 ? 'aspect-video' : 'aspect-[3/4]')}`}>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <ImageIcon className="w-8 h-8 opacity-50" />
                </div>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white font-medium text-sm">Field Activity Documentation</p>
                  <p className="text-slate-300 text-xs">Accra, Ghana</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
