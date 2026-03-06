import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. | CHEMICAL FOR INDUSTRIAL SOLUTIONS",
  description: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. เป็นผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม จัดจำหน่ายสารเคมีคุณภาพสูง นำเข้าจากต่างประเทศ ให้บริการด้านสารเคมี วิเคราะห์ทางเคมี และแนวทางแก้ไขปัญหาทางอุตสาหกรรม พร้อมบริการที่มีประสิทธิภาพเพื่อความพึงพอใจสูงสุดของลูกค้า",
  keywords: "บริษัท แมทช์ เคมิคอล จำกัด,MATCH CHEMICAL CO., LTD.,MatchChemical,สารเคมี,เคมีอุตสาหกรรม,บริการทางเคมี,วิเคราะห์ทางเคมี,โซลูชันเคมี,industrial chemicals,chemical analysis,chemical solutions,chemical supplier",
  authors: [{ name: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD." }],
  creator: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD.",
  publisher: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD.",
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
    title: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. | CHEMICAL FOR INDUSTRIAL SOLUTIONS",
    description: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม จัดจำหน่ายสารเคมีคุณภาพสูง นำเข้าจากต่างประเทศ พร้อมบริการที่มีประสิทธิภาพ",
    url: "https://matchchemical.co",
    siteName: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. Logo",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. | CHEMICAL FOR INDUSTRIAL SOLUTIONS",
    description: "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม จัดจำหน่ายสารเคมีคุณภาพสูง",
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
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "บริษัท แมทช์ เคมิคอล จำกัด",
    "alternateName": "MATCH CHEMICAL CO., LTD.",
    "legalName": "บริษัท แมทช์ เคมิคอล จำกัด",
    "taxID": "0105563066966",
    "url": "https://matchchemical.co",
    "logo": "https://matchchemical.co/favicon-512.png",
    "description": "บริษัท แมทช์ เคมิคอล จำกัด MATCH CHEMICAL CO., LTD. เป็นผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม จัดจำหน่ายสารเคมีคุณภาพสูง นำเข้าจากต่างประเทศ ให้บริการด้านสารเคมี วิเคราะห์ทางเคมี และแนวทางแก้ไขปัญหาทางอุตสาหกรรม พร้อมบริการที่มีประสิทธิภาพเพื่อความพึงพอใจสูงสุดของลูกค้า",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "399/76 ถนนฉลองกรุง",
      "addressLocality": "แขวงลำปลาทิว เขตลาดกระบัง",
      "addressRegion": "กรุงเทพมหานคร",
      "postalCode": "10520",
      "addressCountry": "TH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Thai", "English"],
      "telephone": "+66-2-045-5568",
      "email": "matchchemical@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/matchchemical",
      "https://www.linkedin.com/company/matchchemical"
    ],
    "areaServed": "Thailand",
    "foundingDate": "2024",
    "businessType": "การค้าสารเคมีและอุปกรณ์ต่างๆใช้สำหรับบำบัดน้ำทุกชนิด การขายส่งเคมีภัณฑ์ทางอุตสาหกรรม",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "บริการทางเคมี",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "จัดจำหน่ายสารเคมี",
            "description": "จัดจำหน่ายสารเคมีคุณภาพสูง นำเข้าจากต่างประเทศสำหรับอุตสาหกรรม"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "บริการวิเคราะห์ทางเคมี",
            "description": "บริการทดสอบและวิเคราะห์คุณภาพสารเคมีด้วยห้องปฏิบัติการมาตรฐานสากล"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "โซลูชันทางเคมีอุตสาหกรรม",
            "description": "ให้คำปรึกษาและแนะนำโซลูชันทางเคมีที่เหมาะสมกับธุรกิจของคุณ"
          }
        }
      ]
    }
  };

  return (
    <html lang="th" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
