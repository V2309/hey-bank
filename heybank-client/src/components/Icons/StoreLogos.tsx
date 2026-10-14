import React from 'react';

export const AppleLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 fill-current' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.94-.91.04-2.02.61-2.67 1.38-.57.66-1.07 1.76-.94 2.83 1.02.08 2.04-.5 2.67-1.27z" />
  </svg>
);

export const GooglePlayLogo: React.FC<{ className?: string; colored?: boolean }> = ({
  className = 'w-6 h-6',
  colored = true,
}) => {
  if (!colored) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.609 1.814L13.792 12 3.61 22.186c-.378-.344-.61-.83-.61-1.373V3.187c0-.543.232-1.03.61-1.373zM14.5 12.707l2.42 2.42-11.458 6.577L14.5 12.707zm0-1.414L5.462 2.296 16.92 8.873 14.5 11.293zm3.127 1.707l2.873-1.648a1.503 1.503 0 0 0 0-2.704l-2.873-1.648-1.707 1.707 1.707 3.293z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true">
      {/* 1. Green top triangular blade */}
      <path
        fill="#34A853"
        d="M260.6 256.4L51.8 465.2c5.9 6.3 14.3 10.2 23.6 10.2 6.1 0 11.8-1.7 16.7-4.6l239.5-137.9-71-76.5z"
      />
      {/* 2. Blue bottom triangular blade */}
      <path
        fill="#4285F4"
        d="M51.8 46.8l208.8 209.6 71-76.5L92.1 42c-4.9-2.9-10.6-4.6-16.7-4.6-9.3 0-17.7 3.9-23.6 10.2l.0-.8z"
      />
      {/* 3. Red back triangle */}
      <path
        fill="#EA4335"
        d="M51.8 46.8C43.5 55.7 38.4 67.9 38.4 81.3v349.4c0 13.4 5.1 25.6 13.4 34.5l208.8-208.8L51.8 46.8z"
      />
      {/* 4. Yellow right chevron tip */}
      <path
        fill="#FBBC04"
        d="M439.4 227.1L331.6 165l-71 76.5 71 76.5 107.8-62.1c11.5-6.6 19.2-18.9 19.2-32.9 0-14-7.7-26.3-19.2-32.9l0 3z"
      />
    </svg>
  );
};
