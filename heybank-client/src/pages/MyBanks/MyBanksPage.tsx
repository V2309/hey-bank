import React from 'react';
import { MyBanksHeader } from '../../components/MyBanks/MyBanksHeader';
import { BankCardGrid } from '../../components/MyBanks/BankCardGrid';

export const MyBanksPage: React.FC = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto p-6 sm:p-10 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 1. Header */}
        <MyBanksHeader />

        {/* 2. Your Cards Grid */}
        <BankCardGrid />
      </div>
    </div>
  );
};

export default MyBanksPage;
