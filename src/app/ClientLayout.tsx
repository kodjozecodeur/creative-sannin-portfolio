"use client";
// import LanguagePopup from "@/components/LanguagePopup";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900); // Joyful delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {/* <LanguagePopup /> */}
      {!loading && children}
    </>
  );
}
