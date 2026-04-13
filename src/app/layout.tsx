import type { Metadata, Viewport } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const title = 'Cienfuegos Glass | Frameless Shower Doors Miami FL';
const description =
  'Custom frameless shower doors, glass enclosures & bathroom glass partitions in Miami. Licensed & insured. Free estimates. Call (786) 877-7405.';
const domain = 'https://cienfuegosglasscorp.com';
const locale = 'en_US';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(domain),
  alternates: {
    canonical: domain,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title,
    description,
    url: domain,
    siteName: 'Cienfuegos Glass',
    locale,
    type: 'website',
    images: [
      {
        url: `/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cienfuegos Glass - Premium Shower Glass Doors Miami',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/og-image.jpg`],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />

        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Cienfuegos Glass LLC',
              image: `${domain}/og-image.jpg`,
              description:
                'Premium shower glass doors, frameless enclosures, and bathroom glass partitions in Miami, FL',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '12831 SW 17th St',
                addressLocality: 'Miami',
                addressRegion: 'FL',
                postalCode: '33175',
                addressCountry: 'US',
              },
              telephone: '+1-786-877-7405',
              email: 'info@cienfuegosglass.com',
              url: domain,
              openingHours: [
                'Mo-Fr 08:00-17:00',
                'Sa 09:00-13:00',
              ],
              areaServed: {
                '@type': 'City',
                name: 'Miami-Dade County, FL',
              },
              priceRange: '$$',
              sameAs: [
                'https://www.facebook.com/cienfuegosglass',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
