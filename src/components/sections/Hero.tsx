"use client";
import React from "react";
import { ChevronDownCircleIcon, ChevronRight, MailIcon } from "lucide-react";
// import { siX, siLinkedin, siBehance } from "simple-icons";
import {
  IconBrandBehance,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

import Link from "next/link";
import { motion } from "framer-motion";
import { texts } from "@/assets";

export default function Hero() {
  const RESUME_LINK =
    "https://drive.google.com/file/d/1SkP1eBwCUnrLmXRZC0je0QEMQS4ZwvJG/view?usp=drive_link";
  return (
    <section>
      <div className="mb-8 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          <span className="text-black">Sitso</span> <br />
          <span className="text-[#F39319] font-sans">/si-tcho/</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 items-center mb-12">
        <motion.span
          className="text-[#19170E] dark:text-[--highlight] text-sm bg-[#F2F1EC] dark:bg-[#101110] px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 btn-highlight"
          whileHover={{ scale: 1.05, backgroundColor: "#EDEAE1" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <MailIcon className="inline-block mr-2" size={23} />
          {texts.hero.email}
        </motion.span>
        <motion.a
          href={RESUME_LINK}
          className="text-[#19170E] dark:text-[--highlight] text-sm bg-[#F2F1EC] dark:bg-[#101110] px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 btn-highlight"
          whileHover={{ scale: 1.05, backgroundColor: "#EDEAE1" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ChevronDownCircleIcon className="inline-block" size={23} />
          Download CV
        </motion.a>
      </div>
      <div className="mb-12 max-w-2xl">
        <p className="text-gray-700 text-sm leading-relaxed">
          I am a creative designer and developer passionate about building
          beautiful and functional digital experiences.
        </p>
      </div>
      {/* Social media links (example, replace with translation keys as needed) */}
      <div className="flex gap-4 items-center mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href="https://x.com/davisitso?s=21&t=oNXmxEUoVA_1VB7-Hn7XCg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <IconBrandTwitter />
            </motion.div>
            (Twitter)
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href="http://www.linkedin.com/in/judith-maglodji-6b7408275"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <IconBrandLinkedin />
            </motion.div>
            LinkedIn
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href="https://www.behance.net/yayradesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <IconBrandBehance />
            </motion.div>
            Behance
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
