"use client";
import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 font-light">
      <div className="mb-2 md:mb-0"></div>
      <div className="flex gap-2 mb-2 md:mb-0">
        <span>
          <span className="text-pink-300">Designed</span> By{" "}
          <span className="text-green-300">Sitsofe</span>
        </span>
        <span className="text-gray-400">
          Built By <Link href="https://kojocode.netlify.app/">KojoCode</Link>
        </span>
      </div>
      <div>© 2025 Sitsofe- CreativeSannin</div>
    </footer>
  );
};

export default Footer;
