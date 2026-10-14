import React, { useState } from 'react';
import { CreditCard, ChevronDown } from 'lucide-react';

interface TransactionHistoryHeaderProps {
  selectedAccount?: string;
  onSelectAccount?: (account: string) => void;
}

export const TransactionHistoryHeader: React.FC<TransactionHistoryHeaderProps> = ({
  selectedAccount = 'Chase Growth Savings',
  onSelectAccount,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const accounts = [
    'Chase Growth Savings',
    'Bank of America Checking',
    'First Platypus Vault',
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Title & Subtitle */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Transaction history
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 font-normal">
          Gain Insights and Track Your Transactions Over Time
        </p>
      </div>

      {/* Select Account Dropdown Button */}
      <div className="relative self-start sm:self-auto">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center gap-2.5 transition-all shadow-2xs cursor-pointer"
        >
          <CreditCard className="w-4 h-4 text-brand-blue" />
          <span>Select Account</span>
          <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-20 animate-in fade-in zoom-in-95">
            {accounts.map((acc) => (
              <button
                key={acc}
                type="button"
                onClick={() => {
                  onSelectAccount?.(acc);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer ${
                  selectedAccount === acc
                    ? 'bg-budget-blue-subtle text-brand-blue font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {acc}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
