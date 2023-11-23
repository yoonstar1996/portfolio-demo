"use client";

import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";

interface ProjectProps {
  projectRef: any;
  handleClickProject: () => void;
}

export default function Projects({
  projectRef,
  handleClickProject,
}: ProjectProps) {
  return (
    <Container ref={projectRef}>
      <Title text="Projects" onClick={handleClickProject} />
      <Project>
        <ProjectTitle>(주)셀럽스타즈</ProjectTitle>
        <ProjectDesc>2023.03 ~ 2023.08 (3人 프로젝트) (인턴)</ProjectDesc>
      </Project>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 58px);
  background-color: var(--main-background-color-3);
  padding: 20px 50px ;
  box-sizing: border-box;
`;

const Project = styled.div`
  border-radius: 10px;
  background-color: var(--project-box-background);
  height: 30vh;
  box-shadow: 1rem 1rem 1rem 0 var(--main-project-box-shadow);
  padding: 48px;
`;
const ProjectTitle = styled.div`
  color: var(--main-font-color);
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 13px;
`;
const ProjectDesc = styled.div`
  text-align: center;
  color: var(--main-font-color);
  opacity: 0.8;
`;
