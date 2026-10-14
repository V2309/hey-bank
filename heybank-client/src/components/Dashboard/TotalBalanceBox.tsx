import React from 'react';
import { Plus } from 'lucide-react';
import { DoughnutChart } from './DoughnutChart';

interface TotalBalanceBoxProps {
  totalBalance: number;
  totalBanks: number;
  onAddBank: () => void;
}

export const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
  totalBalance = 2698.12,
  totalBanks = 2,
  onAddBank,
}) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
      {/* Doughnut Chart on Left */}
      <DoughnutChart size={115} percentage1={70} percentage2={30} />

      {/* Info on Right */}
      <div className="flex-1 w-full flex flex-col justify-between space-y-4">
        {/* Top row: Bank Accounts count + Add Bank link */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 tracking-tight">
            {totalBanks} Bank Accounts
          </h2>
          <button
            type="button"
            onClick={onAddBank}
            className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-blue-800 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add bank</span>
          </button>
        </div>

        {/* Bottom row: Total Current Balance */}
        <div className="space-y-1">
          <div className="text-xs text-gray-400 font-medium">
            Total Current Balance
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {formatCurrency(totalBalance)}
          </div>
        </div>
      </div>
    </div>
  );
};
