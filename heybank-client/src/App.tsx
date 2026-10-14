import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { router } from './routes';
import { GetStartedModal } from './components/Modals/GetStartedModal';
import { VideoModal } from './components/Modals/VideoModal';
import { ContactModal } from './components/Modals/ContactModal';
import { CheckCircle2 } from 'lucide-react';

function AppModalsAndToasts() {
  const {
    getStartedOpen,
    closeGetStarted,
    selectedPlan,
    videoOpen,
    closeVideo,
    openGetStarted,
    contactOpen,
    closeContact,
    toastMessage,
  } = useAuth();

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-semibold animate-in slide-in-from-bottom-5 border border-white/10">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Interactive Modals */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={closeGetStarted}
        initialPlan={selectedPlan}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={closeVideo}
        onOpenGetStarted={() => openGetStarted()}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={closeContact}
      />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <AppModalsAndToasts />
    </AuthProvider>
  );
}
