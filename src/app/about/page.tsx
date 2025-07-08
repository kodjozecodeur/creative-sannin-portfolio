import React from "react";
import AboutHero from "./components/AboutHero";
import PolaroidPhotos from "./components/PolaroidPhotos";
import ExperienceSection from "./components/ExperienceSection";
import BeyondPixelsSection from "./components/BeyondPixelsSection";
import BreakSection from "./components/BreakSection";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 -mx-6 sm:-mx-8 lg:-mx-12 -mt-24">
      <AboutHero />
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <PolaroidPhotos />
            <div className="space-y-12">
              <ExperienceSection />
              <BeyondPixelsSection />
              <BreakSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
