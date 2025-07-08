"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [displayLoading, setDisplayLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Start loading when pathname changes
    setDisplayLoading(true);

    // Set a timer to hide loading after content has had time to load
    const timer = setTimeout(() => {
      setDisplayLoading(false);
    }, 600); // Shorter, cleaner timing

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  if (displayLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}
