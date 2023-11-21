"use client";

import React from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";

interface MainProps {
  aboutMeRef: any;
  projectRef: any;
}

export default function Main({ aboutMeRef, projectRef }: MainProps) {
  return (
    <Container>
      <Home />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Project projectRef={projectRef} />
    </Container>
  );
}

const Container = styled.main`
  padding-top: 58px;
`;
