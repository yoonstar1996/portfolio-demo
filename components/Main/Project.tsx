"use client";

import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import ReadMe from "../ReadMe/ReadMe";

interface ProjectProps {
  isDarkMode: boolean;
  projectTitle: string;
  projectSubTitle: string;
  projectImageSrc: any;
  projectSubDescs: {
    iconText: string;
    text: string;
    url?: string;
    onClick?: (url: string) => void;
    descText?: string;
  }[];
}

export default function Project({
  isDarkMode,
  projectTitle,
  projectSubTitle,
  projectImageSrc,
  projectSubDescs,
}: ProjectProps) {
  const [clickReadMe, setClickReadMe] = useState<boolean>(false);
  const handleClickREADME = () => {
    setClickReadMe((pre: boolean) => !pre);
  };

  return (
    <ProjectBox>
      <ReadMe clickReadMe={clickReadMe} handleClickREADME={handleClickREADME} />
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectSubTitle>{projectSubTitle}</ProjectSubTitle>
      <ProjectContent>
        <ProjectImageBox>
          <Image
            src={isDarkMode ? projectImageSrc.dark : projectImageSrc.light}
            alt="celeb_logo"
            fill
          />
        </ProjectImageBox>
        <ReadMeButton onClick={handleClickREADME}>
          <div>자세히보기</div>
          <Icon className="material-symbols-outlined">arrow_right</Icon>
          <div>README</div>
        </ReadMeButton>

        {projectSubDescs.map((subDesc, index) => (
          <SubDesc key={index}>
            <Flex key={index}>
              <SubDescIcon className="material-symbols-outlined">
                {subDesc.iconText}
              </SubDescIcon>
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
  @media screen and (max-width:1200px) {
    width: 90%;
  }
`;
const ProjectTitle = styled.div`
  color: var(--main-font-color);
  font-size: 1.5rem;
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
  height: 130px;
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
`;
const SubDescIcon = styled.i`
  /* font-size: 1.2rem; */
`;
const SubDesc2 = styled.div`
  color: var(--main-font-color);
  line-height: 20px;
`;
const SubDescUrl = styled(SubDesc2)`
  color: var(--main-url-color);
  display: flex;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
