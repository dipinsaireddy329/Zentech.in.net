import React from 'react';
import { AdminDashboard as MainAdminDashboard } from '../components/AdminDashboard';

interface AdminDashboardProps {
  onNavigate?: (route: string) => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const handleNav = onNavigate || ((route: string) => {
    window.history.pushState(null, '', route === 'home' ? '/' : `/${route}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  });

  return <MainAdminDashboard onNavigate={handleNav} />;
}

