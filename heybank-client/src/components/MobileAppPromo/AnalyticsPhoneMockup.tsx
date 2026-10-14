import React from 'react';
import { Bell, Home, CreditCard, PieChart, User } from 'lucide-react';

export const AnalyticsPhoneMockup: React.FC = () => {
  return (
    <div className="showcase-analytics-phone absolute bottom-[4%] sm:bottom-[6%] right-[8%] sm:right-[12%] lg:right-[16%] z-38">
      {/* Clear Bumper Frame for Diagonal Analytics Phone */}
      <div className="relative w-[260px] sm:w-[290px] rounded-[48px] p-2 sm:p-2.5 bg-white/75 border-[2px] border-white/90 shadow-[0_28px_55px_-15px_rgba(0,0,0,0.32),inset_0_0_14px_rgba(255,255,255,0.7)]">

        {/* Inner Screen */}
        <div className="w-full bg-[#FAFAFC] rounded-[38px] overflow-hidden border border-black/10 shadow-inner p-3 sm:p-3.5 text-ink">

          {/* Status Bar */}
          <div className="flex items-center justify-between text-[9px] font-semibold text-gray-700 pb-1.5">
            <span className="font-mono">9:41</span>
            <div className="h-3.5 w-16 bg-black rounded-full" />
            <div className="w-3 h-1.5 border border-gray-700 rounded-2xs" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-extrabold text-gray-900">Spending</span>
            <Bell className="w-3 h-3 text-gray-500" />
          </div>

          {/* Period Tabs */}
          <div className="mt-2 flex items-center p-0.5 bg-gray-100 rounded-full text-[9px] font-semibold text-gray-500">
            <div className="flex-1 py-0.5 text-center">Week</div>
            <div className="flex-1 py-0.5 text-center bg-[#0066FF] text-white rounded-full shadow-2xs">Month</div>
            <div className="flex-1 py-0.5 text-center">Year</div>
          </div>

          {/* Amount & Trend */}
          <div className="mt-2 text-center">
            <div className="text-base sm:text-lg font-extrabold text-gray-900 font-sans tracking-tight leading-none">
              $3,482.20
            </div>
            <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">
              ▲ +12% vs last month
            </div>
          </div>

          {/* Donut Chart Visual */}
          <div className="mt-2 flex justify-center items-center relative">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              {/* Segment 1: Shopping (Cyan - 36%) */}
              <circle cx="18" cy="18" r="14" fill="transparent" stroke="#00C4DF" strokeWidth="4.5" strokeDasharray="36 64" strokeDashoffset="0" />
              {/* Segment 2: Food & Beverage (Purple - 25%) */}
              <circle cx="18" cy="18" r="14" fill="transparent" stroke="#8B5CF6" strokeWidth="4.5" strokeDasharray="25 75" strokeDashoffset="-36" />
              {/* Segment 3: Transport (Blue - 15%) */}
              <circle cx="18" cy="18" r="14" fill="transparent" stroke="#2563EB" strokeWidth="4.5" strokeDasharray="15 85" strokeDashoffset="-61" />
              {/* Segment 4: Entertainment (Orange - 10%) */}
              <circle cx="18" cy="18" r="14" fill="transparent" stroke="#F59E0B" strokeWidth="4.5" strokeDasharray="10 90" strokeDashoffset="-76" />
              {/* Segment 5: Others (Rose - 14%) */}
              <circle cx="18" cy="18" r="14" fill="transparent" stroke="#EC4899" strokeWidth="4.5" strokeDasharray="14 86" strokeDashoffset="-86" />
            </svg>
            <div className="absolute text-[8px] font-bold text-gray-700">
              Aug
            </div>
          </div>

          {/* Category Breakdown Table */}
          <div className="mt-2 space-y-1 text-[9px]">
            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C4DF]" />
                <span className="font-medium">Shopping</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="font-bold text-gray-900">$1,240.00</span>
                <span className="text-gray-400 text-[8px]">36%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                <span className="font-medium">Food & Beverage</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="font-bold text-gray-900">$886.30</span>
                <span className="text-gray-400 text-[8px]">25%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="font-medium">Transport</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="font-bold text-gray-900">$522.40</span>
                <span className="text-gray-400 text-[8px]">15%</span>
              </div>
            </div>
          </div>

          {/* Mini Bottom Nav */}
          <div className="mt-2.5 pt-1.5 border-t border-gray-100 flex items-center justify-around text-gray-400">
            <Home className="w-3 h-3" />
            <CreditCard className="w-3 h-3" />
            <PieChart className="w-3 h-3 text-[#0066FF]" />
            <User className="w-3 h-3" />
          </div>

        </div>
      </div>
    </div>
  );
};
