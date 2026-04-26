import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'zen+ TV | Premium IPTV Provider',
  description: 'Unlimited Entertainment. Zero Interruptions. Find Your Zen. Access 20,000+ live premium channels and a massive 100,000+ VOD library in crystal-clear 4K UHD.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased selection:bg-purple-electric/30 selection:text-cyan-neon suppressHydrationWarning">
        {children}
      </body>
    </html>
  );
}
