"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Project from "./Project";
import {
  beerModeProject,
  celebProject,
  chatProject,
  dingonProject,
  sgtProject,
  starbucksProject,
} from "../../common/data/projectData";

interface ProjectProps {
  projectRef: any;
  handleClickProject: () => void;
  isDarkMode: boolean;
}

export default function Projects({
  projectRef,
  handleClickProject,
  isDarkMode,
}: ProjectProps) {
  return (
    <Container ref={projectRef}>
      <Title text="Projects" onClick={handleClickProject} />
      <ProjectBox>
        <Project isDarkMode={isDarkMode} projectInfo={celebProject} />
        <Project isDarkMode={isDarkMode} projectInfo={sgtProject} />
        <Project isDarkMode={isDarkMode} projectInfo={dingonProject} />
        <Project isDarkMode={isDarkMode} projectInfo={beerModeProject} />
        <Project isDarkMode={isDarkMode} projectInfo={starbucksProject} />
        <Project isDarkMode={isDarkMode} projectInfo={chatProject} />
      </ProjectBox>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 58px);
  background-color: var(--project-background-color);
  padding: 20px 50px 100px;
  box-sizing: border-box;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  @media all and (max-width:1200px) {
    justify-content: center;
  }
`;
