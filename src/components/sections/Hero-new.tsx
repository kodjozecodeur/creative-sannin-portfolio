"use client";

export default function Hero() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Judith
          <br />
          Maglodji
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 items-center mb-12">
        <a
          href="mailto:judith.maglodji@gmail.com"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm"
        >
          judith.maglodji@gmail.com
        </a>
        <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm">
          Download CV
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm">
          Playlist
        </button>
      </div>
      <div className="mb-12 max-w-2xl">
        <p className="text-gray-700 text-sm leading-relaxed">
          I am a creative designer and developer passionate about building
          beautiful and functional digital experiences.
        </p>
      </div>
    </section>
  );
}
