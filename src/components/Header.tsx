import React from "react";
import NavBar from "@/components/NavBar";
import { settings } from "@/data/staticData";

export default function Header() {
  return (
    // Padding p-4 diubah jadi p-2 untuk mobile, p-4 untuk md (desktop)
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:top-4 md:p-4 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <NavBar settings={settings} />
      </div>
    </header>
  );
}