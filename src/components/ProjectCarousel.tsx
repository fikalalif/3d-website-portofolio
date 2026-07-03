"use client";

import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import clsx from "clsx";

type ImageType = { url: string; alt: string };

export default function ProjectCarousel({ images, isPreview = false }: { images: ImageType[]; isPreview?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      // KESELURUHAN CAROUSEL: Efek kaca buram (Glassmorphism) yang mewah
      className="group relative w-full h-full overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={clsx(
            // PERUBAHAN UTAMA: Tambahan pb-28 (padding bawah) agar gambar otomatis naik & tidak nabrak teks
            "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center p-4 pb-28 md:p-8 md:pb-32",
            index === currentIndex
              ? "z-10 scale-100 opacity-100"
              : "z-0 scale-110 opacity-0"
          )}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="h-full w-full object-contain drop-shadow-2xl"
          />
          {/* Gradien gelap di bawah agar panel kaca putih lebih menonjol */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
          
          {/* PANEL DETAIL (Glassmorphism) */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex w-[90%] md:w-auto justify-center">
            <span className="inline-block px-6 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm md:text-base font-medium text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center tracking-wide">
              {img.alt}
            </span>
          </div>
        </div>
      ))}

      {/* Tombol Navigasi (Glassmorphism) */}
      {!isPreview && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-3 text-white opacity-0 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 group-hover:opacity-100 md:left-6 md:p-4 shadow-lg"
          >
            <MdArrowBackIosNew size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-3 text-white opacity-0 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 group-hover:opacity-100 md:right-6 md:p-4 shadow-lg"
          >
            <MdArrowForwardIos size={24} />
          </button>
        </>
      )}

      {/* Indikator Titik / Pill (Glassmorphism) */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-lg">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={clsx(
              "h-2 rounded-full transition-all duration-500",
              index === currentIndex
                ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}