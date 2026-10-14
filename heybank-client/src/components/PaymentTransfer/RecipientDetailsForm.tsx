import React from 'react';
import { MoreVertical } from 'lucide-react';

interface RecipientDetailsFormProps {
  email: string;
  setEmail: (val: string) => void;
  accountNumber: string;
  setAccountNumber: (val: string) => void;
  amount: string;
  setAmount: (val: string) => void;
}

export const RecipientDetailsForm: React.FC<RecipientDetailsFormProps> = ({
  email,
  setEmail,
  accountNumber,
  setAccountNumber,
  amount,
  setAmount,
}) => {
  return (
    <div className="space-y-6 pt-6 border-t border-gray-100">
      {/* Section Subheader */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight">
            Bank account details
          </h2>
          <p className="text-xs text-gray-500 font-normal">
            Enter the bank account details of the recipient
          </p>
        </div>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Inputs List */}
      <div className="space-y-5">
        {/* Row 1: Email */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <label className="text-xs sm:text-sm font-bold text-gray-800">
              Recipient's Email Address
            </label>
          </div>
          <div className="lg:col-span-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. recipient@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Row 2: Account Number */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <label className="text-xs sm:text-sm font-bold text-gray-800">
              Recipient's Bank Account Number
            </label>
          </div>
          <div className="lg:col-span-8">
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter the account number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all shadow-2xs font-mono"
            />
          </div>
        </div>

        {/* Row 3: Amount */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <label className="text-xs sm:text-sm font-bold text-gray-800">
              Amount
            </label>
          </div>
          <div className="lg:col-span-8">
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all shadow-2xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
