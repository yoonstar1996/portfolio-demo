"use client";

import React from "react";
import styled from "styled-components";

interface ProjectProps {
  projectRef: any;
}

export default function Project({ projectRef }: ProjectProps) {
  return (
    <Container ref={projectRef}>
      <div>Project</div>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 58px);
  background-color: #bd2fff;
`;
