import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-peach/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-rose/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center mx-auto text-ink shadow-sm">
          <Compass className="w-8 h-8 text-accent animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-ink-subtle">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Page not found
          </h1>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            The page or route you requested does not exist or has been relocated within the Heybank network.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-full border border-black/15 bg-white text-xs font-bold uppercase tracking-wider text-ink hover:bg-gray-50 transition-all cursor-pointer shadow-2xs"
          >
            <span className="flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              Go Back
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2.5 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
