import React, { useState } from 'react';
import { CreditCard, ChevronDown, MoreVertical } from 'lucide-react';

interface TransferDetailsFormProps {
  sourceBank: string;
  setSourceBank: (bank: string) => void;
  transferNote: string;
  setTransferNote: (note: string) => void;
}

export const TransferDetailsForm: React.FC<TransferDetailsFormProps> = ({
  sourceBank,
  setSourceBank,
  transferNote,
  setTransferNote,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const bankAccounts = [
    { id: 'chase', name: 'Chase Growth Savings', balance: '$41,382.80' },
    { id: 'bofa', name: 'Bank of America Checking', balance: '$12,450.00' },
    { id: 'platypus', name: 'First Platypus Treasury', balance: '$89,200.00' },
  ];

  return (
    <div className="space-y-6 pt-4 border-t border-gray-100">
      {/* Section Subheader */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight">
            Transfer details
          </h2>
          <p className="text-xs text-gray-500 font-normal">
            Enter the details of the recipient
          </p>
        </div>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Form Grid Rows */}
      <div className="space-y-6">
        {/* Row 1: Select Source Bank */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          <div className="lg:col-span-4 space-y-0.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800">
              Select Source Bank
            </label>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Select the bank account you want to transfer funds from
            </p>
          </div>

          <div className="lg:col-span-8 relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50/70 text-xs font-semibold text-gray-700 flex items-center justify-between transition-all shadow-2xs cursor-pointer text-left"
            >
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{sourceBank || 'Select Account'}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-20 animate-in fade-in">
                {bankAccounts.map((acc) => (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => {
                      setSourceBank(`${acc.name} (${acc.balance})`);
                      setDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-xs text-left hover:bg-budget-blue-subtle/50 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-gray-900">{acc.name}</span>
                    <span className="font-mono text-brand-blue font-bold">{acc.balance}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Transfer Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          <div className="lg:col-span-4 space-y-0.5">
            <label className="text-xs sm:text-sm font-bold text-gray-800">
              Transfer Note (Optional)
            </label>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Please provide any additional information or instructions related to the transfer
            </p>
          </div>

          <div className="lg:col-span-8">
            <textarea
              rows={4}
              value={transferNote}
              onChange={(e) => setTransferNote(e.target.value)}
              placeholder="Enter transfer instructions or personal note..."
              className="w-full p-4 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none shadow-2xs leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
