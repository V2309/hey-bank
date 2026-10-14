import React from 'react';

interface DashboardHeaderProps {
  userName: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  const firstName = userName ? userName.split(' ')[0] : 'Adrian';

  return (
    <div className="space-y-1">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        Welcome, <span className="text-brand-blue">{firstName}</span>
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 font-normal">
        Access & manage your account and transactions efficiently.
      </p>
    </div>
  );
};
