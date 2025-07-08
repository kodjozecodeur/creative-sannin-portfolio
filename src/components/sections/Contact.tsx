"use client";

import { Mail, FileText } from "lucide-react";

const RESUME_LINK =
  "https://drive.google.com/file/d/1SkP1eBwCUnrLmXRZC0je0QEMQS4ZwvJG/view?usp=drive_link";
export default function Contact() {
  return (
    <section className="py-40 mt-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-20">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Mail className="w-10 h-10 text-gray-600" />
            </div>
          </div>
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black leading-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Interested in working together or just want to say hi? I&apos;m
              always open to new projects and creative collaborations.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <a
              href="mailto:yayrakekeli06@gmail.com"
              className="inline-flex items-center justify-center gap-3 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[--highlight] hover:text-black transition-colors shadow-lg btn-highlight-solid bg-gray-900 dark:bg-[#F39319]"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
            <a
              href={RESUME_LINK}
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
