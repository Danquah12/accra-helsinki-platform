import { PageHeader } from "@/components/shared/PageHeader";
import { Recycle, CheckCircle, BarChart, MapPin } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Recycling Systems | Solutions | CSRTA",
    description: "E-waste recycling facilities and best practices in Africa.",
  };
}

export default async function RecyclingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Recycling Systems"
        description="Building state-of-the-art e-waste and appliance recycling infrastructure across Africa to transform hazardous waste into valuable commodities."
      />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="prose prose-emerald lg:prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge of E-Waste</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Millions of obsolete, near-end-of-life cooling appliances are dumped in African markets annually. Without proper infrastructure, informal processing methods release dangerous refrigerants into the atmosphere and toxic heavy metals into the soil and water systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Recycle className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Material Recovery</h3>
              <p className="text-slate-600">Efficient extraction of copper, aluminum, and steel from end-of-life appliances for local manufacturing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <BarChart className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Safe Degassing</h3>
              <p className="text-slate-600">Specialized equipment safely extracts and destroys or reclaims harmful HFC refrigerants and blowing agents.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Formalization</h3>
              <p className="text-slate-600">Integrating informal sector workers into safe, regulated, and profitable recycling value chains.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">Success Stories</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-emerald-900 p-8 flex flex-col justify-center text-white">
                <MapPin className="w-8 h-8 mb-4 text-emerald-400" />
                <h3 className="text-2xl font-bold mb-2">Agbogbloshie Transformation</h3>
                <p className="text-emerald-50">Accra, Ghana</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-slate-600 mb-4">
                  Once known as one of the world's largest digital dumps, the Agbogbloshie scrapyard is undergoing a massive transformation. The implementation of modern wire-stripping machines has reduced cable burning, protecting local air quality while improving copper yields for scrap dealers.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> 80% reduction in open burning incidents</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> 450 informal workers trained in safe handling</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Establishment of proper health and safety protocols</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-emerald-900 p-8 flex flex-col justify-center text-white">
                <MapPin className="w-8 h-8 mb-4 text-emerald-400" />
                <h3 className="text-2xl font-bold mb-2">WEEE Centre</h3>
                <p className="text-emerald-50">Nairobi, Kenya</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-slate-600 mb-4">
                  The Waste Electrical and Electronic Equipment (WEEE) Centre in Nairobi provides comprehensive recycling services, offering a blueprint for East Africa. It provides secure data destruction alongside environmentally sound e-waste management.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Over 10,000 tonnes of e-waste processed securely</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Solar-powered dismantling operations</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Expansion to regional hubs in Mombasa and Kisumu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
