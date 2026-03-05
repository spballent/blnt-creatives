import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "BLNT Creatives — Creative Solutions Agency",
  description:
    "BLNT Creatives is a small creative agency combining strategy, design, and technology to help brands solve real problems.",
  icons: {
    icon: "/BLNT_Logo_R2-02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased bg-[#0D0D0D] text-[#F5F5F0]`}>
        {children}
      </body>
    </html>
  );
}
