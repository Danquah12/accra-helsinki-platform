import { PageHeader } from "@/components/shared/PageHeader";
import { RotateCcw, Package, Handshake, Leaf } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Circular Economy | Solutions | CSRTA",
    description: "Extended producer responsibility and circular economy models for Africa.",
  };
}

export default async function CircularEconomyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Circular Economy Models"
        description="Moving away from the linear 'take-make-dispose' model towards systemic solutions where materials are kept in use, and waste is designed out."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <RotateCcw className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Rethinking the Value Chain</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A circular economy in the context of electronics and cooling appliances in Africa means establishing systems where the end-of-life of a product is seamlessly managed without burdening the environment or local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <Package className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Extended Producer Responsibility (EPR)</h3>
              <p className="text-slate-600">
                Advocating for legislative frameworks that hold manufacturers and importers accountable for the entire lifecycle of their products, including funding the collection and sound recycling of end-of-life equipment. 
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <Handshake className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cooling as a Service (CaaS)</h3>
              <p className="text-slate-600">
                Promoting innovative business models where customers pay for the cooling service rather than owning the equipment. This incentivizes providers to install the most durable, highly efficient, and easily recyclable systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <RotateCcw className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Right to Repair</h3>
              <p className="text-slate-600">
                Supporting the local repair economy by advocating for designs that are modular, use standardized parts, and are accompanied by accessible service manuals, extending the useful life of appliances safely.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Eco-Design Standards</h3>
              <p className="text-slate-600">
                Pushing for product designs that facilitate easy dismantling and material recovery. Appliances should be designed with the end in mind, avoiding mixed plastics and hazardous additives that complicate recycling.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
