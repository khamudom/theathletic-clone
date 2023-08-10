import './globals.css';
import '../styles/fonts.css';
import type { Metadata } from 'next';
import { Navbar } from '../components';

export const metadata: Metadata = {
  title: 'The Athletic Clone',
  description: 'The Athletic prototype clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
