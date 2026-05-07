import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { settings } from "@/data/staticData";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: settings.meta_title,
  description: settings.meta_description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      {/* 1. Hapus overflow-x-hidden dari body agar GSAP Scroll tidak macet */}
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Header />
        
        {/* 2. BUNGKUS KONTEN DENGAN MAIN: Ini kunci untuk memotong elemen yang bocor ke kanan pada mobile */}
        <main className="w-full overflow-hidden">
          {children}
        </main>
        
        <Footer />

        {/* 3. UBAH absolute MENJADI fixed: Agar background menempel sempurna di layar dan tidak menambah lebar/tinggi halaman */}
        <div className="background-gradient fixed inset-0 -z-50 h-screen w-screen" />
        <div className="pointer-events-none fixed inset-0 -z-40 h-screen w-screen bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      </body>
    </html>
  );
}