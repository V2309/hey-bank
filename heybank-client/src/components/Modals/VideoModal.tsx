import React from 'react';
import { X, Play, Shield, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGetStarted: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenGetStarted }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative overflow-hidden animate-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-gray-400 hover:text-black transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#F43F5E] bg-[#FFE4E6] px-3 py-1 rounded-full">
            HEYBANK PRODUCT SHOWCASE
          </span>
          <h3 className="text-2xl font-extrabold text-[#111215] mt-2">
            The next generation of modern banking
          </h3>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#1E2024] to-[#0F1014] text-white p-6 aspect-video flex flex-col justify-between overflow-hidden shadow-inner mb-6">
          <div className="flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-pulse"></span>
              <span className="text-xs font-mono text-gray-300">01:42 / 03:00 • HD</span>
            </div>
            <span className="text-xs font-bold text-white/80">Heybank App Tour</span>
          </div>

          <div className="text-center space-y-3 z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer shadow-lg">
              <Play className="w-6 h-6 fill-current text-white ml-1" />
            </div>
            <p className="text-xs text-white/80 font-medium">Click to replay full platform walkthrough</p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 z-10">
            <span>Automated Savings • Zero Hidden Fees • Global Cards</span>
            <span>232K+ Active Users</span>
          </div>

          {/* Abstract background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/30 via-transparent to-[#F43F5E]/30 pointer-events-none" />
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-black/[0.04] text-center">
            <Zap className="w-4 h-4 text-[#F59E0B] mx-auto mb-1" />
            <div className="text-xs font-bold text-[#111215]">Instant Setup</div>
            <div className="text-[10px] text-gray-500">Under 3 mins</div>
          </div>
          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-black/[0.04] text-center">
            <Shield className="w-4 h-4 text-[#10B981] mx-auto mb-1" />
            <div className="text-xs font-bold text-[#111215]">FDIC Insured</div>
            <div className="text-[10px] text-gray-500">Up to $250K</div>
          </div>
          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-black/[0.04] text-center">
            <Sparkles className="w-4 h-4 text-[#6366F1] mx-auto mb-1" />
            <div className="text-xs font-bold text-[#111215]">4.85% APY</div>
            <div className="text-[10px] text-gray-500">High-Yield</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/3 py-3 rounded-full border border-black/15 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-black/5"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenGetStarted();
            }}
            className="w-2/3 py-3 rounded-full bg-[#111215] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            Get Started Now →
          </button>
        </div>

      </div>
    </div>
  );
};
