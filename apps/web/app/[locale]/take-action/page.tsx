import { PageHeader } from "@/components/shared/PageHeader";
import { AlertTriangle, FileSignature, Megaphone, Users, Mail, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Take Action | CSRTA",
    description: "Join the movement against environmental dumping.",
  };
}

export default async function TakeActionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Take Action"
        description="Your voice and actions are critical in the fight against environmental dumping. Choose how you want to make an impact today."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={`/${locale}/take-action/report`} className="group bg-white p-8 rounded-2xl shadow-md border-2 border-red-100 hover:border-red-500 hover:shadow-lg transition-all lg:col-span-2 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Report Dumping</h3>
                <p className="text-slate-600 mb-4">
                  Have you witnessed illegal dumping of e-waste or obsolete appliances? Submit a secure, confidential report to our enforcement team.
                </p>
                <span className="text-red-600 font-bold flex items-center">File a Report <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>

            <Link href={`/${locale}/take-action/donate`} className="group bg-emerald-900 text-white p-8 rounded-2xl shadow-md border border-emerald-800 hover:bg-emerald-800 transition-colors flex flex-col justify-between">
              <div>
                <Heart className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Support Our Work</h3>
                <p className="text-emerald-100 mb-4 text-sm">Your donation funds technician training and port enforcement tools.</p>
              </div>
              <span className="text-amber-400 font-bold flex items-center mt-4">Donate Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></span>
            </Link>

            <Link href={`/${locale}/take-action/petitions`} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
              <FileSignature className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sign Petitions</h3>
              <p className="text-slate-600 text-sm mb-4">Add your name to open letters demanding stricter policy enforcement.</p>
              <span className="text-emerald-600 font-medium text-sm flex items-center">View Petitions <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>

            <Link href={`/${locale}/take-action/campaigns`} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
              <Megaphone className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Join Campaigns</h3>
              <p className="text-slate-600 text-sm mb-4">Participate in digital advocacy and local awareness drives.</p>
              <span className="text-emerald-600 font-medium text-sm flex items-center">See Campaigns <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>

            <Link href={`/${locale}/take-action/volunteer`} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
              <Users className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Volunteer</h3>
              <p className="text-slate-600 text-sm mb-4">Offer your skills in translation, research, or local organizing.</p>
              <span className="text-emerald-600 font-medium text-sm flex items-center">Sign Up <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
