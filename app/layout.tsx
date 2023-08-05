import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components';
import { CardContextProvider } from '../context/CardContext';

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
        <CardContextProvider>{children}</CardContextProvider>
      </body>
    </html>
  );
}
