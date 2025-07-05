import { texts } from "@/assets";

export default function Hero() {
  return (
    <section>
      {/* Role Tags */}
      <div className="flex flex-wrap gap-6 mb-8">
        {texts.header.roleTags.map((role, index) => (
          <span key={index} className="text-gray-600 text-sm">
            {role}
          </span>
        ))}
      </div>

      {/* Main Name */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          {texts.hero.title.firstName}
          <br />
          {texts.hero.title.lastName}
        </h1>
      </div>

      {/* Contact Actions */}
      <div className="flex flex-wrap gap-6 items-center mb-12">
        <a
          href={`mailto:${texts.hero.email}`}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {texts.hero.email}
        </a>

        <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H15a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              clipRule="evenodd"
            />
          </svg>
          Download CV
        </button>

        <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M13.828 8.172a1 1 0 011.414 0A5.983 5.983 0 0117 12a5.983 5.983 0 01-1.758 3.828 1 1 0 11-1.414-1.414A3.987 3.987 0 0015 12a3.987 3.987 0 00-1.172-2.828 1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Playlist
        </button>
      </div>

      {/* Bio Text */}
      <div className="mb-12 max-w-2xl">
        <p className="text-gray-700 text-sm leading-relaxed">
          Sitsopé Judith — Senior product designer for ivy & Design ahead for
          fly night, Currently building Qwertype — my design approach focuses on
          solving real problems, optimizing user journeys, and making every
          interaction seamless.
        </p>
      </div>
    </section>
  );
}
