import React from "react";
import Image from "next/image";

const polaroidImages = [
  {
    src: "/images/CS1.jpg",
    alt: "One step,after another one",
    className:
      "transform rotate-3 hover:rotate-0 transition-transform duration-300",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/CS4.jpg",
    alt: "It's adorable day, Sparkle",
    className:
      "transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-16",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/CS3.jpg",
    alt: "A winner from the beginning",
    className:
      "transform rotate-2 hover:rotate-0 transition-transform duration-300 ml-12",
    aspect: "aspect-[4/3]",
  },
];
const PolaroidPhotos = () => (
  <div className="relative">
    <div className="space-y-8">
      {polaroidImages.map((img) => (
        <div className={img.className} key={img.src}>
          <div className="bg-white p-4 shadow-xl max-w-xs">
            <Image
              src={img.src}
              alt={img.alt}
              className={`${img.aspect} mb-4 rounded-sm object-cover w-full`}
              width={400}
              height={500}
            />
            <p className="text-sm text-gray-700 text-center font-handwriting">
              {img.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PolaroidPhotos;
