import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://observatoire-syntaxerrorisme.vercel.app"),
  title: {
    default: "Observatoire du Syntaxerrorisme",
    template: "%s — Observatoire du Syntaxerrorisme",
  },
  description:
    "Observatoire du Syntaxerrorisme : lois, jurisprudence, histoire et prévention.",
  applicationName: "Observatoire du Syntaxerrorisme",
  openGraph: {
    siteName: "Observatoire du Syntaxerrorisme",
    type: "website",
    url: "https://observatoire-syntaxerrorisme.vercel.app",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="NREny4h-mY0IjM28qcxOEHy7JbJ0VnaecCo72ZNtXY0"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Global animated background */}
        <AnimatedBackground />

        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
