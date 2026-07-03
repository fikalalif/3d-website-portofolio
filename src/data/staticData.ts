export const settings = {
  name: "My Portofolio",
  nav_item: [
    { link: "/#about", label: "About" },
    { link: "/#projects", label: "Projects" },
  ],
  cta_link: "mailto:fikalalif26@gmail.com",
  cta_label: "Contact Me",
  instagram_link: "https://www.instagram.com/fikalalif",
  github_link: "https://github.com/fikalalif",
  linkedin_link: "https://id.linkedin.com/in/fikal-alif-a0a628258",
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
  body: "I am a highly driven Full-Stack and Mobile Developer combining academic excellence with robust hands-on experience in architecting scalable applications. Proficient across modern technology stacks including Next.js, Astro.js, Jetpack Compose, and FastAPI, underpinned by a strong commitment to Clean Architecture. When I'm not writing code on my Ubuntu setup, you can find me exploring the latest tech trends or working on personal projects that push the boundaries of what's possible.",
  avatar: "/formal-photo.jpeg", 
  button_text: "My CV",
  button_link: "/CV_English_Fikal.pdf", 
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
    { tech_name: "Astro.js", tech_color: "#88CE02" },
    { tech_name: "Three.js", tech_color: "#ffffff" },
  ],
};

export const experience = {
  heading: "Experience",
  items: [
    {
      title: "Vice Chairman & Technical Mentor",
      time_period: "Nov 2023 - Present",
      institution: "PLUGIN Open Source Community",
      description:
        "Entrusted as the primary mentor for Kotlin (Jetpack Compose) and Express.js backend classes. Structured comprehensive learning curricula aligned with industry standards and actively facilitated sharing sessions and collaborative real-world projects.",
    },
    {
      title: "Freelance Frontend Developer",
      time_period: "Apr 2026 - Present",
      institution: "Blauw.kof",
      description:
        "Built a web-based back-office platform focused on intelligent inventory management and modular Bill of Materials (BOM) systems. Implemented TanStack Query for data fetching optimization and managed complex client-side state for stock deduction simulations.",
    },
    {
      title: "Freelance Frontend Developer",
      time_period: "Mar 2025 - Aug 2025",
      institution: "Tempat Peraduan Group",
      description:
        "Architected and developed a high-performance company profile website utilizing Astro, React, and Tailwind CSS. Created an immersive user experience by integrating 3D model rendering with Three.js, supported by in-depth user research and usability testing.",
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
        link: "https://github.com/Fault-EarthQuake-Detection",
        date: "2025-12-10",
        gallery: [
          { url: "/geovalidpage/Landing.png", alt: "Landing Page of Geovalid" },
          { url: "/geovalidpage/Login.png", alt: "Login Page of Geovalid" },
          { url: "/geovalidpage/dashboardHome.png", alt: "Dashboard Home" },
          { url: "/geovalidpage/detectionPage.png", alt: "Detection Page" },
          { url: "/geovalidpage/mapsPage.png", alt: "Maps of Geovalid" },
          { url: "/geovalidpage/settingPage.png", alt: "Setting Page" },
          { url: "/geovalidpage/adminVerificationPage.png", alt: "Admin Verification the Data of Detection Page" },
          { url: "/geovalidpage/userRolePage.png", alt: "Admin set the Role of User" },
          { url: "/geovalidpage/sentimenAnalisysPage.png", alt: "Admin Can See the User Feedback using Sentimen Analysis" },
        ]
      },
      tags: ["Next.js","Express.js", "Tailwind", "Supabase", "Huggingface", "FastAPI", "Python", "DeepLabV3+", "Computer Vision"],
      description: "A crowdsourcing and AI-driven earthquake disaster mitigation platform built with a semi-microservices architecture. Features interactive maps processing GeoJSON spatial data to detect active faults and provide real-time hazard information.",
    },
    {
      uid: "project-2",
      data: {
        title: "VibeCheck",
        image: { url: "/noisetexture.jpg", alt: "VibeCheck App" },
        link: "https://github.com/fikalalif/vibecheck-dev",
        date: "2026-04-20",
        gallery: [
          { url: "/vibecheck/homescreen.jpeg", alt: "Home Screen of Vibecheck" },
          { url: "/vibecheck/cameraScreen.jpeg", alt: "Camera Screen" },
          { url: "/vibecheck/sidebar.jpeg", alt: "Sidebar" },
          { url: "/vibecheck/studioScreen.jpeg", alt: "Studio Screen to Setting Tone" },
          { url: "/vibecheck/purikuraScreen.jpeg", alt: "Purikura Screen to Make a Frame By the Photo" },
        ]
      },
      tags: ["Jetpack Compose", "P2P", "Kotlin", "WebRTC", "YOLO", "Mobile-Net"],
      description: "A remote camera control mobile application designed with a 'manly but bright' Y2K pixel art aesthetic. Features a low-latency P2P communication system using Wi-Fi Direct and TCP Raw Sockets, integrated with Google ML Kit Pose Detection for zero-touch shutter triggers.",
    },
    {
      uid: "project-3",
      data: {
        title: "Urpocketdigicam Web",
        image: { url: "/noisetexture.jpg", alt: "Urpocketdigicam Web" },
        link: "https://github.com/fikalalif/urpocketdigicam_web",
        date: "2024-07-20",
        gallery: [
          { url: "/urpocketdigicam/urpocketdigicam.png", alt: "Landing Page of Urpocketdigicam" },
        ]
      },
      tags: ["Laravel", "MySQL", "Rest API"],
      description: "A comprehensive web platform based on the Laravel and Vite ecosystem dedicated to cataloging vintage digital camera collections. Implements dynamic search, advanced filtering systems, and a secure admin dashboard to streamline inventory data updates.",
    },
  ],
};