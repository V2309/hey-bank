import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { DashboardSidebar } from '../components/Dashboard/DashboardSidebar';
import { UserProfile } from '../types';
import { useAuth } from '../context/AuthContext';

interface DashboardLayoutProps {
  user?: UserProfile;
  onLogout?: () => void;
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user: propUser,
  onLogout: propOnLogout,
  children,
}) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const user: UserProfile = propUser || auth.user || {
    name: 'Adrian Hajdin',
    email: 'adrian@jsmastery.pro',
    accountType: 'Everyday Personal Account',
    balance: 2698.12,
  };

  const handleLogout = () => {
    if (propOnLogout) {
      propOnLogout();
    } else {
      auth.logout();
      navigate('/login');
    }
  };

  return (
    <div className="h-screen h-[100dvh] w-full bg-dashboard-bg text-gray-900 flex overflow-hidden antialiased">
      {/* 1. Fixed Left Sidebar */}
      <DashboardSidebar
        user={user}
        onLogout={handleLogout}
      />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex min-w-0 h-full overflow-hidden">
        {children || <Outlet />}
      </div>
    </div>
  );
};

export default DashboardLayout;
