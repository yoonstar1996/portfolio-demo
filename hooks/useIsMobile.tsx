"use client";

import { useEffect, useState } from "react";

export const useIsMobile = (): {
  windowWidth: number;
  isTablet: boolean;
  isMobile: boolean;
  viewPoint: number;
} => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [viewPoint, setViewPoint] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setViewPoint(width);

      if (width <= 1024 && width > 767) {
        setIsTablet(true);
        setIsMobile(false);
      } else if (width <= 767) {
        setIsTablet(false);
        setIsMobile(true);
      } else {
        setIsTablet(false);
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth, isTablet, isMobile, viewPoint };
};
