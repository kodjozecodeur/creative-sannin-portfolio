import React from "react";
const ExperienceSection = () => {
  return (
    <div>
      <h2 className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-6">
        My Experience
      </h2>
      <div className="space-y-4 text-gray-700">
        <p className="text-lg leading-relaxed">
          I build tools that matter. From banking platforms to fintech apps, B2B
          solutions to job marketplaces—I&apos;ve spent years crafting products
          that solve real problems for real people.
        </p>
        <p className="text-lg leading-relaxed">
          What sets me apart is my ability to work seamlessly with{" "}
          <span className="underline decoration-2 decoration-offset-2">
            developer teams
          </span>
          , turning complex ideas into{" "}
          <span className="underline decoration-2 decoration-offset-2">
            great products
          </span>
          . I speak both design and code, bridging the gap between vision and
          execution to deliver solutions that users love and businesses trust.
        </p>
      </div>
    </div>
  );
};

export default ExperienceSection;
