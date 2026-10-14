import React from 'react';

interface BankCardBannerProps {
  bankName?: string;
  balance?: number;
  accountType?: string;
}

export const BankCardBanner: React.FC<BankCardBannerProps> = ({
  bankName = 'Chase Bank',
  balance = 2588.12,
  accountType = 'savings',
}) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-slate-surface rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-gray-100">
      <div className="flex items-center gap-4">
        {/* Bank Circle Badge */}
        <div className="w-11 h-11 rounded-full bg-brand-blue text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
          {getInitials(bankName)}
        </div>

        {/* Bank Name & Balance */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 tracking-tight">
            {bankName}
          </h3>
          <div className="text-xs font-bold text-brand-blue mt-0.5">
            {formatCurrency(balance)}
          </div>
        </div>
      </div>

      {/* Account Type Pill Badge */}
      <span className="px-3 py-1 rounded-full bg-budget-green-subtle text-budget-green text-[11px] font-semibold tracking-wide border border-budget-green/20">
        {accountType}
      </span>
    </div>
  );
};
