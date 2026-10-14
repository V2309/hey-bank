import React from 'react';

interface AccountSummaryBannerProps {
  bankName?: string;
  accountType?: string;
  accountNumber?: string;
  balance?: number;
}

export const AccountSummaryBanner: React.FC<AccountSummaryBannerProps> = ({
  bankName = 'Chase',
  accountType = 'Chase Growth Savings Account',
  accountNumber = '•••• •••• •••• 9999',
  balance = 41382.80,
}) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);
  };

  return (
    <div className="rounded-2xl bg-brand-blue p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
      {/* Left Account Details */}
      <div className="space-y-2 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          {bankName}
        </h2>
        <p className="text-xs sm:text-sm text-white/90 font-medium">
          {accountType}
        </p>
        <div className="font-mono text-xs sm:text-sm tracking-[0.16em] text-white/80 pt-1">
          {accountNumber}
        </div>
      </div>

      {/* Right Balance Pill Card */}
      <div className="w-full sm:w-auto p-4 sm:px-6 sm:py-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xs text-left sm:text-right space-y-1 shrink-0 relative z-10">
        <div className="text-[11px] font-medium uppercase tracking-wider text-white/80">
          Current Balance
        </div>
        <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          {formatCurrency(balance)}
        </div>
      </div>
    </div>
  );
};
