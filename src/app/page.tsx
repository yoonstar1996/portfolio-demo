"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Nav from "../../components/Nav/Nav";

export default function ProjectContainer() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };
  const handleClickAboutMe = () => {
    if (aboutMeRef.current) {
      const navHeight = 58; // Nav의 높이
      const elementTop =
        aboutMeRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = elementTop - navHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  const handleClickProject = () => {
    if (projectRef.current) {
      const navHeight = 58; // Nav의 높이
      const elementTop =
        projectRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = elementTop - navHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <Nav
        isDarkMode={isDarkMode}
        handleDarkMode={handleDarkMode}
        handleClickAboutMe={handleClickAboutMe}
        handleClickProject={handleClickProject}
      />
      <Main
        isDarkMode={isDarkMode}
        aboutMeRef={aboutMeRef}
        projectRef={projectRef}
        handleClickAboutMe={handleClickAboutMe}
        handleClickProject={handleClickProject}
      />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
