import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Design & Development | SA Telecoms",
  description:
    "SA Telecoms builds modern, high-performance websites and platforms that convert visitors, scale businesses, and look incredible.",
  keywords: [
    "website design",
    "web development",
    "SA Telecoms",
    "landing pages",
    "e-commerce",
    "WordPress",
    "payment integration",
    "South Africa",
  ],
  authors: [{ name: "SA Telecoms" }],
  creator: "SA Telecoms",
  metadataBase: new URL("https://satelecoms.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://satelecoms.co.za",
    siteName: "SA Telecoms",
    title: "Website Design & Development | SA Telecoms",
    description:
      "Modern, high-performance websites and digital platforms that convert visitors, scale businesses, and look incredible.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SA Telecoms – Website Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development | SA Telecoms",
    description:
      "Modern, high-performance websites and digital platforms that convert visitors, scale businesses, and look incredible.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SA Telecoms",
    url: "https://satelecoms.co.za",
    description:
      "SA Telecoms builds modern, high-performance websites and platforms that convert visitors, scale businesses, and look incredible.",
    areaServed: "ZA",
    serviceType: [
      "Website Design",
      "Web Development",
      "E-commerce Development",
      "Landing Page Creation",
      "WordPress Installation",
      "Payment Gateway Integration",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-neon-cyan focus:text-background focus:font-semibold focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
