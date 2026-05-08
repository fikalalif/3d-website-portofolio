"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type TechListProps = {
  slice: {
    title: string;
    items: {
      tech_name: string;
      tech_color: string;
    }[];
  };
};

const TechList = ({ slice }: TechListProps): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          // scrub dikurangi menjadi 1 agar responsif langsung dengan scroll jari,
          // pin: true DIHAPUS agar tidak membuat lag di mobile
          scrub: 1, 
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0 ? 250 : -250;
          },
        },
        {
          x: (index) => {
            return index % 2 === 0 ? -250 : 250;
          },
          ease: "none",
        },
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={component}
      // PENGUNCI LAYAR: w-full dan overflow-hidden memastikan elemen animasi terpotong di batas layar
      className="relative w-full overflow-hidden py-10 flex flex-col"
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {slice.title}
        </Heading>
      </Bounded>

      {/* Wrapper pembungkus row tech */}
      <div className="flex flex-col gap-6">
        {slice.items.map(({ tech_color, tech_name }, index) => (
          <div
            key={index}
            // w-max memastikan row sepanjang apapun tidak membungkus teks ke bawah
            className="tech-row flex w-max items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || ""}
          >
            {Array.from({ length: 15 }, (_, i) => (
              <React.Fragment key={i}>
                <span
                  className={clsx(
                    "tech-item text-6xl font-extrabold uppercase tracking-tighter md:text-8xl",
                    i % 2 === 0 ? "text-slate-200" : "text-transparent"
                  )}
                  style={{
                    WebkitTextStroke: i % 2 !== 0 ? `1px ${tech_color || "white"}` : "none",
                    color: i % 2 === 0 ? tech_color || "white" : "transparent",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-4xl font-black text-cyan-500 opacity-50">
                  +
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechList;