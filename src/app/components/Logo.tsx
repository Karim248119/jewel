import { Fonts } from "@/lib/fonts";
import React from "react";

export default function Logo({ className }: { className: string }) {
  return (
    <div className={` ${Fonts.meaCulpa.className} ${className}`}>Jewel</div>
  );
}
