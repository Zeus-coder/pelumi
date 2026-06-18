import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/index";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Bamisebi Pelumi — React Native Developer",
  description:
    "React Native mobile developer with 5 years of experience building robust and scalable mobile apps with React Native CLI and Expo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-F9S879P7VG" />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
