import React from 'react';
import { ArrowLeft, Plus, Lock, CreditCard, Settings } from 'lucide-react';

export const CardsPhoneMockup: React.FC = () => {
  return (
    <div className="showcase-cards-phone absolute top-[4%] sm:top-[6%] right-[6%] sm:right-[12%] lg:right-[15%] z-35">
      {/* Clear Bumper Frame for Horizontal Phone */}
      <div className="relative w-[280px] sm:w-[320px] rounded-[36px] p-2 bg-white/75 border-2 border-white/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),inset_0_0_12px_rgba(255,255,255,0.7)]">

        {/* Metallic Hardware Buttons */}
        <div className="absolute -top-[3px] left-20 w-8 h-[3px] bg-neutral-300 rounded-t-xs" />
        <div className="absolute -top-[3px] left-32 w-10 h-[3px] bg-neutral-300 rounded-t-xs" />

        {/* Inner Screen */}
        <div className="w-full bg-[#FAFAFC] rounded-[28px] overflow-hidden border border-black/10 shadow-inner p-3 text-ink">

          {/* Header: My Cards & Add Card */}
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
              <ArrowLeft className="w-3.5 h-3.5 text-gray-700" />
              <span>My Cards</span>
            </div>
            <button
              type="button"
              className="px-2.5 py-1 rounded-full bg-[#0066FF] text-white text-[9px] font-semibold flex items-center gap-1 shadow-2xs hover:bg-blue-700"
            >
              <Plus className="w-2.5 h-2.5" />
              <span>Add Card</span>
            </button>
          </div>

          {/* Card Preview Inside Phone */}
          <div className="mt-2.5 p-3 rounded-xl bg-gradient-to-br from-[#123F7E] via-[#0E2E5C] to-[#0A1E3C] text-white shadow-md relative overflow-hidden">
            <div className="flex items-start justify-between text-[8px] text-blue-200">
              <span>Total balance</span>
              <span className="font-extrabold italic text-xs text-white">VISA</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-widest text-white mt-1">
              •••• 4829
            </div>
            <div className="mt-2 text-[8px] font-medium text-blue-100 uppercase">
              Van An
            </div>
          </div>

          {/* Three Quick Card Action Buttons */}
          <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 flex flex-col items-center gap-1">
              <Lock className="w-3 h-3 text-gray-600" />
              <span className="text-[8px] font-medium text-gray-700">Lock Card</span>
            </div>
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 flex flex-col items-center gap-1">
              <CreditCard className="w-3 h-3 text-gray-600" />
              <span className="text-[8px] font-medium text-gray-700">Card Details</span>
            </div>
            <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 flex flex-col items-center gap-1">
              <Settings className="w-3 h-3 text-gray-600" />
              <span className="text-[8px] font-medium text-gray-700">Settings</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
