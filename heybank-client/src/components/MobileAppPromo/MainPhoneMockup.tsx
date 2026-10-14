import React from 'react';
import {
  Bell,
  Eye,
  Send,
  Plus,
  FileText,
  MoreHorizontal,
  Music,
  ShoppingBag,
  DollarSign,
  Coffee,
  Home,
  CreditCard,
  PieChart,
  User
} from 'lucide-react';

export const MainPhoneMockup: React.FC = () => {
  return (
    <div className="showcase-main-phone absolute top-[8%] sm:top-[10%] left-[22%] sm:left-[27%] lg:left-[28%] z-40">
      {/* Outer Transparent Glossy Protective Bumper Case */}
      <div className="relative w-[300px] sm:w-[335px] rounded-[52px] p-2.5 sm:p-3 bg-white/70 border-[2.5px] border-white/90 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35),inset_0_0_15px_rgba(255,255,255,0.8)] transition-all">

        {/* Glass Corner Bumper Accents */}
        <div className="absolute -top-1 -left-1 w-6 h-6 rounded-tl-[24px] border-t-2 border-l-2 border-white/90 pointer-events-none" />
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-tr-[24px] border-t-2 border-r-2 border-white/90 pointer-events-none" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-bl-[24px] border-b-2 border-l-2 border-white/90 pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-br-[24px] border-b-2 border-r-2 border-white/90 pointer-events-none" />

        {/* Metallic Hardware Buttons */}
        <div className="absolute -left-[4px] top-24 w-[3.5px] h-7 bg-neutral-300 rounded-l-xs shadow-xs" />
        <div className="absolute -left-[4px] top-36 w-[3.5px] h-11 bg-neutral-300 rounded-l-xs shadow-xs" />
        <div className="absolute -left-[4px] top-50 w-[3.5px] h-11 bg-neutral-300 rounded-l-xs shadow-xs" />
        <div className="absolute -right-[4px] top-32 w-[3.5px] h-14 bg-neutral-300 rounded-r-xs shadow-xs" />

        {/* Inner Smartphone Screen Frame */}
        <div className="w-full bg-[#FAFAFC] rounded-[42px] overflow-hidden border border-black/10 shadow-inner flex flex-col text-ink">

          {/* Status Bar & Dynamic Island */}
          <div className="pt-2.5 px-5 pb-1 flex items-center justify-between text-[11px] font-semibold text-neutral-800">
            <span className="font-mono text-[10px] font-bold">9:41</span>

            {/* Dynamic Island Pill */}
            <div className="h-5 w-24 bg-black rounded-full flex items-center justify-between px-2.5 shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#1c1c1e] border border-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
            </div>

            {/* Cellular, Wifi & Battery */}
            <div className="flex items-center gap-1 text-neutral-800">
              <div className="flex items-end gap-0.5 h-2.5">
                <div className="w-0.5 h-1 bg-neutral-800 rounded-xs" />
                <div className="w-0.5 h-1.5 bg-neutral-800 rounded-xs" />
                <div className="w-0.5 h-2 bg-neutral-800 rounded-xs" />
                <div className="w-0.5 h-2.5 bg-neutral-800 rounded-xs" />
              </div>
              <div className="w-4 h-2 rounded-xs border border-neutral-800 p-0.5 flex items-center ml-0.5">
                <div className="w-full h-full bg-neutral-800 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-2.5 pb-2 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-gray-500 font-medium leading-none">Good morning,</div>
              <div className="text-sm font-bold text-gray-900 leading-tight mt-0.5 flex items-center gap-1">
                Van An <span className="text-xs">👋</span>
              </div>
            </div>

            <button
              type="button"
              className="relative w-8 h-8 rounded-full bg-white border border-black/5 shadow-xs flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full" />
            </button>
          </div>

          {/* Primary Balance Widget (Deep Royal Blue Gradient Card) */}
          <div className="px-4 py-1.5">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#1E4E9E] via-[#163E82] to-[#0E2856] text-white shadow-lg relative overflow-hidden">
              {/* Ambient wave glow */}
              <div className="absolute -right-6 -top-6 w-28 h-28 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between text-blue-100 text-[10px] font-medium">
                <span>Total balance</span>
                <Eye className="w-3.5 h-3.5 text-blue-200 cursor-pointer hover:text-white" />
              </div>
              <div className="text-2xl sm:text-[26px] font-extrabold font-sans text-white tracking-tight mt-0.5">
                $12,842.75
              </div>

              <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                <span>▲ +2.5% compared to last month</span>
              </div>
            </div>
          </div>

          {/* 4 Circular Action Buttons */}
          <div className="px-4 py-2">
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="group cursor-pointer">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 -rotate-45 -mt-0.5 ml-0.5" />
                </div>
                <span className="text-[10px] text-gray-700 font-semibold mt-1 block">Transfer</span>
              </div>

              <div className="group cursor-pointer">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-gray-700 font-semibold mt-1 block">Top up</span>
              </div>

              <div className="group cursor-pointer">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-gray-700 font-semibold mt-1 block">Bill pay</span>
              </div>

              <div className="group cursor-pointer">
                <div className="w-10 h-10 mx-auto rounded-full bg-gray-100 text-gray-700 flex items-center justify-center shadow-2xs group-hover:bg-gray-200 transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-gray-700 font-semibold mt-1 block">More</span>
              </div>
            </div>
          </div>

          {/* Recent Transactions List */}
          <div className="px-4 pt-1 pb-2 space-y-1.5">
            <div className="flex items-center justify-between text-xs px-0.5">
              <span className="font-bold text-gray-900">Recent transactions</span>
              <span className="text-[11px] text-[#0066FF] font-semibold cursor-pointer hover:underline">See all</span>
            </div>

            <div className="space-y-1.5">
              {/* 1. Spotify */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 hover:bg-gray-50/80 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1DB954] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Music className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 leading-none">Spotify</div>
                    <div className="text-[9px] text-gray-400 mt-0.5">Entertainment</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono font-bold text-gray-900">-$9.99</div>
                  <div className="text-[9px] text-gray-400">Today, 10:24 AM</div>
                </div>
              </div>

              {/* 2. Amazon */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 hover:bg-gray-50/80 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#232F3E] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 leading-none">Amazon</div>
                    <div className="text-[9px] text-gray-400 mt-0.5">Shopping</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono font-bold text-gray-900">-$56.32</div>
                  <div className="text-[9px] text-gray-400">Yesterday, 4:12 PM</div>
                </div>
              </div>

              {/* 3. Salary */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 hover:bg-gray-50/80 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <DollarSign className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 leading-none">Salary</div>
                    <div className="text-[9px] text-emerald-600 font-medium mt-0.5">Income</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono font-bold text-emerald-600">+$2,500.00</div>
                  <div className="text-[9px] text-gray-400">Sep 1, 2025</div>
                </div>
              </div>

              {/* 4. Starbucks */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 hover:bg-gray-50/80 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#00704A] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Coffee className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 leading-none">Starbucks</div>
                    <div className="text-[9px] text-gray-400 mt-0.5">Food & Beverage</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono font-bold text-gray-900">-$5.68</div>
                  <div className="text-[9px] text-gray-400">Aug 31, 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="pt-2 pb-1 px-5 border-t border-gray-100 bg-white/95 flex items-center justify-between text-gray-400">
            <div className="flex flex-col items-center gap-0.5 text-[#0066FF] cursor-pointer">
              <Home className="w-4 h-4" />
              <span className="text-[9px] font-bold">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-600 cursor-pointer transition-colors">
              <CreditCard className="w-4 h-4" />
              <span className="text-[9px] font-medium">Cards</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-600 cursor-pointer transition-colors">
              <PieChart className="w-4 h-4" />
              <span className="text-[9px] font-medium">Analytics</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-600 cursor-pointer transition-colors">
              <User className="w-4 h-4" />
              <span className="text-[9px] font-medium">Profile</span>
            </div>
          </div>

          {/* Home Indicator Bar */}
          <div className="py-1.5 flex justify-center bg-white">
            <div className="w-24 h-1 bg-black/30 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
