import React from 'react';

export const LoginTrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2.5 pt-1">
      <div className="py-2.5 px-2 rounded-2xl bg-white border border-black/[0.06] shadow-2xs text-center">
        <div className="text-[11.5px] font-extrabold text-ink">$0 Transfers</div>
        <div className="text-[10px] text-ink-subtle font-medium">Instant 24/7</div>
      </div>
      <div className="py-2.5 px-2 rounded-2xl bg-white border border-black/[0.06] shadow-2xs text-center">
        <div className="text-[11.5px] font-extrabold text-ink">FDIC Insured</div>
        <div className="text-[10px] text-ink-subtle font-medium">Up to $250,000</div>
      </div>
      <div className="py-2.5 px-2 rounded-2xl bg-white border border-black/[0.06] shadow-2xs text-center">
        <div className="text-[11.5px] font-extrabold text-ink">3% Cashback</div>
        <div className="text-[10px] text-ink-subtle font-medium">On all purchases</div>
      </div>
    </div>
  );
};
