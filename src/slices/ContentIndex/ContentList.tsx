"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

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
  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert();
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hovering, currentItem]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  const contentImages = items.map((item) => {
    return item.data.image ? item.data.image.url : fallbackItemImage;
  });

  useEffect(() => {
    contentImages.forEach((url) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
    });
  }, [contentImages]);

  return (
    <>
      <ul
        ref={component}
        className="grid border-b border-b-slate-100/20"
        onMouseLeave={onMouseLeave}
      >
        {items.map((post, index) => {
          // Fallback urlPrefix jika properti link tidak ada
          const hrefLink = post.data.link || `/${contentType.toLowerCase()}/${post.uid}`;
          
          return (
            <li
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              onMouseEnter={() => onMouseEnter(index)}
              className="list-item opacity-0"
            >
              <a
                href={hrefLink}
                target={post.data.link ? "_blank" : "_self"}
                rel={post.data.link ? "noopener noreferrer" : ""}
                className="group flex flex-col justify-between border-t border-t-slate-100/20 py-10 px-4 md:px-8 text-slate-200 md:flex-row hover:bg-white/5 transition-all duration-500 rounded-2xl"
                aria-label={post.data.title || ""}
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-bold group-hover:text-cyan-300 transition-colors">
                    {post.data.title}
                  </span>
                  {/* Tag warna cyan dengan background tipis */}
                  <div className="flex flex-wrap gap-3 mt-4 text-cyan-400">
                    {post.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="text-sm font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Teks "View Project" dengan animasi panah */}
                <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0 mt-6 md:mt-0 text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {viewMoreText}{" "}
                  <MdArrowOutward className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </li>
          );
        })}

        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[420px] rounded-xl border-2 border-cyan-400/30 bg-cover bg-center opacity-0 transition-[background] duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          style={{
            backgroundImage: currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      </ul>
    </>
  );
}