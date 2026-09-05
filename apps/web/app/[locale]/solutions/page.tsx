import { PageHeader } from "@/components/shared/PageHeader";
import { Recycle, Fan, Zap, ArrowRightLeft, ShieldCheck, Ship, RotateCcw, Activity } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Solutions Center | CSRTA Platform",
    description: "Explore practical solutions for combating environmental dumping in Africa.",
  };
}

const solutions = [
  {
    id: "recycling",
    title: "Recycling Systems",
    description: "State-of-the-art e-waste and appliance recycling infrastructure transforming waste into valuable commodities.",
    icon: Recycle,
    href: "/solutions/recycling",
  },
  {
    id: "clean-cooling",
    title: "Clean Cooling",
    description: "Promoting natural refrigerants and energy-efficient cooling technologies to reduce climate impact.",
    icon: Fan,
    href: "/solutions/clean-cooling",
  },
  {
    id: "standards",
    title: "Appliance Standards",
    description: "Implementing Minimum Energy Performance Standards (MEPS) to prevent the dumping of inefficient products.",
    icon: Zap,
    href: "/solutions/standards",
  },
  {
    id: "refrigerant-transition",
    title: "Refrigerant Transition",
    description: "Phasing out high-GWP HFCs and safely adopting natural, climate-friendly alternatives.",
    icon: ArrowRightLeft,
    href: "/solutions/refrigerant-transition",
  },
  {
    id: "technician-training",
    title: "Technician Training",
    description: "Building local capacity through comprehensive RAC (Refrigeration and Air Conditioning) technician certification.",
    icon: ShieldCheck,
    href: "/solutions/technician-training",
  },
  {
    id: "port-enforcement",
    title: "Port Enforcement",
    description: "Strengthening customs inspections and border control to intercept illegal shipments of obsolete equipment.",
    icon: Ship,
    href: "/solutions/port-enforcement",
  },
  {
    id: "circular-economy",
    title: "Circular Economy",
    description: "Fostering extended producer responsibility (EPR) and sustainable business models across the continent.",
    icon: RotateCcw,
    href: "/solutions/circular-economy",
  },
];

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Solutions That Work"
        description="Discover comprehensive strategies and technologies deployed across Africa to combat environmental dumping and promote sustainability."
      />
      
      <main className="flex-1 py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link 
                key={solution.id} 
                href={`/${locale}${solution.href}`}
                className="group flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md hover:border-emerald-600/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <solution.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 flex-1 leading-relaxed">{solution.description}</p>
                <div className="mt-6 flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                  Explore solution <Activity className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
