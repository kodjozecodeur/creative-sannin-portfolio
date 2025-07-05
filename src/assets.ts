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
    roleTags: ["Product Designer", "Writer", "Design Speaker"],
  },
  hero: {
    title: {
      firstName: "Sitsopé",
      lastName: "Judith",
    },
    email: "yayarakekeli06@gmail.com",
    bio: "Sitsopé Judith — Senior product designer for ivy & Design ahead for fly night, Currently building Qwertype — my design approach focuses on solving real problems, optimizing user journeys, and making every interaction seamless.",
  },
};
export const projects = [
  {
    id: 1,
    title: "Weave Finance",
    date: "December, 2024",
    description: "Fintech Solution exploration",
    preview:
      "Weave is a banking solution designed by ms, with the focal point being easy and quick internal ...",
    tags: ["Mobile App", "Website", "Design System", "Branding"],
    imgSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    cta: "Read case study",
  },
  {
    id: 2,
    title: "Fundify",
    date: "February, 2024",
    description:
      "Empower your finances and earn rewards with every smart move.",
    preview:
      "In the fast-paced world of fintech, user engagement is key. Fundify is a banking app designed f...",
    tags: ["Mobile App", "Case Study"],
    imgSrc:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    cta: "Read case study",
  },
  {
    id: 3,
    title: "Brew Time Coffee Cafe",
    date: "May, 2023",
    description:
      "Discover our carefully crafted coffee blends, made with love and passion.",
    preview:
      "Whether you're looking for a classic espresso or a specialty latte, we have something for every c...",
    tags: ["Website", "Branding"],
    imgSrc:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
    cta: "Read case study",
  },
  {
    id: 4,
    title: "Sonic Music",
    date: "September, 2023",
    description: "Listen and share the music you love.",
    preview:
      "Rooted in a deep passion for music, our app celebrates the boundless power of sound to inspir...",
    tags: ["Mobile App", "Website", "Case Study"],
    imgSrc:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    cta: "Read case study",
  },
  {
    id: 5,
    title: "zero: Community for gamers.",
    date: "April, 2023",
    description: "Stream & Build your community.",
    preview:
      "Zero was created to assist Gamers looking to connect with other gamers; our emphasis is on cre...",
    tags: ["Mobile App", "Case Study"],
    imgSrc:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    cta: "Read case study",
  },
];

export const experience = [
  {
    id: 1,
    company: "Fly Night",
    position: "Senior Product Designer",
    duration: "2023 - Present",
    description:
      "Leading design initiatives for innovative flight booking platform",
    preview:
      "Currently building design systems and optimizing user journeys for seamless flight booking experiences...",
    tags: ["Product Design", "UX Research", "Design Systems"],
  },
  {
    id: 2,
    company: "Ivy Design",
    position: "Product Designer",
    duration: "2022 - 2023",
    description:
      "Designing user-centric solutions for various digital products",
    preview:
      "Collaborated with cross-functional teams to deliver impactful design solutions across multiple projects...",
    tags: ["UI/UX Design", "User Research", "Prototyping"],
  },
  {
    id: 3,
    company: "Qwertype",
    position: "Founder & Design Lead",
    duration: "2021 - Present",
    description:
      "Building innovative design solutions and leading creative projects",
    preview:
      "Founded design studio focused on solving real problems and creating meaningful user experiences...",
    tags: ["Leadership", "Design Strategy", "Brand Design"],
  },
];

export const education = [
  {
    id: 1,
    institution: "Design Institute",
    degree: "Bachelor of Design",
    field: "Product Design & User Experience",
    duration: "2018 - 2022",
    description:
      "Comprehensive study in design principles and user-centered design",
    preview:
      "Focused on human-centered design methodologies and digital product development...",
    tags: ["Design Theory", "User Research", "Digital Design"],
  },
  {
    id: 2,
    institution: "Creative Academy",
    degree: "Certificate",
    field: "Design Speaking & Communication",
    duration: "2021",
    description:
      "Specialized training in design presentation and communication",
    preview:
      "Developed skills in presenting design concepts and communicating with stakeholders...",
    tags: ["Communication", "Presentation", "Design Thinking"],
  },
  {
    id: 3,
    institution: "Tech University",
    degree: "Online Course",
    field: "Advanced UX Research Methods",
    duration: "2020",
    description: "In-depth study of user research methodologies and analytics",
    preview:
      "Mastered various research techniques including user interviews, usability testing, and data analysis...",
    tags: ["User Research", "Analytics", "Testing"],
  },
];
