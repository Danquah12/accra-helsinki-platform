import { HeroSection } from '@/components/home/HeroSection';
import { StatsBar } from '@/components/home/StatsBar';
import { GroupOverview } from '@/components/home/GroupOverview';
import { FeaturedIssues } from '@/components/home/FeaturedIssues';
import { CTASection } from '@/components/home/CTASection';
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
      <StatsBar />
      <div id="about-group">
        <GroupOverview locale={locale} />
      </div>
      <FeaturedIssues locale={locale} />
      <CTASection locale={locale} />
      <LatestNews locale={locale} />
      <PartnersBar />
    </div>
  );
}
