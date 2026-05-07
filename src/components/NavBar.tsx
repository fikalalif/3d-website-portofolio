"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

type Settings = {
  name: string;
  nav_item: { link: string; label: string }[];
  cta_link: string;
  cta_label: string;
};

function NameLogo({ name }: { name: string | undefined }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-2xl font-black tracking-tighter text-slate-100 drop-shadow-md"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({ settings, pathname }: { settings: Settings; pathname: string }) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-4 bg-transparent py-0 md:flex">
      {settings.nav_item.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <Link
              href={link}
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-300 transition-colors hover:text-cyan-400",
              )}
              aria-current={pathname === link ? "page" : undefined}
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-cyan-500/20 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  pathname === link ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>
          {index < settings.nav_item.length - 1 && (
            <span className="hidden text-xl font-thin text-slate-600 md:inline" aria-hidden="true">
              /
            </span>
          )}
        </React.Fragment>
      ))}
      <li>
        <Button linkField={settings.cta_link} label={settings.cta_label} className="ml-4" />
      </li>
    </div>
  );
}

export default function NavBar({ settings }: { settings: Settings }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="w-full">
      
      {/* KOTAK KACA: Sekarang dipasang di <ul> saja biar menu mobile tidak terjebak */}
      <ul className="flex items-center justify-between bg-slate-950/60 backdrop-blur-md border border-white/10 py-2 px-4 md:py-3 md:px-6 rounded-full shadow-2xl shadow-cyan-500/10">
        <NameLogo name={settings.name} />
        
        {/* Tombol Hamburger Mobile */}
        <button
          aria-expanded={open}
          aria-label="Open menu"
          className="block p-1 text-2xl text-slate-200 md:hidden"
          onClick={() => setOpen(true)}
        >
          <MdMenu />
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {settings.nav_item.map(({ link, label }) => (
            <li key={label}>
              <Link
                href={link}
                className={clsx(
                  "relative px-3 py-1 text-base font-bold transition-colors hover:text-cyan-400",
                  pathname === link ? "text-cyan-400" : "text-slate-300"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <Button linkField={settings.cta_link} label={settings.cta_label} />
        </div>
      </ul>

      {/* OVERLAY MENU MOBILE: Sekarang bebas 1 layar penuh */}
      <div
        className={clsx(
          "fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-8 bg-slate-950/98 backdrop-blur-3xl transition-transform duration-500 ease-in-out md:hidden",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <button
          aria-label="Close menu"
          className="absolute right-8 top-8 p-2 text-4xl text-slate-200"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </button>

        <div className="flex flex-col items-center gap-8">
          {settings.nav_item.map(({ link, label }) => (
            <li key={label} className="list-none">
              <Link
                href={link}
                className="text-5xl font-black text-slate-100 hover:text-cyan-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          
          <li className="list-none mt-4" onClick={() => setOpen(false)}>
            <Button 
              linkField={settings.cta_link} 
              label={settings.cta_label} 
              className="text-xl px-8 py-4" 
            />
          </li>
        </div>
      </div>

    </nav>
  );
}