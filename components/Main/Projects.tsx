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
              text: "간단한 소개",
              descText:
                "(주)셀럽스타즈는 오디션, 캐스팅, 아르바이트 등을 포함한 모델과 배우 캐스팅에 특화된 전문 플랫폼 입니다.",
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
          projectTitle="SGT Market"
          projectSubTitle="2022.09 ~ 2022.10 (4인 프로젝트)"
          projectImageSrc={{
            dark: "/projects/sgt-banner.jpg",
            light: "/projects/sgt-banner.jpg",
          }}
          projectSubDescs={[
            {
              iconText: "check",
              text: "간단한 소개",
              descText:
                "SGT Market은 중고거래 사이트이자 나눔을 하는 사이트입니다.",
            },
            {
              iconText: "check",
              text: "Github",
              url: "https://github.com/yoonstar1996/kdt--2project",
              onClick: handleClickUrl,
            },
            // {
            //   iconText: "check",
            //   text: "URL",
            //   url: "https://celebstars.co.kr/",
            //   onClick: handleClickUrl,
            // },
            {
              iconText: "check",
              text: "FrontEnd",
              descText: "HTML, CSS, Javascript, jQuery, axios",
            },
            {
              iconText: "check",
              text: "BackEnd",
              descText: "Node.js, express",
            },
          ]}
        />
        <Project
          isDarkMode={isDarkMode}
          projectTitle="Dingon"
          projectSubTitle="2022.10 ~ 2022.19 (5인 프로젝트)"
          projectImageSrc={{
            dark: "/projects/dingon-banner.png",
            light: "/projects/dingon-banner.png",
          }}
          projectSubDescs={[
            {
              iconText: "check",
              text: "간단한 소개",
              descText:
                "dingon은 커뮤니티 사이트 입니다. 자신만의 생각을 적고 남들과 공유해보세요.",
            },
            {
              iconText: "check",
              text: "Github",
              url: "https://github.com/yoonstar1996/dingon/tree/main",
              onClick: handleClickUrl,
            },
            // {
            //   iconText: "check",
            //   text: "URL",
            //   url: "https://celebstars.co.kr/",
            //   onClick: handleClickUrl,
            // },
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
