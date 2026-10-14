import React from 'react';
import { Check } from 'lucide-react';

/**
 * 1. Matte Black Premium Visa Card (Upper-Left)
 */
export const MatteBlackVisaCard: React.FC = () => {
  return (
    <div className="showcase-card-black absolute top-[16%] sm:top-[18%] left-[2%] sm:left-[6%] lg:left-[8%] z-30 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative w-[155px] sm:w-[175px] h-[98px] sm:h-[110px] rounded-2xl p-3.5 bg-gradient-to-tr from-[#0F1012] via-[#1A1C20] to-[#252830] text-white border border-white/20 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] overflow-hidden">
        {/* Subtle Wave Graphic on Card */}
        <div className="absolute -right-8 -bottom-8 w-28 h-28 border border-white/10 rounded-full pointer-events-none" />
        <div className="absolute -right-4 -bottom-4 w-28 h-28 border border-white/5 rounded-full pointer-events-none" />

        <div className="flex items-start justify-between">
          {/* Metallic EMV Chip */}
          <div className="w-6 h-5 rounded-md bg-gradient-to-br from-[#E2B755] via-[#C99C35] to-[#8C6418] border border-[#FDE68A]/60 flex items-center justify-center shadow-xs">
            <div className="w-4 h-3 border border-black/30 grid grid-cols-2 gap-0.5" />
          </div>

          {/* Contactless Waves */}
          <div className="flex items-center gap-0.5 text-white/70">
            <div className="w-1 h-3 border-r-2 border-white/60 rounded-r-full" />
            <div className="w-1.5 h-4 border-r-2 border-white/80 rounded-r-full" />
          </div>

          {/* Visa Logo */}
          <span className="font-extrabold italic tracking-tighter text-sm text-white font-sans">
            VISA
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/80 font-medium">
            Premium
          </span>
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-white/90" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 2. Silver Metallic Mastercard (Lower-Left)
 */
export const SilverMastercard: React.FC = () => {
  return (
    <div className="showcase-card-silver absolute bottom-[22%] sm:bottom-[24%] left-[1%] sm:left-[5%] lg:left-[7%] z-30 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative w-[165px] sm:w-[185px] h-[104px] sm:h-[116px] rounded-2xl p-3.5 bg-gradient-to-tr from-[#B0B7C3] via-[#E2E6EC] to-[#F8F9FA] text-[#111827] border border-white/90 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.9)] overflow-hidden">
        {/* Brushed Specular Diagonal Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform -rotate-45 pointer-events-none" />

        <div className="flex items-center justify-between">
          {/* Mastercard Interlocking Logo */}
          <div className="flex items-center -space-x-2">
            <div className="w-5 h-5 rounded-full bg-[#EB001B] shadow-xs" />
            <div className="w-5 h-5 rounded-full bg-[#FF5F00] opacity-90 shadow-xs" />
            <span className="ml-2.5 text-[9px] font-bold text-gray-600 tracking-tight">mastercard</span>
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-2">
          {/* Silver EMV Chip */}
          <div className="w-6 h-5 rounded-md bg-gradient-to-br from-[#E5E7EB] via-[#D1D5DB] to-[#9CA3AF] border border-white flex items-center justify-center shadow-2xs">
            <div className="w-3.5 h-2.5 border border-black/20" />
          </div>
          {/* Contactless waves */}
          <div className="w-1.5 h-3 border-r-2 border-gray-500 rounded-r-full" />
        </div>

        {/* Embossed Card Digits */}
        <div className="mt-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-700 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          5412 7512 3412 3456
        </div>

        {/* Cardholder Name & Expiry */}
        <div className="mt-1 flex items-center justify-between text-[9px] font-mono font-semibold text-gray-600 uppercase">
          <span>VAN AN</span>
          <span>12/28</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Deep Blue Visa Card (Upper-Right)
 */
export const DeepBlueVisaCard: React.FC = () => {
  return (
    <div className="showcase-card-blue absolute top-[18%] sm:top-[20%] right-[3%] sm:right-[6%] lg:right-[8%] z-30 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative w-[165px] sm:w-[185px] h-[104px] sm:h-[116px] rounded-2xl p-3.5 bg-gradient-to-tr from-[#0B254E] via-[#103D7E] to-[#1E62C8] text-white border border-white/30 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] overflow-hidden">
        {/* Cyan Ambient Light streak */}
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#00D2FF]/25 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-start justify-between">
          {/* Brand Crest */}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-emerald-400/80 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#0B254E] rounded-full" />
            </div>
            <span className="text-[9px] font-extrabold tracking-tight text-white/90">Vietcombank</span>
          </div>

          {/* Visa Logo */}
          <span className="font-extrabold italic tracking-tighter text-sm text-white font-sans">
            VISA
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {/* Gold EMV Chip */}
          <div className="w-6 h-5 rounded-md bg-gradient-to-br from-[#F5D061] via-[#DDA72F] to-[#996C10] border border-[#FDE68A]/60 flex items-center justify-center shadow-xs">
            <div className="w-3.5 h-2.5 border border-black/20" />
          </div>
          {/* Contactless waves */}
          <div className="w-1.5 h-3 border-r-2 border-white/70 rounded-r-full" />
        </div>

        <div className="mt-2 text-[9px] font-mono tracking-widest text-blue-100/90 font-medium">
          •••• 8920
        </div>
      </div>
    </div>
  );
};

/**
 * 4. Translucent Frosted Glass Card (Lower-Right)
 */
export const FrostedGlassCard: React.FC = () => {
  return (
    <div className="showcase-card-glass absolute bottom-[14%] sm:bottom-[16%] right-[2%] sm:right-[4%] lg:right-[6%] z-39 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative w-[160px] sm:w-[180px] h-[100px] sm:h-[114px] rounded-2xl p-3.5 bg-gradient-to-tr from-cyan-300/30 via-pink-300/30 to-purple-400/40 backdrop-blur-md text-[#111827] border border-white/60 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.8)] overflow-hidden">
        {/* Holographic Iridescent Sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-12 pointer-events-none" />

        <div className="flex items-start justify-between">
          <span className="text-sm font-extrabold tracking-tight text-white font-sans drop-shadow-xs">
            timo
          </span>
          <div className="w-1.5 h-3 border-r-2 border-white/80 rounded-r-full" />
        </div>

        <div className="mt-3 flex items-center gap-2">
          {/* Silver EMV Chip */}
          <div className="w-6 h-5 rounded-md bg-white/70 border border-white flex items-center justify-center shadow-xs">
            <div className="w-3.5 h-2.5 border border-black/15" />
          </div>
        </div>

        {/* Mastercard Intersecting Circles */}
        <div className="mt-2 flex justify-end">
          <div className="flex items-center -space-x-1.5">
            <div className="w-4 h-4 rounded-full bg-[#EB001B] shadow-xs" />
            <div className="w-4 h-4 rounded-full bg-[#FF5F00] shadow-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};
