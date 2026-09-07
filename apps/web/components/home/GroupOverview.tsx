'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Globe2, 
  Calendar, 
  MapPin, 
  FileText, 
  ExternalLink, 
  Mail, 
  Send, 
  CheckCircle2, 
  BookmarkCheck, 
  ChevronRight, 
  ArrowRight, 
  Info,
  Maximize2,
  Download,
  X,
  Layers
} from 'lucide-react';
import AccraHelsinkiLogo from '@/components/shared/AccraHelsinkiLogo';

export function GroupOverview({ locale }: { locale: string }) {
  const [topicInput, setTopicInput] = useState('');
  const [submittedTopic, setSubmittedTopic] = useState(false);
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);

  const handleTopicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicInput.trim()) return;
    setSubmittedTopic(true);
    // Form mailto fallback
    window.location.href = `mailto:info@accra-helsinki.org?subject=Discussion%20Topic%20Suggestion%20for%20Accra-Helsinki%20Group&body=${encodeURIComponent(topicInput)}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" id="about-group">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/30 mb-6">
            <AccraHelsinkiLogo size="sm" showText={false} />
            <span className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider">
              Background &bull; Overview &bull; Meetings
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            The Accra-Helsinki Group <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-emerald-300 to-sky-300">
              for Sustainable Cooling
            </span>
          </h2>

          {/* Mandated Definition */}
          <div className="text-left bg-white/[0.04] border-l-4 border-amber-500 p-6 rounded-r-2xl border border-white/10 my-8 shadow-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 font-serif italic leading-relaxed">
              “An informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol on Substances that Deplete the Ozone Layer, and preventing ozone depletion and climate tipping points”
            </p>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div className="mb-16 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/80 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <BookmarkCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Official Mission
              </span>
              <p className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
                To advance a world of safe, efficient, and climate-friendly cooling and help prevent climate tipping points through strengthening the Montreal Protocol, ending environmental dumping, and accelerating the transition to sustainable cooling for all.
              </p>
            </div>
          </div>
        </div>

        {/* Background & Overview Write-Up Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Deep Dive Text (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-slate-200 text-base leading-relaxed bg-white/[0.02] p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
              <Info className="w-6 h-6 text-amber-400" />
              Background and Overview
            </h3>

            <p>
              The <strong>Accra-Helsinki Group was inaugurated in 2024</strong>. Like its predecessors, the <strong>Stockholm and Toronto Groups</strong>, the Group is an informal community of like-minded individuals and groups focused on strengthening the Montreal Protocol on Substances that Deplete the Ozone Layer and preventing ozone depletion and climate tipping points. Discussions center around current and future issues that may be addressed by the Montreal Protocol.
            </p>

            <p className="p-4 rounded-xl bg-white/[0.04] border-l-2 border-emerald-400 text-emerald-100 font-medium">
              Unlike its predecessors, the Accra-Helsinki Group is <strong>unique in fostering strong collaboration between Article 5 (developing) and Article 2 (developed) Parties</strong> to pursue the Group’s goals.
            </p>

            <p>
              The Group was initiated in response to concerns that inefficient cooling equipment using obsolete ozone-depleting substances (ODS) and hydrofluorocarbon (HFC) refrigerants is dumped into developing-country markets at prices so low that equipment necessary to avoid climate tipping points cannot compete for sales. In fact, in almost all of Africa and in many parts of Southeast Asia, energy-efficient cooling equipment with ozone- and climate-friendly refrigerants is not offered for sale.
            </p>

            <p>
              Fortunately, Parties to the Montreal Protocol have agreed that the solution to this issue must involve exporters and importers (i.e., a <strong>“shared responsibility”</strong>). For instance, the EU and the US took the first steps by creating regulations to control the export of equipment that does not qualify for domestic sale. The challenge of the Accra-Helsinki Group is to put forward practical solutions for making this market transition.
            </p>

            <p>
              Since that time, the Accra-Helsinki Group has expanded its focus to discuss other <strong>“unfinished business”</strong> of the Montreal Protocol by convening regular Side Events at Montreal Protocol meetings. This unfinished business is a critical part of the next decade of action for the Montreal Protocol—one of the world’s most successful treaties.
            </p>
          </div>

          {/* Right: Key Operating Facts & Co-Chairs (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Chatham House Rule & Format Card */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <ShieldCheck className="w-6 h-6" />
                <h4 className="text-lg font-bold text-white">Chatham House Rule</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                The <strong>Chatham House Rule</strong> governs the Group’s meetings to encourage discussion outside the negotiating context.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                The Group’s meetings are open to the Montreal Protocol community and are planned as <strong>Side Events at Open-ended Working Group (OEWG)</strong> meetings and <strong>Meetings of the Parties (MOPs)</strong>.
              </p>
            </div>

            {/* Co-Chairs & Contact */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-5">
              <div className="flex items-center gap-3 text-emerald-400">
                <Users className="w-6 h-6" />
                <h4 className="text-lg font-bold text-white">Group Leadership</h4>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-amber-500 pl-3">
                  <div className="font-bold text-white">Kofi Agyarko</div>
                  <div className="text-xs text-slate-400">Co-Chair &bull; Ghana (Former Director, Energy Commission)</div>
                </div>

                <div className="border-l-2 border-sky-500 pl-3">
                  <div className="font-bold text-white">Tapio Reinikainen</div>
                  <div className="text-xs text-slate-400">Co-Chair &bull; Finland (Senior Climate &amp; Environmental Expert)</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Official Inquiries &amp; Topic Suggestions
                </div>
                <a
                  href="mailto:info@accra-helsinki.org"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-mono text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@accra-helsinki.org
                </a>
              </div>
            </div>

            {/* Official Media & Reference Links */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Media Coverage &amp; Official Records
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <a
                    href="https://ozone.unep.org/system/files/documents/History%20of%20Accra-Helsinki%20Group_Marco%20and%20Stephen.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 underline"
                  >
                    <span>UNEP Document: History of Accra-Helsinki Group (Marco &amp; Stephen)</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gbcghanaonline.com/general/eu-greenhouse/2025/4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 underline"
                  >
                    <span>GBC Ghana Online: EU Greenhouse Gas Regulations &bull; Mabel Adorkor Annang</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.igsd.org/history-progress-stop-dumping-timeline/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 underline"
                  >
                    <span>IGSD: History &amp; Progress Stop Dumping Timeline</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://iifiir.org/en/news/live-from-oewg-meetings-what-is-accra-helsinki-roup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 underline"
                  >
                    <span>IIR News: Live from OEWG Meetings — What is Accra-Helsinki Group?</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BEYOND KIGALI — TRANSITION ROADMAP SLIDE (Bottom of Background & Overview) */}
        {/* ========================================================================= */}
        <div className="mb-20 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                Strategic Transition Framework
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Beyond Kigali — Accra-Helsinki Group for Truly Sustainable Cooling
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
                The comprehensive architectural roadmap: connecting demand reduction, non-chemical cooling, refrigerant transitions, and lifecycle management to prevent climate tipping points.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsSlideModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <Maximize2 size={16} />
                <span>Expand Fullscreen</span>
              </button>
              <a
                href="/images/beyond-kigali-framework.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <ExternalLink size={16} />
                <span>Open Original Slide</span>
              </a>
            </div>
          </div>

          {/* Slide Image Container with Interactive Zoom */}
          <div 
            onClick={() => setIsSlideModalOpen(true)}
            className="group relative rounded-2xl overflow-hidden border-2 border-white/15 bg-white p-2.5 sm:p-4 cursor-pointer shadow-2xl hover:border-amber-400/60 transition-all duration-300"
          >
            <img
              src="/images/beyond-kigali-framework.png"
              alt="Beyond Kigali - Accra-Helsinki Group for Truly Sustainable Cooling Framework Slide"
              className="w-full h-auto object-contain rounded-xl transform group-hover:scale-[1.008] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <div className="px-5 py-2.5 rounded-full bg-slate-900/90 border border-amber-400/50 text-amber-300 font-bold text-sm flex items-center gap-2 shadow-2xl">
                <Maximize2 size={18} />
                <span>Click to View Fullscreen Slide</span>
              </div>
            </div>
          </div>

          {/* 3 Structured Explanatory Columns for the Slide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                1. Demand-Side &amp; Non-Chemical
              </span>
              <h4 className="text-base font-bold text-white mb-2">Passive &amp; Refrigerant-Free First</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prioritizing building design, shading, insulation, and non-vapor-compression technologies to drastically lower the aggregate need for active mechanical cooling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                2. Chemical Evolution
              </span>
              <h4 className="text-base font-bold text-white mb-2">Safe Natural Alternatives</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transitioning beyond high-GWP HFCs to climate-friendly and chemically safe alternatives with zero ODP, ultra-low GWP, and no hazardous PFAS or TFA breakdown products.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 block">
                3. Systemic Outcomes
              </span>
              <h4 className="text-base font-bold text-white mb-2">Lifecycle &amp; Super-Pollutants</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lifecycle Refrigeration Management (LRM) coupled with Energy Efficiency MEPS to shrink halogenated feedstock demand, speed Kigali goals, and cut N₂O, SF₆, and PFCs.
              </p>
            </div>
          </div>

        </div>

        {/* Fullscreen Modal Lightbox for the Slide */}
        {isSlideModalOpen && (
          <div 
            className="fixed inset-0 z-[999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsSlideModalOpen(false)}
          >
            <div 
              className="relative max-w-6xl w-full bg-slate-900 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <AccraHelsinkiLogo size="sm" showText={false} />
                  <span className="font-bold text-sm sm:text-base text-white">
                    Beyond Kigali — Accra-Helsinki Group for Truly Sustainable Cooling
                  </span>
                </div>
                <button
                  onClick={() => setIsSlideModalOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-auto max-h-[80vh] flex items-center justify-center bg-white p-2 rounded-2xl">
                <img
                  src="/images/beyond-kigali-framework.png"
                  alt="Beyond Kigali Slide Fullscreen"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <a
                  href="/images/beyond-kigali-framework.png"
                  download="beyond-kigali-accra-helsinki-framework.png"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Download Slide</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Meeting Information Section */}
        <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-12">
          
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Montreal Protocol Community Calendar
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Meeting Information &amp; Side Events
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              The Group convenes regular Side Events at Open-ended Working Group (OEWG) and Meetings of the Parties (MOPs).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Upcoming Meeting Box (6 Columns) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-amber-500/10 via-white/[0.02] to-transparent p-7 rounded-2xl border border-amber-400/30 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  Upcoming Meeting
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">
                  Upcoming Side Event at OEWG / MOP
                </h4>
                
                <div className="space-y-2 text-sm text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Location &amp; Date:</strong> TBD / Nairobi &bull; Upcoming Montreal Protocol Session</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Topics to be discussed:</strong> Shared responsibility mechanisms, market transformation in Article 5 Parties, lifecycle refrigerant management, and SF₆ phase-down schedules.</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-xs text-slate-400">Documents &amp; presentations on UNEP website: <em>TBD prior to session convening</em></span>
                  </div>
                </div>
              </div>

              {/* Suggest a Topic Box */}
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 mt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  <Mail className="w-4 h-4" />
                  Suggest a Discussion Topic for Future Meetings
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Have a topic, policy challenge, or technical study relevant to the Montreal Protocol? Send your proposal directly to the Group:
                </p>
                <form onSubmit={handleTopicSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    placeholder="Enter discussion topic idea..."
                    className="flex-1 px-3.5 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <span>Suggest</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
                {submittedTopic && (
                  <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Opening your email client to send to info@accra-helsinki.org...
                  </p>
                )}
              </div>
            </div>

            {/* Past Meetings Box (6 Columns) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Past Meetings of the Group
              </div>

              {/* Meeting 1: MOP-37 Nairobi */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-white text-base">MOP-37 Side Event</span>
                  <span className="text-xs text-amber-400 font-mono">November 2025</span>
                </div>
                <div className="text-xs text-emerald-300 mb-2">Nairobi, Kenya &bull; 37th Meeting of the Parties</div>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  <strong>Topics discussed:</strong> Regulatory measures on sulfur hexafluoride (SF₆), phasing down super-pollutants under the Montreal Protocol, practical market solutions. Drew over 40 participants co-chaired by Kofi Agyarko &amp; Tapio Reinikainen.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://www.gbcghanaonline.com/general/eu-greenhouse/2025/4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 underline"
                  >
                    <span>Read GBC Ghana Coverage</span>
                    <ExternalLink size={11} />
                  </a>
                  <span className="text-slate-600">&bull;</span>
                  <a
                    href="https://ozone.unep.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-300 inline-flex items-center gap-1"
                  >
                    <span>UNEP Portal Record</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Meeting 2: MOP-36 Bangkok */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-white text-base">MOP-36 Inaugural Side Event</span>
                  <span className="text-xs text-amber-400 font-mono">November 2024</span>
                </div>
                <div className="text-xs text-emerald-300 mb-2">Bangkok, Thailand &bull; 36th Meeting of the Parties</div>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  <strong>Topics discussed:</strong> Formal inauguration of the Accra-Helsinki Group; establishing shared responsibility between Article 5 and Article 2 Parties; stopping the dumping of inefficient cooling appliances with obsolete ODS &amp; HFCs.
                </p>
                <a
                  href="https://ozone.unep.org/system/files/documents/History%20of%20Accra-Helsinki%20Group_Marco%20and%20Stephen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-xs inline-flex items-center gap-1 underline"
                >
                  <span>History of Accra-Helsinki Group by Marco &amp; Stephen (UNEP PDF)</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Meeting 3: OEWG-46 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-white text-base">OEWG-46 Technical Discussions</span>
                  <span className="text-xs text-amber-400 font-mono">July 2024</span>
                </div>
                <div className="text-xs text-emerald-300 mb-2">Montreal, Canada &bull; 46th Open-ended Working Group</div>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  <strong>Topics discussed:</strong> What is the Accra-Helsinki Group, addressing market barriers, energy efficiency with refrigerant transition, and non-F-gas alternatives.
                </p>
                <a
                  href="https://iifiir.org/en/news/live-from-oewg-meetings-what-is-accra-helsinki-roup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-xs inline-flex items-center gap-1 underline"
                >
                  <span>IIR/IIF Report: Live from OEWG Meetings</span>
                  <ExternalLink size={11} />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default GroupOverview;
