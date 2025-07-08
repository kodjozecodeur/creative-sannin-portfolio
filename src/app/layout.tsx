import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageTransition from "@/components/PageTransition";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Creative Sannin Portfolio",
  description:
    "Showcasing creativity, innovation, and technology. Portfolio, Design, Application, Tech ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F9F8F6] dark:bg-[#18181b]">
      <body className="antialiased bg-[#F9F8F6] dark:bg-[#18181b] text-black dark:text-gray-100">
        <PageTransition>
          <div>
            <Header />
            <div className="min-h-screen">
              <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-24">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
