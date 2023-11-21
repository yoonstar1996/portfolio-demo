"use client";

import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Nav from "../../components/Nav/Nav";

export default function ProjectContainer() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const handleClickAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };
  const handleClickProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <>
      <Nav
        handleClickAboutMe={handleClickAboutMe}
        handleClickProject={handleClickProject}
      />
      <Main aboutMeRef={aboutMeRef} projectRef={projectRef} />
      <Footer />
    </>
  );
}
