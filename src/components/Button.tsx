import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

type ButtonProps = {
  linkField: string;
  label: string;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  return (
    <Link
      href={linkField}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500 bg-slate-950 px-6 py-2 font-bold text-cyan-400 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-full bg-cyan-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2 group-hover:text-slate-950 transition-colors duration-300">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
}