import { PageHeader } from "@/components/shared/PageHeader";
import { GraduationCap, BookOpen, Users, PenTool, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Education Center | Learn | CSRTA",
    description: "Learn about environmental dumping, e-waste, and sustainability.",
  };
}

export default async function LearnPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Learn About Environmental Dumping"
        description="Education is our most powerful tool to end the illegal flow of hazardous waste and obsolete appliances into Africa."
      />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <Link href={`/${locale}/learn/students`} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Primary & Secondary Students</h2>
              <p className="text-slate-600 mb-6">
                Interactive learning materials, games, and quizzes to understand e-waste, recycling, and how to protect our environment.
              </p>
              <div className="flex items-center text-emerald-600 font-medium">
                Explore student resources <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href={`/${locale}/learn/universities`} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">University Students & Researchers</h2>
              <p className="text-slate-600 mb-6">
                Access datasets, research topics, thesis ideas, and academic partnership opportunities on environmental dumping policy.
              </p>
              <div className="flex items-center text-emerald-600 font-medium">
                Explore university resources <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href={`/${locale}/learn/teachers`} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Teachers & Educators</h2>
              <p className="text-slate-600 mb-6">
                Comprehensive lesson plans, classroom activities, and downloadable presentations aligned with national science curricula.
              </p>
              <div className="flex items-center text-emerald-600 font-medium">
                Explore teacher resources <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href={`/${locale}/learn/professionals`} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenTool className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Technical Professionals</h2>
              <p className="text-slate-600 mb-6">
                Specialized guides for RAC (Refrigeration & AC) technicians, including safe handling of natural refrigerants and certification pathways.
              </p>
              <div className="flex items-center text-emerald-600 font-medium">
                Explore technical resources <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}
