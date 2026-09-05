'use client';

import { useState } from 'react';
import treatiesData from '../../../../lib/data/treaties.json';
import { Flag, Shield, Book, FileText, ChevronRight, ChevronLeft } from 'lucide-react';

export default function TimelinePage() {
  // Flatten and sort timeline events
  const allEvents = treatiesData.flatMap(treaty => 
    treaty.timelineEvents.map(event => ({
      ...event,
      treatyId: treaty.id,
      treatyName: treaty.name
    }))
  ).sort((a, b) => parseInt(a.date) - parseInt(b.date));

  const getTreatyColor = (id: string) => {
    switch (id) {
      case 'montreal-protocol': return 'bg-blue-500';
      case 'basel-convention': return 'bg-emerald-500';
      case 'bamako-convention': return 'bg-amber-500';
      case 'kigali-amendment': return 'bg-purple-500';
      default: return 'bg-slate-500';
    }
  };

  const getTreatyIcon = (id: string) => {
    switch (id) {
      case 'montreal-protocol': return <Book className="w-5 h-5 text-white" />;
      case 'basel-convention': return <Shield className="w-5 h-5 text-white" />;
      case 'bamako-convention': return <Flag className="w-5 h-5 text-white" />;
      case 'kigali-amendment': return <FileText className="w-5 h-5 text-white" />;
      default: return <Book className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Treaty Timeline</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            The historical evolution of international environmental agreements shaping policy across Africa.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {treatiesData.map(t => (
              <div key={t.id} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium">
                <div className={`w-3 h-3 rounded-full ${getTreatyColor(t.id)}`}></div>
                {t.name}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-slate-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {allEvents.map((event, idx) => (
              <div key={idx} className={`flex items-center w-full ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                
                <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative group">
                    <span className="text-3xl font-black text-slate-200 absolute -top-4 right-4 group-hover:text-emerald-100 transition-colors z-0">
                      {event.date}
                    </span>
                    <div className="relative z-10">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{event.treatyName}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                      <p className="text-slate-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[50%] transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-20 ${getTreatyColor(event.treatyId)}`}>
                    {getTreatyIcon(event.treatyId)}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
