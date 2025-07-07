"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [navLoading, setNavLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {navLoading && <Loader />}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent "
        }`}
      >
        <div
          className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 ${
            scrollY > 50 ? "mb-2" : "mb-8"
          }`}
        >
          <div
            className={`flex justify-between items-center ${
              scrollY > 50 ? "py-2" : "py-4"
            }`}
          >
            {/* Profile Image */}
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              
            </div>
            {/* About me/Home link and theme toggle */}
            <div className="flex items-center gap-2">
              {pathname === "/about" ? (
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium flex items-center gap-1"
                  onClick={() => {
                    setNavLoading(true);
                  }}
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  Home
                </Link>
              ) : (
                <button
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                  onClick={() => {
                    setNavLoading(true);
                    setTimeout(() => {
                      router.push("/about");
                    }, 400);
                  }}
                >
                  About <span className="italic">me</span> →
                </button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
