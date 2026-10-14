import React from 'react';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export const PromoPillars: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-2">
      <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-black/[0.05] shadow-2xs flex items-center gap-3.5 hover:bg-white transition-colors">
        <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-bold text-[#111215]">Sub-Second Transfers</div>
          <div className="text-xs text-gray-500">Zero latency global wires 24/7</div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-black/[0.05] shadow-2xs flex items-center gap-3.5 hover:bg-white transition-colors">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-bold text-[#111215]">Quantum Safe Security</div>
          <div className="text-xs text-gray-500">256-bit biometric FaceID lock</div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-black/[0.05] shadow-2xs flex items-center gap-3.5 hover:bg-white transition-colors">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-bold text-[#111215]">5.20% APY Smart Vault</div>
          <div className="text-xs text-gray-500">Auto-compound daily cash yields</div>
        </div>
      </div>
    </div>
  );
};
