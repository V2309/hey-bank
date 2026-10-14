import React from 'react';
import { AppleLogo, GooglePlayLogo } from '../Icons/StoreLogos';

export const PromoHeader: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-8 border-b border-black/[0.06]">
      <div className="space-y-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] text-[#111215] text-[11px] font-mono font-bold tracking-wider uppercase shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
          <span>MOBILE APP EXPERIENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-[1.1]">
          Your bank, <span className="bg-gradient-to-r from-accent via-rose-500 to-blue-600 bg-clip-text text-transparent">in your pocket.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
          Experience next-generation mobile banking with instant transfers, intelligent spending analytics, and frictionless card management in real-time.
        </p>
      </div>

      {/* Store Download Buttons */}
      <div className="flex items-center gap-2.5">
        <a
          href="#download"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111215] text-white hover:bg-black transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
        >
          <AppleLogo className="w-4 h-4 fill-current shrink-0" />
          <div className="text-left leading-none">
            <div className="text-[8px] uppercase tracking-wider text-gray-300">App Store</div>
            <div className="text-xs font-bold font-sans mt-0.5">Download</div>
          </div>
        </a>
        <a
          href="#download"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111215] text-white hover:bg-black transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
        >
          <GooglePlayLogo className="w-4 h-4 shrink-0" colored={true} />
          <div className="text-left leading-none">
            <div className="text-[8px] uppercase tracking-wider text-gray-300">Google Play</div>
            <div className="text-xs font-bold font-sans mt-0.5">Get it on</div>
          </div>
        </a>
      </div>
    </div>
  );
};
