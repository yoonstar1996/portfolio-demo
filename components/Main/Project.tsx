"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReadMe from "../ReadMe/ReadMe";
import { ProjectInfo } from "../../common/interface/project";

interface ProjectProps {
  isDarkMode: boolean;
  projectInfo: ProjectInfo;
}

export default function Project({ isDarkMode, projectInfo }: ProjectProps) {
  const [clickReadMe, setClickReadMe] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleClickREADME = () => {
    setClickReadMe((pre: boolean) => !pre);
  };

  // 창 크기가 변경될 때마다 실행되는 이벤트 핸들러
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // 컴포넌트가 마운트될 때 한 번 실행되는 useEffect
  useEffect(() => {
    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <ProjectBox>
      <ReadMe
        clickReadMe={clickReadMe}
        handleClickREADME={handleClickREADME}
        projectInfo={projectInfo}
        windowWidth={windowWidth}
      />
      <ProjectTitle>{projectInfo.projectTitle}</ProjectTitle>
      <ProjectSubTitle>{projectInfo.projectSubTitle}</ProjectSubTitle>
      <ProjectContent>
        <ProjectImageBox>
          <Image
            src={
              isDarkMode
                ? projectInfo.projectImageSrc.dark
                : projectInfo.projectImageSrc.light
            }
            alt={projectInfo.projectImageAlt}
            fill
          />
        </ProjectImageBox>
        {windowWidth > 767 && (
          <ReadMeButton onClick={handleClickREADME}>
            <div>자세히보기</div>
            <Icon className="material-symbols-outlined">arrow_right</Icon>
            <div>README</div>
          </ReadMeButton>
        )}

        {windowWidth > 767 &&
          projectInfo.projectSubDescs.map((subDesc, index) => (
            <SubDesc key={index}>
              <Flex>
                <SubDescText>{subDesc.text}</SubDescText>
              </Flex>
              {subDesc.onClick && subDesc.url ? (
                <>
                  <SubDescUrl
                    onClick={() =>
                      subDesc?.url && subDesc?.onClick?.(subDesc.url)
                    }
                  >
                    {subDesc?.url}
                  </SubDescUrl>
                </>
              ) : (
                <>
                  <SubDesc2>{subDesc.descText}</SubDesc2>
                </>
              )}
            </SubDesc>
          ))}

        {windowWidth <= 767 &&
          projectInfo.projectSubDescs.slice(0, 1).map((subDesc, index) => (
            <>
              <SubDesc>
                <Flex>
                  <SubDescText>{subDesc.text}</SubDescText>
                </Flex>
                <SubDesc2>{subDesc.descText}</SubDesc2>
              </SubDesc>
            </>
          ))}

        {windowWidth <= 767 && (
          <ReadMeButton onClick={handleClickREADME}>
            <div>자세히보기</div>
            <Icon className="material-symbols-outlined">arrow_right</Icon>
            <div>README</div>
          </ReadMeButton>
        )}
      </ProjectContent>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  border-radius: 10px;
  background-color: var(--project-box-background);
  box-shadow: 1rem 1rem 1rem 0 var(--main-project-box-shadow);
  padding: 48px;
  box-sizing: border-box;
  width: 49%;
  word-break: break-all;
  @media screen and (max-width:1200px) {
    width: 90%;
  }
  @media all and (max-width:767px) {
    padding: 36px;
  }
`;
const ProjectTitle = styled.div`
  color: var(--main-font-color);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 13px;
`;
const ProjectSubTitle = styled.div`
  text-align: center;
  color: var(--main-font-color);
  opacity: 0.8;
  margin-bottom: 15px;
`;
const ProjectContent = styled.div`
  
`;
const ProjectImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
`;
const ReadMeButton = styled.div`
  display: inline-flex;
  align-items: center;
  color: var(--sub-font-color);
  padding: 8px 16px;
  border-radius: 5px;
  background-color: var(--main-readme-button-background-color);
  font-size: 20px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  };
  @media all and (max-width:767px) {
    font-size: 18px;
    display: flex;
    margin: 15px 0;
    justify-content: center;
  }
`;
const Icon = styled.i`
  font-size: 24px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  min-width: 130px;
  color: var(--main-font-color);
  @media all and (max-width:767px) {
    margin-bottom: 5px;
  }
`;
const SubDesc = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  @media screen and (max-width:767px) {
    display: block;
  }
`;
const SubDescText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-block;
  line-height: 23px;
  &::before {
    content: "✔";
    display: inline;
    padding-right: 0.5rem;
    @media all and (max-width:767px) {
      content: "";
      border-left: var(--main-border-left);
    }
  }
`;
const SubDescIcon = styled.i`
  /* font-size: 1.2rem; */
`;
const SubDesc2 = styled.div`
  color: var(--main-font-color);
  line-height: 25px;
`;
const SubDescUrl = styled(SubDesc2)`
  color: var(--main-url-color);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media all and (max-width:767px) {
  }
`;
