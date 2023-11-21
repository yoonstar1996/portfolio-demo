"use client";

import React from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";

interface MainProps {
  aboutMeRef: any;
  projectRef: any;
  handleClickAboutMe: () => void;
}

export default function Main({
  aboutMeRef,
  projectRef,
  handleClickAboutMe,
}: MainProps) {
  return (
    <Container>
      <Home handleClickAboutMe={handleClickAboutMe} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Project projectRef={projectRef} />
    </Container>
  );
}

const Container = styled.main`
  padding-top: 58px;
`;
