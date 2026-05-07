"use client";
import { useEffect, useRef } from "react";
import { Shapes } from "./Shapes"; // Asumsi Shapes.jsx ada di folder yang sama
import Bounded from "@/components/Bounded";
import gsap from "gsap";

type HeroProps = {
  slice: {
    first_name: string;
    last_name: string;
    tag_line: string;
  };
};

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded ref={component} className="relative overflow-hidden pt-32 md:pt-48">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="grid min-h-[60vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="mb-6 text-[clamp(3rem,15vmin,10rem)] font-extrabold leading-none tracking-tighter">
            <span className="block text-slate-300 name-animation">Fikal</span>
            <span className="block bg-gradient-to-tr from-cyan-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent name-animation">
              Alif
            </span>
          </h1>

          {/* Tagline bergaya Badge Kode */}
          <div className="job-badge inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-400 backdrop-blur-sm md:px-6 md:py-2 md:text-xl">
            <span className="relative flex h-2 w-2 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-emerald-500"></span>
            </span>
            Fullstack & Mobile Developer
          </div>
        </div>

        {/* 3D Shapes */}
        <div className="relative h-[400px] md:h-[600px] w-full">
          <Shapes />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;