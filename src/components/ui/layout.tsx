import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css'; // (if you use global styles)

export const metadata = {
  title: 'WebbyWolf',
  description: 'Your digital partner to elevate ideas 🚀',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
