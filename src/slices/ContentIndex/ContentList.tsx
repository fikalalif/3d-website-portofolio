"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import ProjectCarousel from "@/components/ProjectCarousel"; // Pastikan path import benar

gsap.registerPlugin(ScrollTrigger);

type ContentListProps = {
  items: any[];
  contentType: string;
  fallbackItemImage: string;
  viewMoreText?: string;
};

export default function ContentList({
  items,
  contentType,
  fallbackItemImage,
  viewMoreText = "View Project",
}: ContentListProps) {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  // Animasi saat di-scroll (Fade Up)
  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });
      return () => ctx.revert();
    }, component);
  }, []);

  return (
    <div ref={component} className="w-full mt-10">
      <ul className="flex flex-col gap-12 lg:gap-20">
        {items.map((post, index) => {
          const hrefLink = post.data.link || `/${contentType.toLowerCase()}/${post.uid}`;
          const hasGallery = post.data.gallery && post.data.gallery.length > 0;
          const singleImage = post.data.image ? post.data.image.url : fallbackItemImage;
          
          return (
            <li
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="list-item opacity-0 flex flex-col group rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-500 shadow-lg"
            >
              {/* BAGIAN MEDIA (Solid di atas Card) - Tingginya sedikit disesuaikan biar lega */}
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden bg-slate-950 border-b border-slate-800">
                {hasGallery ? (
                  // Panggil Carousel
                  <ProjectCarousel images={post.data.gallery} isPreview={false} />
                ) : (
                  // Single image juga diubah jadi object-contain
                  <div className="w-full h-full p-4 md:p-8 flex items-center justify-center">
                    <img
                      src={singleImage}
                      alt={post.data.title || "Project preview"}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                    />
                  </div>
                )}
              </div>

              {/* BAGIAN TEKS (Judul, Tags, Tombol) */}
              <a
                href={hrefLink}
                target={post.data.link ? "_blank" : "_self"}
                rel={post.data.link ? "noopener noreferrer" : ""}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10 gap-6 cursor-pointer"
                aria-label={post.data.title || ""}
              >
                <div className="flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-cyan-400 transition-colors text-slate-100">
                    {post.data.title}
                  </h3>
                  
                  {/* Deskripsi Project (Jika ada) */}
                  {post.description && (
                    <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-6 text-cyan-300">
                    {post.tags?.map((tag: string, idx: number) => (
                      <span key={idx} className="text-sm font-medium bg-cyan-900/30 border border-cyan-800/50 px-4 py-1.5 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol View Project */}
                <div className="flex items-center gap-2 text-lg font-semibold shrink-0 text-slate-400 group-hover:text-cyan-400 transition-colors mt-4 md:mt-0 bg-slate-950/50 px-6 py-3 rounded-full border border-slate-700 group-hover:border-cyan-500/50">
                  {viewMoreText}{" "}
                  <MdArrowOutward className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 text-2xl" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}