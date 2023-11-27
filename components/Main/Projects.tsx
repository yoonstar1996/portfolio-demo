"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Image from "next/image";
import SubDescs from "./SubDescs";
import Project from "./Project";

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
  const handleClickUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Container ref={projectRef}>
      <Title text="Projects" onClick={handleClickProject} />
      <ProjectBox>
        <Project
          isDarkMode={isDarkMode}
          projectTitle="(주)셀럽스타즈"
          projectSubTitle="2023.03 ~ 2023.08 (3인 프로젝트) (인턴)"
          projectImageSrc={{
            dark: "/projects/celeb-logo3.png",
            light: "/projects/celeb-logo1.png",
          }}
          projectSubDescs={[
            {
              iconText: "check",
              text: "주요기능",
              descText:
                "자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구~",
            },
            {
              iconText: "check",
              text: "Github",
              url: "https://github.com/yoonstar1996/celebstars",
              onClick: handleClickUrl,
            },
            {
              iconText: "check",
              text: "URL",
              url: "https://celebstars.co.kr/",
              onClick: handleClickUrl,
            },
            {
              iconText: "check",
              text: "FrontEnd",
              descText: "Next.js, Typescript, Redux, styled-components",
            },
            { iconText: "check", text: "BackEnd", descText: "Nest.js, prisma" },
          ]}
        />
        <Project
          isDarkMode={isDarkMode}
          projectTitle="(주)셀럽스타즈"
          projectSubTitle="2023.03 ~ 2023.08 (3인 프로젝트) (인턴)"
          projectImageSrc={{
            dark: "/projects/celeb-logo3.png",
            light: "/projects/celeb-logo1.png",
          }}
          projectSubDescs={[
            {
              iconText: "check",
              text: "주요기능",
              descText:
                "자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구~",
            },
            {
              iconText: "check",
              text: "Github",
              url: "https://github.com/yoonstar1996/celebstars",
              onClick: handleClickUrl,
            },
            {
              iconText: "check",
              text: "URL",
              url: "https://celebstars.co.kr/",
              onClick: handleClickUrl,
            },
            {
              iconText: "check",
              text: "FrontEnd",
              descText: "Next.js, Typescript, Redux, styled-components",
            },
            { iconText: "check", text: "BackEnd", descText: "Nest.js, prisma" },
          ]}
        />
        <Project
          isDarkMode={isDarkMode}
          projectTitle="(주)셀럽스타즈"
          projectSubTitle="2023.03 ~ 2023.08 (3인 프로젝트) (인턴)"
          projectImageSrc={{
            dark: "/projects/celeb-logo3.png",
            light: "/projects/celeb-logo1.png",
          }}
          projectSubDescs={[
            {
              iconText: "check",
              text: "주요기능",
              descText:
                "자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구자주 부르는 어쩌구~",
            },
            {
              iconText: "check",
              text: "Github",
              url: "https://github.com/yoonstar1996/celebstars",
              onClick: handleClickUrl,
            },
            {
              iconText: "check",
              text: "URL",
              url: "https://celebstars.co.kr/",
              onClick: handleClickUrl,
            },
            {
              iconText: "check",
              text: "FrontEnd",
              descText: "Next.js, Typescript, Redux, styled-components",
            },
            { iconText: "check", text: "BackEnd", descText: "Nest.js, prisma" },
          ]}
        />
      </ProjectBox>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 58px);
  background-color: var(--project-background-color);
  padding: 20px 50px ;
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
