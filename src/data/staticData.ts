export const settings = {
  name: "Fikal Alif",
  nav_item: [
    { link: "/#about", label: "About" },
    { link: "/#projects", label: "Projects" },
  ],
  cta_link: "mailto:fikalalif26@gmail.com",
  cta_label: "Contact Me",
  twitter_link: "https://x.com/yesterdayisday",
  github_link: "https://github.com/fikalalif",
  linkedin_link: "https://www.linkedin.com/in/fikal-alif-a0a628258/",
  meta_title: "Fikal Alif - Fullstack & Mobile Developer",
  meta_description: "A creative portfolio website built with Next.js and Three.js.",
  og_image: "/og-image.png",
};

export const hero = {
  first_name: "Fikal",
  last_name: "Alif",
  tag_line: "Fullstack Developer & Mobile Developer",
};

export const biography = {
  heading: "About Me",
  body: "I am a Full-Stack and Mobile Developer. I have a strong passion for building impactful applications, ranging from AI-driven backend systems to visually engaging mobile apps. When I'm not writing code on my Ubuntu setup, you can find me exploring the latest tech trends or working on personal projects that push the boundaries of what's possible.",
  avatar: "/fikal.jpeg", // Make sure this image exists in the public folder
  button_text: "My Resume",
  button_link: "/resume.pdf", // Make sure this file exists in the public folder
};

export const techList = {
  title: "Tech Stack",
  items: [
    { tech_name: "Next.js", tech_color: "#ffffff" },
    { tech_name: "Jetpack Compose", tech_color: "#02569B" },
    { tech_name: "FastAPI", tech_color: "#009688" },
    { tech_name: "Express.js", tech_color: "#3776AB" },
    { tech_name: "Supabase", tech_color: "#3ECF8E" },
    { tech_name: "PostgreSQL", tech_color: "#06B6D4" },
    { tech_name: "Three.js", tech_color: "#ffffff" },
    { tech_name: "GSAP", tech_color: "#88CE02" },
  ],
};

export const experience = {
  heading: "Experience",
  items: [
    {
      title: "Community Organizer",
      time_period: "2024 - Present",
      institution: "Plugin Study Club",
      description:
        "Led recruitment, onboarding, and community events for a local coding study club. Fostered a collaborative environment to help new members learn programming and build team projects.",
    },
    {
      title: "Freelance Web Developer",
      time_period: "2025",
      institution: "Tempat Peraduan Group",
      description:
        "Designed and developed user-friendly web interfaces for company profiles. Conducted user research and usability testing to drive UI/UX design decisions.",
    },
  ],
};

export const projects = {
  heading: "Projects",
  contentType: "Projects",
  description:
    "Here are some of my recent projects. Each project showcases my expertise across different technologies, from machine learning integrations to real-time mobile applications.",
  viewMoreText: "View Project",
  fallbackItemImage: "/noisetexture.jpg",
  items: [
    {
      uid: "project-1",
      data: {
        title: "GeoValid",
        image: { url: "/noisetexture.jpg", alt: "GeoValid Application" },
        link: "https://github.com/Fault-EarthQuake-Detection", // Link GitHub dipindah ke sini
        date: "2025-12-10",
      },
      tags: ["FastAPI", "Python", "DeepLabV3+", "Computer Vision"],
      description: "An AI-driven geological analysis application that uses computer vision to detect faults and breccia from datasets.",
    },
    {
      uid: "project-2",
      data: {
        title: "VibeCheck",
        image: { url: "/noisetexture.jpg", alt: "VibeCheck App" },
        link: "https://github.com/fikalalif/vibecheck-dev", // Link GitHub dipindah ke sini
        date: "2026-04-20",
      },
      tags: ["Jetpack Compose", "P2P", "Mobile"],
      description: "A remote camera control mobile application featuring a P2P camera system, designed with a distinct 'manly but bright' Y2K pixel art aesthetic.",
    },
    {
      uid: "project-3",
      data: {
        title: "Urpocketdigicam Web",
        image: { url: "/noisetexture.jpg", alt: "Urpocketdigicam Web" },
        link: "https://github.com/fikalalif/urpocketdigicam_web", // Link GitHub dipindah ke sini
        date: "2024-07-20",
      },
      tags: ["Laravel", "MySQL", "API"],
      // Deskripsi diperbaiki agar sesuai dengan konteks platform kamera digital vintage
      description: "A web platform dedicated to cataloging and managing vintage digital camera collections, featuring a robust database architecture and seamless API integration.",
    },
  ],
};