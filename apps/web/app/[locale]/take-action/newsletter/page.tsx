"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHeader } from "@/components/shared/PageHeader";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

export default function NewsletterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
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
        <PageHeader title="Subscribed!" description="Thank you for joining our network." />
        <main className="flex-1 py-16 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">You're on the list</h2>
          <p className="text-slate-600 mb-8">We've sent a welcome email to your inbox.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Newsletter Signup"
        description="Stay informed with the latest updates on policy, events, and campaigns against environmental dumping."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input {...register("name")} className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" {...register("email")} className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Topics of Interest (Select all that apply)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Research Updates', 'Policy Alerts', 'Campaigns', 'Events', 'Education'].map(topic => (
                    <label key={topic} className="flex items-center space-x-2">
                      <input type="checkbox" value={topic} {...register("interests")} className="rounded text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-slate-700">{topic}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && <p className="text-red-500 text-xs mt-2">{errors.interests.message as string}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Subscribe to Newsletter"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
