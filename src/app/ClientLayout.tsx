"use client";
// import LanguagePopup from "@/components/LanguagePopup";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // Reduced delay
    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when route changes

  return (
    <>
      {loading && <Loader />}
      {/* <LanguagePopup /> */}
      {!loading && children}
    </>
  );
}
