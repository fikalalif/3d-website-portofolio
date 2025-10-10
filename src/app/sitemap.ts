import { MetadataRoute } from "next";
import { projects } from "@/data/staticData";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteRoot = "https://demo.com"; // Ganti dengan URL situs Anda

  // Rute statis
  const staticRoutes = [
    {
      url: siteRoot,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteRoot}/#about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteRoot}/#projects`,
      lastModified: new Date().toISOString(),
    },
  ];

  // Rute dinamis dari data proyek
  const projectsRoutes = projects.items.map((project) => ({
    url: `${siteRoot}/project/${project.uid}`,
    lastModified: project.data.date,
  }));

  return [...staticRoutes, ...projectsRoutes];
}