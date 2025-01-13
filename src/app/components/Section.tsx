"use client";
import { useInView } from "@/hooks/useInView";
import React, { useRef } from "react";

export default function Section({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.5);
  return <section>{}</section>;
}
