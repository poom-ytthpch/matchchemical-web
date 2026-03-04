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
  title: "MatchChemical - ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม",
  description:
    "MatchChemical ผู้นำด้านโซลูชันทางเคมีอุตสาหกรรม ให้บริการด้านสารเคมีคุณภาพสูงและนวัตกรรมล่าสุดสำหรับธุรกิจของคุณ",
  icons: {
    icon: "matchchemical_logo_removebg.png",
    apple: "matchchemical_logo_removebg.png",
    other: {
      rel: "icon",
      url: "matchchemical_logo_removebg.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
