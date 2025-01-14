import { Fonts } from "@/lib/fonts";
import React from "react";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={` ${Fonts.glaston.className} ${className}`}>{children}</div>
  );
}
