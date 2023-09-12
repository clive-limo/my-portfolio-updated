import '@/styles/global.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { JobContextProvider } from '@/app/context/StateContext';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JobContextProvider>
      <html lang="en">
        <body className="bg-primaryDark">
          {children}
          <Analytics />{' '}
        </body>
      </html>
    </JobContextProvider>
  );
}
