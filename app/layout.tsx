import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Magnus Bodholdt Kaare | Portfolio",
  description: "Yeet skeet repeat I hope I remember to change this",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex-grow mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
