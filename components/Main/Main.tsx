"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";

interface MainProps {
  isDarkMode: boolean;
  aboutMeRef: any;
  projectRef: any;
  handleClickAboutMe: () => void;
}

export default function Main({
  isDarkMode,
  aboutMeRef,
  projectRef,
  handleClickAboutMe,
}: MainProps) {
  const [showScrollBox, setShowScrollBox] = useState(false);
  const handleClickScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    // Adjust the threshold as needed
    if (scrollPercentage > 40) {
      setShowScrollBox(true);
    } else {
      setShowScrollBox(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showScrollBox]);

  return (
    <Container>
      <Home handleClickAboutMe={handleClickAboutMe} />
      <AboutMe isDarkMode={isDarkMode} aboutMeRef={aboutMeRef} />
      <Project projectRef={projectRef} />
      {showScrollBox && (
        <ScrollBox
          onClick={handleClickScrollTop}
          show={showScrollBox.toString()}
        >
          <Arrow className="material-symbols-outlined">expand_less</Arrow>
        </ScrollBox>
      )}
    </Container>
  );
}

const Container = styled.main`
  padding-top: 58px;
`;

const ScrollBox = styled.div<{ show: string }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  right: 30px;
  z-index: 1;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  opacity: 0.8;
  background-color: var(--main-background-color-2);
  border: 1px solid #ddd;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const Arrow = styled.i`
  font-size: 22px;
  color: var(--main-font-color);
`;
