import React from 'react';
import { useScrollReveal } from '../utils/useScrollReveal';

export const TrustedBySection: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    selector: '.logo-item',
    stagger: 0.08,
    yOffset: 20,
    duration: 0.5,
  });

  return (
    <section className="py-4 sm:py-5 border-y border-black/[0.05] bg-canvas/80" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3.5">
          TRUSTED BY LEADING COMPANIES
        </p>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          
          {/* Microsoft */}
          <div className="logo-item flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all cursor-default group">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-[#F25022] group-hover:opacity-100 opacity-60 w-1.5 h-1.5 rounded-2xs"></div>
              <div className="bg-[#7FBA00] group-hover:opacity-100 opacity-60 w-1.5 h-1.5 rounded-2xs"></div>
              <div className="bg-[#00A4EF] group-hover:opacity-100 opacity-60 w-1.5 h-1.5 rounded-2xs"></div>
              <div className="bg-[#FFB900] group-hover:opacity-100 opacity-60 w-1.5 h-1.5 rounded-2xs"></div>
            </div>
            <span className="font-semibold text-lg text-gray-700 tracking-tight">Microsoft</span>
          </div>

          {/* Google */}
          <div className="logo-item flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default">
            <span className="font-bold text-xl tracking-tight text-gray-700">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </div>

          {/* Airbnb */}
          <div className="logo-item flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
            <svg className="w-5 h-5 text-[#FF5A5F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V17h-2v-.93c-2.31-.46-4-2.48-4-4.87 0-.55.45-1 1-1s1 .45 1 1c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.55.45-1 1-1s1 .45 1 1c0 2.39-1.69 4.41-4 4.87z" />
            </svg>
            <span className="font-bold text-lg text-gray-700 tracking-tight">airbnb</span>
          </div>

          {/* Amazon */}
          <div className="logo-item flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default">
            <span className="font-bold text-lg text-gray-700 tracking-tight font-sans">amazon</span>
            <span className="text-[#FF9900] text-sm -ml-0.5">smile</span>
          </div>

          {/* Spotify */}
          <div className="logo-item flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
            <div className="w-4 h-4 rounded-full bg-[#1DB954] flex items-center justify-center text-white text-[9px] font-bold">
              ((
            </div>
            <span className="font-bold text-lg text-gray-700 tracking-tight">Spotify</span>
          </div>

          {/* Uber */}
          <div className="logo-item flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default">
            <span className="font-extrabold text-xl text-gray-700 tracking-wider font-mono">Uber</span>
          </div>

        </div>
      </div>
    </section>
  );
};
