"use client";
import React from "react";
import {
  ChevronDownCircleIcon,
  ChevronRight,
  MailIcon,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const RESUME_LINK =
    "https://drive.google.com/file/d/1SkP1eBwCUnrLmXRZC0je0QEMQS4ZwvJG/view?usp=drive_link";
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          <span className="text-black">Sitso</span>{" "}
          <span className="text-red-500 font-normal">/si-tcho/</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 items-center mb-12">
        <motion.span
          className="text-[#19170E] text-sm bg-[#F2F1EC] px-2 py-2 rounded-full cursor-pointer"
          whileHover={{ scale: 1.05, backgroundColor: "#EDEAE1" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <MailIcon className="inline-block mr-2" size={23} />
          judith.maglodji@gmail.com
        </motion.span>
        <motion.a
          href={RESUME_LINK}
          className="text-[#19170E] text-sm bg-[#F2F1EC] px-2 py-2 rounded-full cursor-pointer flex items-center gap-2"
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
              <Twitter className="w-4 h-4" />
            </motion.div>
            X (Twitter)
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
              <Linkedin className="w-4 h-4" />
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
            <motion.svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <path d="M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.2495.6288-.1663 1.1905-.4203 1.685-.7619.4946-.3485.8928-.7896 1.1945-1.3237.3017-.5341.4526-1.1795.4526-1.9297 0-.7636-.1441-1.4088-.4321-1.9297-.2812-.5208-.6613-0.9414-1.1397-1.2632-.4713-.3218-.9902-.5547-1.5573-.6998-.5671-.1451-1.1397-.2177-1.7188-.2177h-2.2637V4.4804H0zm6.2646 3.6556H4.8777v2.6764h1.3869c.2949 0 .5829-.0416.8633-.1245.2803-.0829.5278-.2177.7422-.4043.2144-.1866.3834-.4317.5071-.7353.1237-.3036.1855-.6613.1855-1.0732 0-.4119-.0618-.7696-.1855-1.0732-.1237-.3036-.2927-.5487-.5071-.7353-.2144-.1866-.4619-.3214-.7422-.4043-.2804-.0829-.5684-.1245-.8633-.1245zm6.4785 1.9775h4.9707v-.8174h-4.9707v.8174zm-6.4785 5.8945h1.8203c.3769 0 .7422-.0554 1.0967-.1663.3545-.1108.6613-.2773.9199-.4985.2586-.2212.4595-.4985.6025-.8311.1431-.3326.2147-.7214.2147-1.1671 0-.4457-.0716-.8345-.2147-1.1671-.1431-.3326-.3439-.6099-.6025-.8311-.2586-.2212-.5654-.3877-.9199-.4985-.3545-.1108-.7198-.1663-1.0967-.1663H6.2646v5.2260zm8.8916-3.7822c.041.4458.1431.8208.306 1.1259.1628.3051.3769.5554.6418.7491.2649.1937.5693.3326.9131.4183.3438.0858.7214.1287 1.1327.1287.6613 0 1.2632-.1108 1.8066-.3326.5435-.2218.9902-.5695 1.3418-1.0425h1.4902c-.4526 1.0732-1.0732 1.8477-1.8614 2.3227-.7882.4751-1.7461.7124-2.8739.7124-1.0322 0-1.9434-.1731-2.7335-.5192-.7901-.3461-1.4502-.8174-1.9775-1.4136-.5273-.5962-.9268-1.2836-1.1986-2.0621-.2717-.7785-.4077-1.6009-.4077-2.4672 0-.8662.1359-1.6886.4077-2.4672.2718-.7785.6713-1.4659 1.1986-2.0621.5273-.5962 1.1874-1.0675 1.9775-1.4136.7901-.3461 1.7013-.5192 2.7335-.5192 1.0732 0 2.0279.2148 2.8671.6418.8392.4269 1.5367 1.0118 2.0894 1.7547.5527.7428.8802 1.5912 1.0322 2.5449H15.1562z" />
            </motion.svg>
            Behance
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
