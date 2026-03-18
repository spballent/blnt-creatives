import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLNT Creatives — Creative Solutions Agency",
  description:
    "BLNT Creatives is a small creative agency combining strategy, design, and technology to help brands solve real problems.",
  icons: {
    icon: "/favicon.svg",
    apple: "/BLNT_Logo_R2-02.png",
  },
  openGraph: {
    title: "BLNT Creatives — Creative Solutions Agency",
    description:
      "BLNT Creatives is a small creative agency combining strategy, design, and technology to help brands solve real problems.",
    images: [{ url: "/BLNT_Logo_R2-01.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-[#0D0D0D] text-[#F5F5F0]`}>
        {children}
      </body>
    </html>
  );
}
