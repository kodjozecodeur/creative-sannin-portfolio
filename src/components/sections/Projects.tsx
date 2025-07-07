"use client";

import { motion, Variants } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, experience, education } from "@/assets";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define types for our data
type Project = {
  id: number;
  title: string;
  description: string;
  preview: string;
  tags: string[];
  imgSrc: string[];
  cta: string;
  link?: string;
};

type Experience = {
  id: number;
  company: string;
  position: string;
  description: string[];
  tags: string[];
};

type Education = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration?: string;
  description?: string;
  preview?: string;
  tags: string[];
};

// Animation variants for tab content
const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: [0.4, 0.0, 1, 1] },
  },
};

// Project component with desktop and mobile mockups
function ProjectCard({ project }: { project: Project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Use project images for the carousel
  const slides = project.imgSrc || [];

  // Auto-rotate slides
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Removed getProjectInitial, no longer needed

  return (
    <motion.div
      className="max-w-4xl w-full mx-auto p-4 sm:p-6 font-sans transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mb-8 sm:mb-10">
        {/* Removed project initial avatar */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold text-black">{project.title}</h1>
            {/* <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {project.date}
            </span> */}
          </div>
          <p className="text-gray-600 text-base">{project.description}</p>
        </div>
      </div>

      {/* Preview Section */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-xl font-semibold text-black mb-4">Description</h2>
        <p className="text-gray-600 text-base mb-2">
          {showFullPreview || project.preview.length <= 80
            ? project.preview
            : `${project.preview.substring(0, 80)}...`}
        </p>
        {project.preview.length > 80 && (
          <button
            className="text-black underline text-sm hover:no-underline transition-all focus:outline-none"
            onClick={() => setShowFullPreview((prev) => !prev)}
          >
            {showFullPreview ? "show less" : "read more"}
          </button>
        )}
      </div>

      {/* Carousel Container */}
      <div className="mb-8 sm:mb-10">
        <div className="relative w-full h-48 sm:h-72 md:h-96 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full px-2 sm:px-4"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.length > 0 ? (
              slides.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-full h-full px-2 sm:px-4 flex items-center justify-center"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full max-h-44 sm:max-h-72 md:max-h-96 rounded-xl shadow-md bg-gray-100"
                  />
                </div>
              ))
            ) : (
              <div className="min-w-full h-full px-2 sm:px-4 flex items-center justify-center bg-gray-200 text-gray-600 font-medium text-base sm:text-lg">
                No images available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer with Tags and CTA */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg"
          >
            {project.cta}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Generic item component for projects, experience, and education
function ItemCard({
  item,
  type,
}: {
  item: Project | Experience | Education;
  type: "project" | "experience" | "education";
}) {
  const getInitial = (title: string) => title.charAt(0).toUpperCase();

  const getIconBg = (type: string, index: number) => {
    const colors = [
      "bg-black",
      "bg-blue-600",
      "bg-amber-600",
      "bg-green-600",
      "bg-purple-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      className="group border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-white hover:border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 ${getIconBg(
              type,
              item.id
            )} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
          >
            <span className="text-white text-sm font-bold">
              {type === "project"
                ? getInitial((item as Project).title)
                : type === "experience"
                ? getInitial((item as Experience).company)
                : getInitial((item as Education).institution)}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {type === "project"
                ? (item as Project).title
                : type === "experience"
                ? (item as Experience).company
                : (item as Education).institution}
            </h3>
            <p className="text-gray-500 text-sm">
              {type === "experience"
                ? (item as Experience).position
                : type === "education"
                ? `${(item as Education).degree} in ${
                    (item as Education).field
                  } • ${(item as Education).duration}`
                : null}
            </p>
          </div>
        </div>
        {type === "project" && (
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-sm">
            {(item as Project).cta}
          </button>
        )}
      </div>

      {type === "experience" && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Key Contributions
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {(item as Experience).description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {item.tags && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          {item.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-6">
      <div className="max-w-7xl w-full mx-auto">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-xs sm:max-w-lg grid-cols-3 mb-8 sm:mb-16 bg-transparent p-0 h-auto mx-auto">
            <TabsTrigger
              value="projects"
              className="text-base data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=inactive]:text-gray-400 pb-3 rounded-none data-[state=active]:shadow-none transition-all duration-300"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="text-base data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=inactive]:text-gray-400 pb-3 rounded-none data-[state=active]:shadow-none transition-all duration-300"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-base data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=inactive]:text-gray-400 pb-3 rounded-none data-[state=active]:shadow-none transition-all duration-300"
            >
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-0">
            <motion.div
              className="max-w-4xl w-full mx-auto space-y-8 sm:space-y-12"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <motion.div
              className="max-w-4xl w-full mx-auto space-y-8 sm:space-y-12"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              {experience.map((exp) => (
                <ItemCard key={exp.id} item={exp} type="experience" />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <motion.div
              className="max-w-4xl w-full mx-auto space-y-8 sm:space-y-12"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              {education.map((edu) => (
                <ItemCard key={edu.id} item={edu} type="education" />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
