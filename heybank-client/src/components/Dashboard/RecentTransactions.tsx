import React, { useState } from 'react';
import { BankCardBanner } from './BankCardBanner';
import { TransactionTable, DashboardTransaction } from './TransactionTable';

interface RecentTransactionsProps {
  transactions?: DashboardTransaction[];
  onViewAll?: () => void;
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
  onViewAll,
}) => {
  const [selectedBankTab, setSelectedBankTab] = useState('chase');

  const bankTabs = [
    { id: 'chase', label: 'Chase Bank', balance: 2588.12, type: 'savings' },
    { id: 'boa', label: 'Bank of America', balance: 1420.50, type: 'checking' },
    { id: 'platypus', label: 'First Platypus Bank', balance: 890.00, type: 'savings' },
  ];

  const currentBank = bankTabs.find((b) => b.id === selectedBankTab) || bankTabs[0];

  return (
    <div className="space-y-6">
      {/* Header with View All Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
          Recent transactions
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
        >
          View all
        </button>
      </div>

      {/* Bank Tabs Bar */}
      <div className="flex items-center gap-6 border-b border-gray-100 text-xs font-semibold overflow-x-auto pb-0.5">
        {bankTabs.map((tab) => {
          const isActive = selectedBankTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedBankTab(tab.id)}
              className={`pb-3.5 whitespace-nowrap transition-all cursor-pointer relative ${
                isActive
                  ? 'text-brand-blue font-bold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Bank Banner */}
      <BankCardBanner
        bankName={currentBank.label}
        balance={currentBank.balance}
        accountType={currentBank.type}
      />

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
};
