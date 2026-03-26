import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "./components/layout";
import "./globals.css";


const NeueHaasDisplayMedium = localFont({
  src: [
    {
      path: "/fonts/NeueHaasDisplayMediu-65.ttf",
      weight: "600",
    },
  ],
  variable: "--font-nhdm-600",
});

const NeueHaasDisplayRoman = localFont({
  src: [
    {
      path: "/fonts/NeueHaasDisplayRoman-55.ttf",
      weight: "500",
    },
  ],
  variable: "--font-nhdr-500",
});

export const metadata: Metadata = {
  title: "TalentVare",
  description: "A modern portal homepage built with Next.js and Tailwind CSS. This project implements a pixel-perfect UI design for TalentVare.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${NeueHaasDisplayMedium.variable} ${NeueHaasDisplayRoman.variable}`}
    >
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
