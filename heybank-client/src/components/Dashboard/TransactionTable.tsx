import React from 'react';

export interface DashboardTransaction {
  id: string;
  name: string;
  avatar?: string;
  avatarBg?: string;
  avatarText?: string;
  avatarIcon?: string;
  amount: number;
  type: 'debit' | 'credit';
  status: 'Processing' | 'Success' | 'Declined';
  date: string;
  category: string;
  categoryColor: 'blue' | 'green' | 'pink';
}

interface TransactionTableProps {
  transactions?: DashboardTransaction[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const defaultTransactions: DashboardTransaction[] = [
    {
      id: 'tx-1',
      name: 'Spotify',
      avatarIcon: 'spotify',
      amount: -15.00,
      type: 'debit',
      status: 'Processing',
      date: 'Wed 1:00pm',
      category: 'Subscriptions',
      categoryColor: 'blue',
    },
    {
      id: 'tx-2',
      name: 'Alexa Doe',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      amount: 88.00,
      type: 'credit',
      status: 'Success',
      date: 'Wed 2:45am',
      category: 'Deposit',
      categoryColor: 'green',
    },
    {
      id: 'tx-3',
      name: 'Figma',
      avatarIcon: 'figma',
      amount: -18.99,
      type: 'debit',
      status: 'Processing',
      date: 'Tue 6:10pm',
      category: 'Income',
      categoryColor: 'green',
    },
    {
      id: 'tx-4',
      name: 'Fresh F&V',
      avatarText: 'FV',
      avatarBg: '#F1F5F9',
      amount: -88.00,
      type: 'debit',
      status: 'Success',
      date: 'Tue 12:15pm',
      category: 'Groceries',
      categoryColor: 'blue',
    },
    {
      id: 'tx-5',
      name: 'Sam Sulek',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      amount: -40.20,
      type: 'debit',
      status: 'Declined',
      date: 'Tue 5:40am',
      category: 'Food',
      categoryColor: 'pink',
    },
  ];

  const items = transactions || defaultTransactions;

  const formatAmount = (amount: number) => {
    const formatted = Math.abs(amount).toFixed(2);
    return amount > 0 ? `+ $${formatted}` : `- $${formatted}`;
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Success') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs text-budget-green font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-budget-green" />
          <span>Success</span>
        </span>
      );
    }
    if (status === 'Declined') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs text-budget-pink font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-budget-pink" />
          <span>Declined</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
        <span>Processing</span>
      </span>
    );
  };

  const getCategoryBadge = (category: string, color: 'blue' | 'green' | 'pink') => {
    let classes = 'border-budget-blue text-budget-blue bg-budget-blue-subtle';
    if (color === 'green') {
      classes = 'border-budget-green text-budget-green bg-budget-green-subtle';
    } else if (color === 'pink') {
      classes = 'border-budget-pink text-budget-pink bg-budget-pink-subtle';
    }

    return (
      <span className={`inline-block px-3 py-0.5 rounded-full border text-[11px] font-semibold ${classes}`}>
        {category}
      </span>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            <th className="py-3 px-4 font-normal">Transaction</th>
            <th className="py-3 px-4 font-normal">Amount</th>
            <th className="py-3 px-4 font-normal">Status</th>
            <th className="py-3 px-4 font-normal">Date</th>
            <th className="py-3 px-4 font-normal text-right sm:text-left">Category</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 text-xs">
          {items.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50/60 transition-colors">
              {/* Transaction / Merchant Name */}
              <td className="py-3.5 px-4 flex items-center gap-3">
                {tx.avatarIcon === 'spotify' && (
                  <div className="w-8 h-8 rounded-full bg-[#1DB954] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.625.625 0 01-.86.207c-2.355-1.439-5.318-1.764-8.81-.966a.625.625 0 11-.277-1.22c3.818-.873 7.09-.5 9.74 1.12a.625.625 0 01.207.859zm1.225-2.723a.782.782 0 01-1.077.257c-2.695-1.656-6.804-2.135-9.99-1.168a.782.782 0 11-.453-1.498c3.633-1.103 8.18-.567 11.263 1.332a.782.782 0 01.257 1.077zm.105-2.835C14.686 8.94 9.36 8.762 6.275 9.7c-.496.15-1.025-.13-1.176-.626a.938.938 0 01.626-1.176c3.553-1.079 9.444-.87 13.15 1.33a.938.938 0 11-.96 1.638z" />
                    </svg>
                  </div>
                )}
                {tx.avatarIcon === 'figma' && (
                  <div className="w-8 h-8 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 2h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4H8V2zm0 8h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4H8v-8zm0 8h4a4 4 0 0 1 0 8 4 4 0 0 1-4-4v-4zm-4-8a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4zm0-8a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4z" />
                    </svg>
                  </div>
                )}
                {tx.avatar && (
                  <img
                    src={tx.avatar}
                    alt={tx.name}
                    className="w-8 h-8 rounded-full object-cover shrink-0 ring-1 ring-gray-100"
                  />
                )}
                {tx.avatarText && (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-gray-700 shrink-0 border border-gray-200"
                    style={{ backgroundColor: tx.avatarBg || '#F1F5F9' }}
                  >
                    {tx.avatarText}
                  </div>
                )}

                <span className="font-bold text-gray-900 truncate">{tx.name}</span>
              </td>

              {/* Amount */}
              <td className={`py-3.5 px-4 font-bold ${
                tx.amount > 0 ? 'text-budget-green' : 'text-gray-900'
              }`}>
                {formatAmount(tx.amount)}
              </td>

              {/* Status */}
              <td className="py-3.5 px-4 whitespace-nowrap">
                {getStatusBadge(tx.status)}
              </td>

              {/* Date */}
              <td className="py-3.5 px-4 text-gray-500 whitespace-nowrap">
                {tx.date}
              </td>

              {/* Category */}
              <td className="py-3.5 px-4 whitespace-nowrap text-right sm:text-left">
                {getCategoryBadge(tx.category, tx.categoryColor)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
