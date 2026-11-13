import { PageHeader } from "@/components/shared/PageHeader";
import PhotoGalleryClient from "@/components/media/PhotoGalleryClient";

export async function generateMetadata() {
  return {
    title: "Photo Gallery | Accra-Helsinki Side Event at MOP 38, Kigali | Accra-Helsinki Group",
    description: "Visual documentation of the Accra-Helsinki side event at MOP 38 in Kigali, Rwanda and international initiatives for sustainable cooling.",
  };
}

export default async function PhotosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Photo Gallery"
        description="Visual documentation and official photography of the Accra-Helsinki Group initiatives, high-level diplomatic events, and field missions."
        breadcrumbs={[
          { label: "Home", href: `/${locale}` },
          { label: "Media Center", href: `/${locale}/media` },
          { label: "Photo Gallery", href: `/${locale}/media/photos` },
        ]}
      />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <PhotoGalleryClient />
        </div>
      </main>
    </div>
  );
}
