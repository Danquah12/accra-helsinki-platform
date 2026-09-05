'use client';

import dynamic from 'next/dynamic';
import { Map as MapIcon } from 'lucide-react';

const AfricaMap = dynamic(() => import('@/components/maps/AfricaMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 animate-pulse">
      <div className="flex flex-col items-center text-gray-400">
        <MapIcon className="w-12 h-12 mb-4 opacity-50" />
        <p className="font-medium text-lg">Loading Interactive Map...</p>
      </div>
    </div>
  ),
});

export default function MapClient() {
  return <AfricaMap />;
}
