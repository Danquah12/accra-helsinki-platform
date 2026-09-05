"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHeader } from "@/components/shared/PageHeader";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  country: z.string().min(1, "Country is required"),
  interests: z.array(z.string()).min(1, "Select at least one area of interest"),
  skills: z.string().optional(),
  message: z.string().optional()
});

const INTERESTS = ["Research & Data", "Advocacy & Campaigns", "Education & Outreach", "Field Work", "Translation", "Administrative"];

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { interests: [] }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <PageHeader title="Application Received" description="Thank you for offering your time." />
        <main className="flex-1 py-16 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Welcome to the Team!</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Our volunteer coordinator will review your application and contact you within 5 business days with next steps.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Volunteer With Us"
        description="Lend your skills and passion to the fight against environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input {...register("name")} className="w-full border rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input type="email" {...register("email")} className="w-full border rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Country of Residence *</label>
                <input {...register("country")} className="w-full border rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Areas of Interest *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {INTERESTS.map(interest => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input type="checkbox" value={interest} {...register("interests")} className="rounded text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-slate-700">{interest}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && <p className="text-red-500 text-xs mt-2">{errors.interests.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Relevant Skills or Experience (Optional)</label>
                <textarea {...register("skills")} rows={3} className="w-full border rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Why do you want to volunteer with us? (Optional)</label>
                <textarea {...register("message")} rows={3} className="w-full border rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
