import React from 'react';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-accent-subtle">
      {children || <Outlet />}
    </div>
  );
};

export default MainLayout;
