"use client";

import React from "react";
import styled from "styled-components";

interface AboutMeProps {
  aboutMeRef: any;
}

export default function AboutMe({ aboutMeRef }: AboutMeProps) {
  return (
    <Container ref={aboutMeRef}>
      <div>AboutMe</div>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 58px);
  background-color: #ff2fcb;
`;
