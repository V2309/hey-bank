import React from 'react';

export const MyBanksHeader: React.FC = () => {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        My Bank Accounts
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 font-normal">
        Effortlessly Manage Your Banking Activities
      </p>
    </div>
  );
};
