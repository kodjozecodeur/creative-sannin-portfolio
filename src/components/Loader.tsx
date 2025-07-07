"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border-4 border-blue-400 border-t-transparent animate-spin mb-4"></div>
        <span className="text-lg font-semibold text-blue-500 animate-bounce">
          Loading...
        </span>
      </div>
    </div>
  );
}
