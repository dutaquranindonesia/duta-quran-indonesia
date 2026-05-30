import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });

export const metadata: Metadata = {
  title: "Duta Qur'an Indonesia",
  description: "Komunitas Penghafal Al-Qur'an dan Support System Lembaga Pendidikan Qur'an",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-emerald-950 text-white">{children}</body>
    </html>
  );
}
