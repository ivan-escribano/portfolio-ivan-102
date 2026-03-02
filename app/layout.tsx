import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanescribano.com'),

  title: 'Ivan Escribano | AI & Software Engineer',
  description:
    'Portfolio of Ivan Escribano. AI & Software Engineer specializing in integrating AI models into real products, with experience in full-stack development and AI-powered applications.',
  applicationName: 'Ivan Escribano Portfolio',
  creator: 'Ivan Escribano',
  publisher: 'Ivan Escribano',
  authors: [{ name: 'Ivan Escribano', url: 'https://ivanescribano.com' }],

  alternates: { canonical: '/' },

  manifest: '/site.webmanifest',

  appleWebApp: {
    capable: true,
    title: 'Ivan Escribano',
    statusBarStyle: 'default',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/images/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  openGraph: {
    type: 'website',
    url: '/',
    title: 'Ivan Escribano | AI & Software Engineer',
    description:
      'Portfolio of Ivan Escribano. AI & Software Engineer specializing in integrating AI models into real products.',
    images: [
      {
        url: '/images/metadata/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ivan Escribano | AI & Software Engineer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Escribano | AI & Software Engineer',
    description:
      'Portfolio of Ivan Escribano. AI & Software Engineer specializing in integrating AI models into real products.',
    images: ['/images/metadata/og-image.png'],
    creator: '@IvanEscribano98',
  },

  robots: { index: true, follow: true },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  category: 'technology',
  keywords: [
    'Ivan Escribano',
    'AI Engineer',
    'Software Engineer',
    'AI',
    'LLMs',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Full-stack',
    'Applied AI',
    'Full stack engineer',
    'React',
    'Python',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
