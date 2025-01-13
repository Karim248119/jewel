import React from "react";
import Header from "./Header";
import { IoArrowBackSharp } from "react-icons/io5";

export default function Button({
  title,
  className,
  ...props
}: {
  title: string;
  className?: string;
}) {
  return (
    <button
      className={`xl:text-5xl md:text-4xl text-lg group ${className}`}
      {...props}
    >
      <div className="flex gap-3 items-center">
        <Header className=" capitalize ">{title}</Header>
        <IoArrowBackSharp className="rotate-[135deg] group-hover:rotate-180 duration-300" />
      </div>
      <div className="w-full md:h-1 h-[1px] bg-dark" />
    </button>
  );
}
