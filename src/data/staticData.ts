export const settings = {
  name: "Fikal Alif",
  nav_item: [
    { link: "/#about", label: "About" },
    { link: "/#projects", label: "Projects" },
  ],
  cta_link: "mailto:fikalalif26@gmail.com",
  cta_label: "Contact Me",
  twitter_link: "https://twitter.com",
  github_link: "https://github.com",
  linkedin_link: "https://linkedin.com",
  meta_title: "Fikal Alif - Fullstack Developer & 3D Enthusiast",
  meta_description: "A creative portfolio website built with Next.js.",
  og_image: "/og-image.png",
};

export const hero = {
  first_name: "Fikal",
  last_name: "Alif",
  tag_line: "Fullstack Developer & 3D Enthusiast",
};

export const biography = {
  heading: "About Me",
  body: "Saya seorang pengembang kreatif dengan hasrat untuk membangun aplikasi web yang indah dan fungsional. Saya memiliki pengalaman dalam berbagai teknologi frontend dan backend, dan saya selalu bersemangat untuk mempelajari hal-hal baru.",
  avatar: "/noisetexture.jpg", // Pastikan gambar ini ada di folder public
  button_text: "Resume Saya",
  button_link: "/resume.pdf", // Pastikan file ini ada di folder public
};

export const techList = {
  title: "Technologies",
  items: [
    { tech_name: "React", tech_color: "#61DAFB" },
    { tech_name: "Next.js", tech_color: "#000000" },
    { tech_name: "Three.js", tech_color: "#000000" },
    { tech_name: "GSAP", tech_color: "#88CE02" },
    { tech_name: "Tailwind CSS", tech_color: "#06B6D4" },
  ],
};

export const experience = {
  heading: "Experience",
  items: [
    {
      title: "Membuat Website Perusahaan Tempat Peraduan Group",
      time_period: "2025",
      institution: "Freelance",
      description:
        "Merancang antarmuka yang ramah pengguna untuk aplikasi seluler dan web. Melakukan penelitian pengguna dan pengujian kegunaan untuk menginformasikan keputusan desain.",
    },
  ],
};

export const projects = {
  heading: "Projects",
  contentType: "Projects",
  description:
    "Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap proyek menunjukkan keahlian saya dalam teknologi yang berbeda.",
  viewMoreText: "View Project",
  fallbackItemImage: "/noisetexture.jpg",
  items: [
    {
      uid: "project-1",
      data: {
        title: "3D Portfolio Website",
        image: { url: "/noisetexture.jpg", alt: "3D Portfolio" },
        date: "2023-10-26",
      },
      tags: ["Next.js", "Three.js"],
    },
    {
      uid: "project-2",
      data: {
        title: "E-commerce Platform",
        image: { url: "/noisetexture.jpg", alt: "E-commerce" },
        date: "2023-08-15",
      },
      tags: ["React", "Node.js"],
    },
  ],
};
