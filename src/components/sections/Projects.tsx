"use client";

import { motion, Variants } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, experience, education } from "@/assets";
import { useState, useRef } from "react";
import Image from "next/image";

// Define types for our data
type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  preview: string;
  tags: string[];
  imgSrc: string;
  cta: string;
};

type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  preview: string;
  tags: string[];
};

type Education = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description: string;
  preview: string;
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

// Project card component with horizontal slider
function ProjectCard({ project }: { project: Project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create 3 different views for each project
  const slides = [
    { id: 1, image: project.imgSrc, title: `${project.title} - Overview` },
    { id: 2, image: project.imgSrc, title: `${project.title} - Details` },
    { id: 3, image: project.imgSrc, title: `${project.title} - Process` },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: project.id * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Header with Icon and Date */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.date}</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute top-6 right-6 z-10">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg">
          {project.cta}
        </button>
      </div>

      {/* Image Slider */}
      <div className="relative h-96 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-3">Preview</h4>
          <p className="text-gray-600 leading-relaxed mb-4">
            {project.preview}
          </p>
          <button className="text-gray-900 text-sm font-medium hover:underline">
            read more
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {tag}
            </span>
          ))}
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
      transition={{ duration: 0.4, delay: item.id * 0.1 }}
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
              {type === "project"
                ? (item as Project).date
                : type === "experience"
                ? `${(item as Experience).position} • ${
                    (item as Experience).duration
                  }`
                : `${(item as Education).degree} in ${
                    (item as Education).field
                  } • ${(item as Education).duration}`}
            </p>
          </div>
        </div>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-sm">
          {type === "project"
            ? (item as Project).cta
            : type === "experience"
            ? "View details"
            : "View certificate"}
        </button>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {type === "education" ? "Description" : "Preview"}
        </h4>
        <p className="text-gray-600 leading-relaxed">
          {item.preview || item.description}
        </p>
      </div>

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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-lg grid-cols-3 mb-16 bg-transparent p-0 h-auto mx-auto">
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
              className="max-w-4xl mx-auto space-y-12"
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
              className="max-w-4xl mx-auto space-y-12"
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
              className="max-w-4xl mx-auto space-y-12"
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
