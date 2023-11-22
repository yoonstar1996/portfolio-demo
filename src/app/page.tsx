"use client";

import { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Nav from "../../components/Nav/Nav";

export default function ProjectContainer() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
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
      aboutMeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleClickProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
      />
      <Footer />
    </>
  );
}
