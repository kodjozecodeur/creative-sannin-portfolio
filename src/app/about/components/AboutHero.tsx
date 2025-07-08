import React from "react";

const AboutHero = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-600 text-lg mb-4">About</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            I&apos;m <span className="text-black">Sitso</span>{" "}
            <span className="text-[#F39319] font-normal">/si-tcho/</span>,<br />
            a <span className="inline-block">Product Design</span> Alchemist,{" "}
            <span className="underline decoration-2 underline-offset-4">
              Frontend
            </span>{" "}
            <span className="underline decoration-2 underline-offset-4">
              Artisan
            </span>
            , and
            <br />
            <span className="underline decoration-2 underline-offset-4">
              A Paint Artist
            </span>
            .
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
