import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/index"
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bamisebi Pelumi Software Engineer Portfolio",
  description: "Am a keen software engineer with a passion for web development, mobile development, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-F9S879P7VG" />
      <Navbar/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
