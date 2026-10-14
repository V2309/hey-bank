import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (profile: UserProfile) => void;
  logout: () => void;
  getStartedOpen: boolean;
  selectedPlan?: string;
  videoOpen: boolean;
  contactOpen: boolean;
  toastMessage: string | null;
  openGetStarted: (planName?: string) => void;
  closeGetStarted: () => void;
  openVideo: () => void;
  closeVideo: () => void;
  openContact: () => void;
  closeContact: () => void;
  showToast: (message: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('heybank_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [videoOpen, setVideoOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const login = (profile: UserProfile) => {
    setUser(profile);
    try {
      localStorage.setItem('heybank_user', JSON.stringify(profile));
    } catch {
      // ignore
    }
    showToast(`Welcome back, ${profile.name}! Secured session established.`);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('heybank_user');
    } catch {
      // ignore
    }
    showToast('You have been signed out safely.');
  };

  const openGetStarted = (planName?: string) => {
    setSelectedPlan(planName);
    setGetStartedOpen(true);
  };

  const closeGetStarted = () => setGetStartedOpen(false);
  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => setVideoOpen(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        getStartedOpen,
        selectedPlan,
        videoOpen,
        contactOpen,
        toastMessage,
        openGetStarted,
        closeGetStarted,
        openVideo,
        closeVideo,
        openContact,
        closeContact,
        showToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
