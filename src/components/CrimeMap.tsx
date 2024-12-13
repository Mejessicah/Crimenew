import React from 'react';
import { MapPin } from 'lucide-react';

export default function CrimeMap() {
  return (
    <div className="relative h-[400px] bg-slate-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-slate-500 flex flex-col items-center">
          <MapPin className="w-8 h-8 mb-2" />
          <p>Interactive map loading...</p>
        </div>
      </div>
    </div>
  );
}