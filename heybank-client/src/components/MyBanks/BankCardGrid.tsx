import React from 'react';
import { MoreVertical } from 'lucide-react';
import { BankCardItem, BankCardData } from './BankCardItem';

interface BankCardGridProps {
  cards?: BankCardData[];
}

export const BankCardGrid: React.FC<BankCardGridProps> = ({ cards }) => {
  const defaultCards: BankCardData[] = [
    {
      id: 'card-1',
      bankName: 'Heybank Platinum',
      cardholder: 'ADRIAN HAJDIN',
      expiry: '06/24',
      cardNumber: '1234 1234 1234 1234',
      theme: 'blue',
      spending: 2840.40,
      spendingLimit: 4000.00,
    },
    {
      id: 'card-2',
      bankName: 'Bank of Australia',
      cardholder: 'ADRIAN HAJDIN',
      expiry: '06/24',
      cardNumber: '1234 1234 1234 1234',
      theme: 'blue',
      spending: 2840.40,
      spendingLimit: 4000.00,
    },
    {
      id: 'card-3',
      bankName: 'Bank of India',
      cardholder: 'ADRIAN HAJDIN',
      expiry: '06/24',
      cardNumber: '1234 1234 1234 1234',
      theme: 'blue',
      spending: 2840.40,
      spendingLimit: 4000.00,
    },
    {
      id: 'card-4',
      bankName: 'Bank of America',
      cardholder: 'OLIVIA RHYE',
      expiry: '06/24',
      cardNumber: '1234 1234 1234 1234',
      theme: 'purple',
      spending: 2840.40,
      spendingLimit: 4000.00,
    },
    {
      id: 'card-5',
      bankName: 'Bank of Canada',
      cardholder: 'OLIVIA RHYE',
      expiry: '06/24',
      cardNumber: '1234 1234 1234 1234',
      theme: 'purple',
      spending: 2840.40,
      spendingLimit: 4000.00,
    },
    {
      id: 'card-6',
      bankName: 'Bank of Pakistan',
      cardholder: 'OLIVIA RHYE',
      expiry: '06/24',
      cardNumber: '1234 1234 1234 1234',
      theme: 'purple',
      spending: 2840.40,
      spendingLimit: 4000.00,
    },
  ];

  const items = cards || defaultCards;

  return (
    <div className="space-y-6">
      {/* Section Subheader */}
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight">
          Your cards
        </h2>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {items.map((card) => (
          <BankCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
