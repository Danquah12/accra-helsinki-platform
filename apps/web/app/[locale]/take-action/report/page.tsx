"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHeader } from "@/components/shared/PageHeader";
import { Upload, MapPin, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

const reportSchema = z.object({
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(20, "Please provide more details (minimum 20 characters)"),
  locationDesc: z.string().min(5, "Location description is required"),
  country: z.string().min(1, "Please select a country"),
  lat: z.string().optional(),
  lng: z.string().optional(),
  dateObserved: z.string().min(1, "Date is required"),
  quantity: z.string().optional(),
  reporterName: z.string().optional(),
  reporterEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  isAnonymous: z.boolean(),
});

type ReportFormValues = z.infer<typeof reportSchema>;

const COUNTRIES = [
  "Ghana", "Nigeria", "Kenya", "South Africa", "Senegal", 
  "Rwanda", "Uganda", "Tanzania", "Ethiopia", "Morocco"
];

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportNumber, setReportNumber] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ReportFormValues>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      isAnonymous: false,
    }
  });

  const isAnonymous = watch("isAnonymous");

  const onSubmit = async (data: ReportFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setReportNumber(`AH-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000) + 10000}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <PageHeader title="Report Submitted" description="Thank you for taking action." />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-200 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Report Successfully Received</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Your environmental dumping report has been securely transmitted to our enforcement monitoring team.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 inline-block mx-auto text-left">
                <span className="block text-sm text-slate-500 font-medium mb-1">Your Reference Number</span>
                <span className="block text-2xl font-bold text-slate-900 font-mono tracking-wider">{reportNumber}</span>
              </div>
              <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto">
                Please save this reference number. Our team will review the information provided and take appropriate action in coordination with local authorities.
              </p>
              <button 
                onClick={() => { setIsSuccess(false); setReportNumber(""); }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Submit Another Report
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Report Environmental Dumping"
        description="Help stop the illegal flow of hazardous e-waste and obsolete appliances by reporting suspected dumping incidents."
      />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10 flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-4 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-1">Confidentiality Assured</h3>
              <p className="text-amber-800/80 text-sm">
                Your report is completely confidential. Personal information is encrypted and only accessible to authorized CSRTA enforcement coordinators. You may also choose to remain completely anonymous.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-10">
              
              {/* SECTION: INCIDENT DETAILS */}
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Incident Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category of Dumped Material *</label>
                  <select 
                    {...register("category")}
                    className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none ${errors.category ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  >
                    <option value="">Select a category</option>
                    <option value="e-waste">Electronic Waste (Computers, Phones, Screens)</option>
                    <option value="appliances">Cooling Appliances (ACs, Refrigerators)</option>
                    <option value="refrigerants">Refrigerant Cylinders / Chemicals</option>
                    <option value="vehicles">End-of-life Vehicles / Parts</option>
                    <option value="textiles">Used Textiles / Fast Fashion</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Detailed Description *</label>
                  <textarea 
                    {...register("description")}
                    rows={4}
                    placeholder="Describe what you observed, condition of items, potential hazards..."
                    className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none ${errors.description ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Quantity</label>
                  <input 
                    type="text"
                    {...register("quantity")}
                    placeholder="e.g., 50 units, 2 shipping containers, 5 tons"
                    className="w-full rounded-lg border border-slate-300 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Date Observed *</label>
                  <input 
                    type="date"
                    {...register("dateObserved")}
                    className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none ${errors.dateObserved ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  />
                  {errors.dateObserved && <p className="text-red-500 text-sm mt-1">{errors.dateObserved.message}</p>}
                </div>
              </div>

              {/* SECTION: LOCATION */}
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6 mt-10">Location Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Country *</label>
                  <select 
                    {...register("country")}
                    className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none ${errors.country ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location Description *</label>
                  <input 
                    type="text"
                    {...register("locationDesc")}
                    placeholder="City, neighborhood, street, or landmark"
                    className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none ${errors.locationDesc ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  />
                  {errors.locationDesc && <p className="text-red-500 text-sm mt-1">{errors.locationDesc.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Map Pinpoint (Optional)</label>
                  <div className="w-full h-48 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500">
                    <MapPin className="w-8 h-8 mb-2" />
                    <p className="text-sm">Interactive map placeholder</p>
                    <p className="text-xs text-slate-400">Click to set exact coordinates</p>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <input type="text" {...register("lat")} placeholder="Latitude" className="w-1/2 text-sm border-slate-300 rounded p-2" readOnly />
                    <input type="text" {...register("lng")} placeholder="Longitude" className="w-1/2 text-sm border-slate-300 rounded p-2" readOnly />
                  </div>
                </div>
              </div>

              {/* SECTION: MEDIA */}
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6 mt-10">Photographic Evidence</h3>
              
              <div className="mb-10">
                <div className="w-full h-40 bg-slate-50 border-2 border-dashed border-emerald-300 rounded-xl flex flex-col items-center justify-center text-slate-600 hover:bg-emerald-50 hover:border-emerald-500 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-emerald-500 mb-3" />
                  <p className="font-medium text-slate-700">Drag & drop photos/videos here</p>
                  <p className="text-sm text-slate-500 mt-1">or click to browse files (Max 50MB total)</p>
                </div>
              </div>

              {/* SECTION: REPORTER INFO */}
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Reporter Information (Optional)</h3>
              
              <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    {...register("isAnonymous")}
                    className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-slate-700 font-medium">I wish to remain completely anonymous</span>
                </label>
              </div>

              {!isAnonymous && (
                <div className="grid md:grid-cols-2 gap-6 mb-10 opacity-100 transition-opacity">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text"
                      {...register("reporterName")}
                      className="w-full rounded-lg border border-slate-300 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email"
                      {...register("reporterEmail")}
                      className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none ${errors.reporterEmail ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                    />
                    {errors.reporterEmail && <p className="text-red-500 text-sm mt-1">{errors.reporterEmail.message}</p>}
                  </div>
                </div>
              )}

              <div className="border-t border-slate-200 pt-8 flex items-center justify-between">
                <p className="text-sm text-slate-500 max-w-xl">
                  By submitting this form, you verify that the information provided is accurate to the best of your knowledge.
                </p>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-200 transition-all flex items-center min-w-[200px] justify-center"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                  ) : (
                    'Submit Report'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
