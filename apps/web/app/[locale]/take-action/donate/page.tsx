"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Heart, Shield, GraduationCap, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Donate"
        description="Your support directly funds on-the-ground interventions against environmental dumping in Africa."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Impact Section */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Impact</h2>
              <p className="text-slate-600 mb-8 text-lg">Every contribution helps us build capacity, enforce borders, and educate the next generation.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">$50</h4>
                    <p className="text-slate-600 text-sm">Provides one customs officer with the training required to identify illegal shipments of banned refrigerants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">$150</h4>
                    <p className="text-slate-600 text-sm">Outfits one informal sector technician with basic safety gear for handling flammable refrigerants safely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">$500</h4>
                    <p className="text-slate-600 text-sm">Funds an entire classroom workshop on e-waste recycling and environmental protection for secondary students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-center">Choose Donation Amount</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[25, 50, 100, 250].map(val => (
                  <button 
                    key={val}
                    onClick={() => { setAmount(val); setCustomAmount(""); }}
                    className={`py-3 rounded-lg font-bold border-2 transition-colors ${amount === val ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'}`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">Custom Amount ($)</label>
                <input 
                  type="number" 
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                  placeholder="Enter amount" 
                  className="w-full border rounded-lg p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-lg" 
                />
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-colors flex justify-center items-center text-lg">
                Proceed to Payment <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4">Secure payment processing provided by Stripe. CSRTA is a registered non-profit organization.</p>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
