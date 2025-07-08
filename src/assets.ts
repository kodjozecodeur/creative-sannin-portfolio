// src/assets.ts
// Centralized asset and text definitions for the portfolio

// Image assets (relative to public/)
export const IMAGES = {
  logo: "/next.svg",
  globe: "/globe.svg",
  vercel: "/vercel.svg",
  window: "/window.svg",
  file: "/file.svg",
};

// Text content
export const texts = {
  // heroTitle: "Welcome to Creative Sannin Portfolio",
  // heroSubtitle: "Showcasing creativity, innovation, and technology.",
  // contactCTA: "Get in touch with us!",
  // navbarLinks: ["Home", "Projects", "Contact"],
  // projectsTitle: "Our Projects",
  // Add more text constants as needed
  header: {
    roleTags: ["Product Designer | Frontend Artisan| Drawing Artist"],
  },
  hero: {
    title: {
      firstName: "Sitsopé",
      lastName: "Judith",
    },
    email: "yayarakekeli06@gmail.com",
    bio: "Hey ! I'm Sitso (/si-tcho/), product design alchemist & front‑end artisan, crafting intuitive interfaces and seamless user journeys, one pixel at a time.",
  },
};
export const projects = [
  {
    id: 1,
    title: "DjamaEnPromo",
    description: "LifeStyle Application",
    preview:
      "This mobile application was designed for the German-Togolese brewing giant as part of a customer loyalty strategy through recurring promotional campaigns.It enables users to easily discover and access promotions on leading beverage brands — such as DJAMA, Warsteiner, C’Kool, and CHAP — available in bars across Togo",
    tags: ["Mobile App", "SNB", "LifeStyle"],
    imgSrc: ["/images/SNB1.jpg", "/images/SNB2.jpg", "/images/SNB3.jpg"],
    cta: "Take A look",
    link: "https://play.google.com/store/apps/details?id=com.spintech.snb_promo&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "Edomatch",
    description: "JobSearch Application.",
    preview:
      "EDoMatch is a job search app that uses AI to match job seekers with employers in Africa, allowing users to create video profiles and get personalized job recommendations.",
    tags: ["Mobile App", "Job App", "AI"],
    imgSrc: ["/images/EDO1.jpg", "/images/EDO2.jpg", "/images/EDO3.jpg"],
    cta: "Take A look",
    link: "https://n.edomatch.com/",
  },
  {
    id: 3,
    title: "VTCControl",
    description: "Fleet Management App",
    preview:
      "VTC Control is a fleet management app designed for VTC (ride-sharing service) owners to monitor their vehicles and drivers through detailed dashboards to optimize their business operations.",
    tags: ["App", "Fleet Management", "IOS", "Android"],
    imgSrc: ["/images/VTC1.jpg", "/images/VTC2.jpg", "/images/VTC3.jpg"],
    cta: "Take A look",
    link: "https://www.vtccontrol.com/",
  },
  {
    id: 4,
    title: "QuizzMe",
    description: "A Gaming and Quizzing App.",
    preview:
      "QuizzMe is a mobile app designed to enhance the gaming experience by allowing users to create and share quizzes, compete with friends, and discover new games.",
    tags: ["Mobile App", "Game", "Quizz"],
    imgSrc: ["/images/G1.jpg", "/images/G2.jpg", "/images/G3.jpg"],
    cta: "Take A look",
    link: "https://www.behance.net/yayradesigner",
  },
  {
    id: 5,
    title: "Neptune Bank Management System",
    description: "A Management and  Pos Application.",
    preview:
      "Neptune Bank Management System is a comprehensive banking application designed to streamline operations, enhance customer experience, and provide secure financial services.",
    tags: ["Mobile App", "Fintech"],
    imgSrc: ["/images/N1.jpg", "/images/N2.jpg", "/images/N2.jpg"],
    cta: "Take A look",
  },
];

export const experience = [
  {
    id: 1,
    company: "VTCControl | Cocody, Côte d'Ivoire",
    position: "Product Designer",
    description: [
      "Redesigned key applications such as VTCControl and VTC Driver, improving usability and streamlining core functionalities.",
      "Collaborated on multiple other projects aimed at making fleet management more intuitive and scalable.",
      "The solutions have supported and improved fleet management for over 1,500+ clients globally, including in Ivory Coast, Congo, and Cameroon, France.",
    ],
    tags: ["Product Design", "UX Research", "Design Systems"],
  },
  {
    id: 2,
    company: "Neptune Microfinance Bank Ltd | Ikeja, Lagos",
    position: "Product Designer",
    description: [
      "Designed functional tools for the bank, including TMS (Terminal Management System), POS interfaces, and Bill Collector platforms used daily by a wide network of merchants.",
      "Ensured secure, seamless transactions for Nigerian businesses, while making the design system scalable to support future product evolution and changes.",
    ],
    tags: ["UI/UX Design", "User Research", "Prototyping"],
  },
  {
    id: 3,
    company: "EdoMatch| Lomé-TOGO",
    position: "Product Designer",
    description: [
      "Designed a recruitment application from scratch called Edomatch, creating an intuitive end-to-end experience for job seekers and recruiters.",
      "Built a clear and efficient user flow aimed at simplifying and modernizing the traditional hiring process across Africa and beyond.",
      "The app has gained strong traction, with over 50,000 downloads on both the App Store and Google Play.",
    ],
    tags: ["Product Design", "Design Strategy", "Brand Design"],
  },
];

export const education = [
  {
    id: 1,
    institution: "JAM INFO",
    degree: "Bachelor of Design",
    field: "Graphic Design Training",
    tags: ["Graphic Design", "Branding", "Visual Communication"],
    certificateLink: "https://credential.certifyme.online/verify/121c1c9f7648",
  },
  {
    id: 2,
    institution: "Africa Agility",
    degree: "Online Training",
    field: "Product Design",
    tags: ["Product Design", "UX/UI Design", "Prototyping"],
    certificateLink: "https://credential.certifyme.online/verify/1f0b2c9f7648",
  },
  {
    id: 3,
    institution: "HerTechTrail",
    degree: "Online Training",
    field: "Product Design",
    tags: ["UI/UX Design", "Prototyping", "User Testing"],
    certificateLink:
      "https://credsverse.com/credentials/5ddf824f-6e36-4cdc-a7f6-74c167560087",
  },
];
