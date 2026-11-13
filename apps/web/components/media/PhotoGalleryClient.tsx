'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Maximize2,
  Filter,
  Camera,
  Layers,
  Award
} from 'lucide-react';

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  title: string;
  description: string;
  category: 'all' | 'presentations' | 'delegations' | 'panel';
  date: string;
  location: string;
  featured?: boolean;
}

export const mop38Photos: GalleryPhoto[] = [
  {
    id: 'mop38-01',
    src: '/images/gallery/mop38/mop38-kigali-group-photo.jpg',
    alt: 'Thirty-Eighth Meeting of the Parties to the Montreal Protocol (MOP 38) official group photo in Kigali, Rwanda',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Official High-Level Delegation & Participants at MOP 38',
    description: 'High-level group commemorative photograph of international delegates, Montreal Protocol leadership, UNEP Ozone Secretariat representatives, and Accra-Helsinki partners at the Thirty-Eighth Meeting of the Parties (MOP 38) celebrating the 10th anniversary of the Kigali Amendment (2016–2026).',
    category: 'delegations',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: true,
  },
  {
    id: 'mop38-02',
    src: '/images/gallery/mop38/mop38-kigali-handshake-banner.jpg',
    alt: 'Bilateral partnership handshake beside the Accra-Helsinki Group for Sustainable Cooling banner',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Reaffirming North-South Climate Partnership',
    description: 'Partnership handshake between Kofi Agyarko (Ghana delegation leader) and European climate leadership in front of the official Accra-Helsinki Group for Sustainable Cooling banner, cementing joint resolve to halt environmental dumping and advance climate-aligned cooling.',
    category: 'delegations',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: true,
  },
  {
    id: 'mop38-03',
    src: '/images/gallery/mop38/mop38-kigali-delegates-banner-group.jpg',
    alt: 'Accra-Helsinki Group delegation assembly at Kigali conference venue',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Accra-Helsinki Group Delegation Assembly',
    description: 'International delegation of environmental leaders, negotiators, and cooling policy champions gathered around the Accra-Helsinki Group for Sustainable Cooling banner at the side event in Kigali.',
    category: 'delegations',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-04',
    src: '/images/gallery/mop38/mop38-kigali-eu-vsls-presentation.jpg',
    alt: 'Tom Van Ierland from the European Commission presenting Regulating VSLS emissions in the EU',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Keynote: Regulating VSLS Emissions in the EU',
    description: 'Tom Van Ierland (European Commission) delivering a keynote presentation on European Union regulatory frameworks to monitor and curtail Very Short-Lived Substances (VSLS) emissions at the Accra-Helsinki Group side event.',
    category: 'presentations',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-05',
    src: '/images/gallery/mop38/mop38-kigali-presentation-vslss.jpg',
    alt: 'Scientific presentation on VSLSs versus Long-lived controlled ODSs from SAP Ozone Assessment Report',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Scientific Briefing: VSLSs vs. Long-Lived Controlled ODSs',
    description: 'Atmospheric science presentation illustrating tropospheric and stratospheric transport pathways for Very Short-Lived Substances compared to classic ozone-depleting substances, referenced from the SAP Ozone Assessment Report.',
    category: 'presentations',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-06',
    src: '/images/gallery/mop38/mop38-kigali-panel-discussion.jpg',
    alt: 'Panel discussion on Chlorinated very short-lived substances in the atmosphere: trends and significance',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Atmospheric Trends in Chlorinated VSLSs',
    description: 'Expert panel presentation highlighting atmospheric trends and the environmental significance of chlorinated VSLSs, drawing from NOAA monitoring and Scientific Assessment Panel (SAP) co-chair data.',
    category: 'panel',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-07',
    src: '/images/gallery/mop38/mop38-kigali-panel-speakers.jpg',
    alt: 'High-level panel speakers discussing policy alignment to eliminate environmental dumping',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'High-Level Panel on Stopping Environmental Dumping',
    description: 'Panel speakers including Kofi Agyarko addressing multilateral mechanisms to eliminate the export of obsolete, energy-inefficient cooling appliances to developing nations.',
    category: 'panel',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-08',
    src: '/images/gallery/mop38/mop38-kigali-side-event-hall.jpg',
    alt: 'Delegates and attendees gathered in the conference hall during the Accra-Helsinki side event',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Side Event Hall & Global Stakeholder Assembly',
    description: 'Wide view of the side event conference hall in Kigali, filled with Article 5 and non-Article 5 country delegates, scientists, NGO representatives, and industry leaders.',
    category: 'panel',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-09',
    src: '/images/gallery/mop38/mop38-kigali-delegates.jpg',
    alt: 'Delegates in consultation during the Kigali MOP 38 side event',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Policy Consultations at the Head Table',
    description: 'Delegates and co-organizers conferring during side event discussions on advancing sustainable cooling standards across international borders.',
    category: 'panel',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
  {
    id: 'mop38-10',
    src: '/images/gallery/mop38/mop38-kigali-leaders-selfie.jpg',
    alt: 'Accra-Helsinki Group organizers and leadership celebrating after the side event',
    caption: 'Accra-Helsinki side event at MOP 38, Kigali',
    title: 'Event Organizers & Climate Champions',
    description: 'Key organizers and leaders, including Kofi Agyarko, commemorating the successful convening and momentum generated at the MOP 38 side event in Kigali.',
    category: 'delegations',
    date: '2–6 November 2026',
    location: 'Kigali, Rwanda',
    featured: false,
  },
];

export default function PhotoGalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = mop38Photos.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  const handleOpenLightbox = (photoId: string) => {
    const index = mop38Photos.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setSelectedPhotoIndex(index);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => 
      prev === null ? 0 : (prev - 1 + mop38Photos.length) % mop38Photos.length
    );
  }, [selectedPhotoIndex]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => 
      prev === null ? 0 : (prev + 1) % mop38Photos.length
    );
  }, [selectedPhotoIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handlePrev, handleNext]);

  const currentPhoto = selectedPhotoIndex !== null ? mop38Photos[selectedPhotoIndex] : null;

  return (
    <div className="space-y-12">
      {/* Featured Event Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950 p-8 md:p-12 text-white shadow-2xl border border-emerald-500/20">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Special Collection • 10 Photos
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Accra-Helsinki side event at MOP 38, Kigali
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Photographic highlights from the Accra-Helsinki Group for Sustainable Cooling side event held during the 
              Thirty-Eighth Meeting of the Parties to the Montreal Protocol (MOP 38) in Kigali, Rwanda. Bringing together delegates, 
              atmospheric scientists, and policy pioneers to eliminate environmental dumping and advance energy-efficient cooling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-300 pt-2 border-t border-slate-700/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>2–6 November 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Kigali Convention Center, Rwanda</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>10th Anniversary Kigali Amendment (2016–2026)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Event Photos ({mop38Photos.length})
          </button>
          <button
            onClick={() => setActiveCategory('delegations')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'delegations'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Delegations & Partners (4)
          </button>
          <button
            onClick={() => setActiveCategory('presentations')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'presentations'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Keynote Presentations (2)
          </button>
          <button
            onClick={() => setActiveCategory('panel')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'panel'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Panel & Dialogues (4)
          </button>
        </div>

        <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 self-end sm:self-center">
          <Camera className="w-3.5 h-3.5 text-slate-400" />
          Showing {filteredPhotos.length} of {mop38Photos.length} high-res images
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handleOpenLightbox(photo.id)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              
              {/* Overlay with Quick View Icon */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-semibold backdrop-blur-sm shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-600" /> View Full Image
                </span>
              </div>

              {/* Caption pill over photo */}
              <div className="absolute top-3 left-3">
                <span className="inline-block rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-emerald-300 border border-emerald-400/30">
                  {photo.caption}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors mb-1.5 line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {photo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  {photo.location}
                </span>
                <span className="font-medium text-emerald-700 group-hover:underline">
                  View high-res →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Modal Card */}
          <div 
            className="relative flex flex-col max-w-5xl w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  {currentPhoto.caption}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  Photo {selectedPhotoIndex + 1} of {mop38Photos.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentPhoto.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  title="Download Photo"
                >
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href={currentPhoto.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  title="Open original high-res image"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCloseLightbox}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-200 hover:text-white transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Area with Previous / Next Controls */}
            <div className="relative flex-1 flex items-center justify-center bg-black min-h-[320px] max-h-[62vh] overflow-hidden">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                unoptimized
              />

              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-105"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-105"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-lg font-bold text-white">
                  {currentPhoto.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {currentPhoto.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {currentPhoto.location}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
