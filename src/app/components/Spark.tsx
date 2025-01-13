import React from "react";

export default function Spark({
  className,
  variant,
}: {
  className?: string;
  variant: "gold-light" | "gold-dark" | "dark" | "light";
}) {
  return (
    <div
      className={`relative md:w-14 w-8 aspect-square overflow-hidden ${
        variant === "gold-light" || variant === "gold-dark"
          ? "bg-gold"
          : variant === "dark"
          ? "bg-dark"
          : "bg-light"
      }`}
    >
      <div
        className={`absolute md:-top-7 -top-4 md:left-7 left-4 h-full w-full rounded-full ${
          variant === "gold-dark" || variant === "light"
            ? "bg-dark"
            : "bg-light"
        }`}
      ></div>
      <div
        className={`absolute md:-top-7 -top-4 md:-left-7 -left-4 h-full w-full rounded-full ${
          variant === "gold-dark" || variant === "light"
            ? "bg-dark"
            : "bg-light"
        }`}
      ></div>
      <div
        className={`absolute md:-bottom-7 -bottom-4 md:left-7 left-4 h-full w-full bg-dark rounded-full ${
          variant === "gold-dark" || variant === "light"
            ? "bg-dark"
            : "bg-light"
        }`}
      ></div>
      <div
        className={`absolute md:-bottom-7 -bottom-4 md:-left-7 -left-4 h-full w-full bg-dark rounded-full ${
          variant === "gold-dark" || variant === "light"
            ? "bg-dark"
            : "bg-light"
        }`}
      ></div>
    </div>
  );
}
