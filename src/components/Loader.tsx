"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-[#f8fafc] to-[#e0f2fe]">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-serif text-gray-800 mb-6 drop-shadow-sm">
          Sitso
        </span>
        <div className="w-56 h-2 rounded-full bg-gradient-to-r from-pink-400 to-green-300 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-pink-400 to-green-300 animate-loader-bar" />
        </div>
      </div>
      <style jsx global>{`
        @keyframes loader-bar {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-loader-bar {
          animation: loader-bar 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
