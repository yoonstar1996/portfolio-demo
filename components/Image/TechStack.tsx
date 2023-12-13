"use client";

import Image from "next/image";
import React from "react";

interface TechStackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function TechStack({ src, alt, width, height }: TechStackProps) {
  return (
    <>
      <Image src={src} alt={alt} width={59} height={24} />
    </>
  );
}
