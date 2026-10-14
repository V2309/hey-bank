import React from 'react';
import { TransactionHistoryHeader } from '../../components/TransactionHistory/TransactionHistoryHeader';
import { AccountSummaryBanner } from '../../components/TransactionHistory/AccountSummaryBanner';
import { TransactionHistoryTable } from '../../components/TransactionHistory/TransactionHistoryTable';
import { TransactionPagination } from '../../components/TransactionHistory/TransactionPagination';

export const TransactionHistoryPage: React.FC = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto p-6 sm:p-10 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 1. Header with Account Selector */}
        <TransactionHistoryHeader />

        {/* 2. Blue Account Details Banner Card */}
        <AccountSummaryBanner />

        {/* 3. Transaction History Table with Filter */}
        <TransactionHistoryTable />

        {/* 4. Pagination Controls */}
        <TransactionPagination />
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
