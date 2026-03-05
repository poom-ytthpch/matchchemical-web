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
  title: "MatchChemical - ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม | บริการสารเคมีคุณภาพสูง",
  description: "MatchChemical ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม ให้บริการด้านสารเคมีคุณภาพสูงและนวัตกรรมล่าสุดสำหรับธุรกิจของคุณ บริการวิเคราะห์ทางเคมี และแนวทางแก้ไขปัญหาทางอุตสาหกรรม",
  keywords: "สารเคมี,เคมีอุตสาหกรรม,บริการทางเคมี,วิเคราะห์ทางเคมี,โซลูชันเคมี,MatchChemical,industrial chemicals,chemical analysis,chemical solutions",
  authors: [{ name: "MatchChemical" }],
  creator: "MatchChemical",
  publisher: "MatchChemical",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://matchchemical.co"),
  alternates: {
    canonical: "/",
    languages: {
      "th": "/th",
      "en": "/en",
    },
  },
  openGraph: {
    title: "MatchChemical - ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม",
    description: "MatchChemical ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม ให้บริการด้านสารเคมีคุณภาพสูงและนวัตกรรมล่าสุดสำหรับธุรกิจของคุณ",
    url: "https://matchchemical.co",
    siteName: "MatchChemical",
    images: [
      {
        url: "/matchchemical_logo_removebg.png",
        width: 1200,
        height: 630,
        alt: "MatchChemical Logo",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MatchChemical - ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม",
    description: "MatchChemical ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม ให้บริการด้านสารเคมีคุณภาพสูง",
    images: ["/matchchemical_logo_removebg.png"],
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
    "@type": "Organization",
    "name": "MatchChemical",
    "url": "https://matchchemical.co",
    "logo": "https://matchchemical.co/matchchemical_logo_removebg.png",
    "description": "ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม ให้บริการด้านสารเคมีคุณภาพสูงและนวัตกรรมล่าสุดสำหรับธุรกิจของคุณ",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH",
      "addressLocality": "Bangkok"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Thai", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/matchchemical",
      "https://www.linkedin.com/company/matchchemical"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "บริการสารเคมี",
          "description": "จัดหาและจัดจำหน่ายสารเคมีคุณภาพสูงสำหรับอุตสาหกรรม"
        },
        {
          "@type": "Service", 
          "name": "บริการวิเคราะห์ทางเคมี",
          "description": "บริการทดสอบและวิเคราะห์คุณภาพสารเคมี"
        },
        {
          "@type": "Service",
          "name": "โซลูชันทางเคมี",
          "description": "แนวทางแก้ไขปัญหาทางเคมีสำหรับอุตสาหกรรม"
        }
      ]
    }
  };

  return (
    <html lang="th" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
