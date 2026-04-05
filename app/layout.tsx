import { DM_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google';

import { GoogleAnalytics } from './components/google-analytics/GoogleAnalytics.component';
import { PreloadResources } from './components/PreloadResources';
import { metadata as siteMetadata, viewport as siteViewport } from './config/metadata';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
        <GoogleAnalytics />
        <PreloadResources />
        {children}
      </body>
    </html>
  );
}
