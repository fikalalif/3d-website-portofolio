import Biography from "@/slices/Biography";
import ContentIndex from "@/slices/ContentIndex";
import Experience from "@/slices/Experience";
import Hero from "@/slices/Hero";
import TechList from "@/slices/TechList";

import {
  hero,
  biography,
  techList,
  experience,
  projects,
} from "@/data/staticData";

export default function Home() {
  return (
    <main>
      <Hero slice={hero} />
      <div id="about">
        <Biography slice={biography} />
      </div>
      <TechList slice={techList} />
      <Experience slice={experience} />
      <div id="projects">
        <ContentIndex slice={projects} />
      </div>
    </main>
  );
}