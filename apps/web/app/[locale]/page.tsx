import { HeroSection } from '@/components/home/HeroSection';
import { GroupOverview } from '@/components/home/GroupOverview';
import LatestNews from '@/components/home/LatestNews';
import PartnersBar from '@/components/home/PartnersBar';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection locale={locale} />
      <div id="about-group">
        <GroupOverview locale={locale} />
      </div>
      <LatestNews locale={locale} />
      <PartnersBar />
    </div>
  );
}
