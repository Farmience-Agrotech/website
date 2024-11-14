import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Clarity from '@microsoft/clarity'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Farmience",
  description: "Revolutionizing resource efficiency and sustainability with Farmience",
};

declare global {
  // Extending process.env to include our custom variable
  interface ProcessEnv {
    CLARITY_PROJECT_ID: string;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (typeof window !== "undefined") {
    Clarity.init(CLARITY_PROJECT_ID);
  }

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