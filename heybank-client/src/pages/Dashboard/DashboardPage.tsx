import React, { useState } from 'react';
import { DashboardHeader } from '../../components/Dashboard/DashboardHeader';
import { TotalBalanceBox } from '../../components/Dashboard/TotalBalanceBox';
import { RecentTransactions } from '../../components/Dashboard/RecentTransactions';
import { RightSidebar } from '../../components/Dashboard/RightSidebar';
import { UserProfile } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface DashboardPageProps {
  user?: UserProfile;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ user: propUser }) => {
  const auth = useAuth();
  const user = propUser || auth.user || {
    name: 'Adrian Hajdin',
    email: 'adrian@jsmastery.pro',
    accountType: 'Everyday Personal Account',
    balance: 2698.12,
  };

  const [totalBalance] = useState(user.balance || 2698.12);

  const handleAddBank = () => {
    alert('Connecting new Plaid / FDIC verified financial institution...');
  };

  const handleViewAllTransactions = () => {
    console.log('Viewing full transaction history...');
  };

  return (
    <div className="flex-1 flex min-w-0 h-full overflow-hidden">
      {/* Center Main Workspace (Scrollable Content) */}
      <main className="flex-1 h-full overflow-y-auto p-6 sm:p-10 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Greeting */}
          <DashboardHeader userName={user.name || 'Adrian'} />

          {/* Total Balance Card with Doughnut Chart */}
          <TotalBalanceBox
            totalBalance={totalBalance}
            totalBanks={2}
            onAddBank={handleAddBank}
          />

          {/* Recent Transactions Module */}
          <RecentTransactions
            onViewAll={handleViewAllTransactions}
          />
        </div>
      </main>

      {/* Right Profile & Budget Panel (Fixed Width with Independent Internal Scroll) */}
      <RightSidebar
        user={user}
        onAddBank={handleAddBank}
      />
    </div>
  );
};

export default DashboardPage;
