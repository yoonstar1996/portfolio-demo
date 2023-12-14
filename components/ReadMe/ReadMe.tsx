"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectInfo } from "../../common/interface/project";
import Image from "next/image";

interface ReadMeProps {
  clickReadMe: boolean;
  handleClickREADME: () => void;
  projectInfo: ProjectInfo;
  windowWidth: number;
}

export default function ReadMe({
  clickReadMe,
  handleClickREADME,
  projectInfo,
  windowWidth,
}: ReadMeProps) {
  const ReadMeRef = useRef<HTMLDivElement>(null);
  const HeaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ReadMeRef.current) {
      ReadMeRef.current.style.top = clickReadMe ? "0" : "-100%";
    }
    if (HeaderRef.current) {
      HeaderRef.current.style.top = clickReadMe ? "0" : "-58px";
    }
    const body = document.body;
    body.style.overflow = clickReadMe ? "hidden" : "auto";

    // 컴포넌트 언마운트 시에 스타일 초기화
    return () => {
      body.style.overflow = "auto";
    };
  }, [clickReadMe]);

  return (
    <Container ref={ReadMeRef}>
      <Header ref={HeaderRef}>
        <HeaderText>READ.md</HeaderText>
        <CloseBtn
          className="material-symbols-outlined"
          onClick={handleClickREADME}
        >
          close
        </CloseBtn>
      </Header>
      <Content>
        <Title>{projectInfo.projectTitle}</Title>
        {windowWidth <= 767 &&
          projectInfo.projectSubDescs.map(
            (item, index) =>
              (item.text === "Github" || item.text === "URL") && (
                <Flex key={index}>
                  <GitHubText>{item.text}</GitHubText>
                  <GitHubUrl
                    onClick={() => item?.url && item?.onClick?.(item.url)}
                  >
                    {item.url}
                  </GitHubUrl>
                </Flex>
              )
          )}
        {/* <SubTitle>📌 담당 페이지</SubTitle>
        <SummaryContent>{projectInfo.projectSummary}</SummaryContent> */}
        {projectInfo.projectMainFunction && (
          <>
            {/* <SubTitle>* 주요기능</SubTitle> */}
            <SubTitle>📄 주요기능</SubTitle>
            {projectInfo.projectMainFunction.map((item, index) => (
              <MainFunctionContent key={index}>
                {item.charAt(0) === "/" ? (
                  <ProjectImageBox>
                    <StyledImage src={item} alt={`image_${index}`} fill />
                  </ProjectImageBox>
                ) : item.charAt(0) === "@" ? (
                  <SubFunctions>
                    <SubFunction>{item.substring(1)}</SubFunction>
                  </SubFunctions>
                ) : item.charAt(0) === "#" ? (
                  <Sub2Functions>
                    <Sub2Function>{item.substring(1)}</Sub2Function>
                  </Sub2Functions>
                ) : item.charAt(0) === "$" ? (
                  <Sub3Functions>
                    <Sub3Function>{item.substring(1)}</Sub3Function>
                  </Sub3Functions>
                ) : (
                  <MainFunctions>
                    <MainFunction>{item}</MainFunction>
                  </MainFunctions>
                )}
              </MainFunctionContent>
            ))}
          </>
        )}

        <SubTitle>🛠️ Technology Stack(s)</SubTitle>
        <TechSkills>
          <TechSkill>
            Frontend : {projectInfo.projectTechStack.frontEnd}
          </TechSkill>
          <TechSkill>
            Backend : {projectInfo.projectTechStack.backEnd}
          </TechSkill>
        </TechSkills>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  overflow: hidden;
  transition: top 0.5S ease;
`;
const Header = styled.div`
  position: absolute;
  top: -58px;
  left: 0;
  z-index: 12;
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-readme-header-background-color);
  padding: 0 10px;
  box-shadow: 0 1px 0.3rem hsla(0,0%,80%,.8);
  transition: top 0.5S ease;
  box-sizing: border-box;

`;
const HeaderText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--sub-font-color);
`;
const CloseBtn = styled.i`
  color: var(--sub-font-color);
  &:hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  z-index: 11;
  overflow-y: auto;
  padding: 18px 150px;
  width: 100%;
  height: calc(100% - 58px);
  margin-top: 58px;
  background-color: var(--main-background-color-2);
  box-sizing: border-box;
  @media all and (max-width:1200px) {
    padding: 18px 100px;
  }
  @media all and (max-width:767px) {
    padding: 18px 30px;
  }
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 20px;
  margin-bottom: 28px;
  border-bottom: var(--main-border-bottom);
  color: var(--main-font-color);
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 15px;
  color: var(--main-font-color);
  @media all and (max-width:767px) {
    font-size: 20px;
  }
`;
const SummaryContent = styled.div`
  margin-bottom: 32px;
  color: var(--main-font-color);
  line-height: 28px;
`;
const MainFunctions = styled.ul`
  padding-left: 20px;
  color: var(--main-font-color);
  margin-bottom: 16px;
`;
const MainFunction = styled.li`
  line-height: 20px;
  font-weight: 600;
`;
const SubFunctions = styled(MainFunctions)`
  padding-left: 35px;
`;
const SubFunction = styled.li`
  list-style: circle;
  line-height: 20px;
  font-weight: 500;
`;
const Sub2Functions = styled(MainFunctions)`
  padding-left: 50px;
`;
const Sub2Function = styled(SubFunction)`
  list-style: square;
  font-weight: 500;
`;
const Sub3Functions = styled(MainFunctions)`
  padding-left: 15px;
`;
const Sub3Function = styled(SubFunction)`
  list-style: none;
  font-weight: 600;
`;
const MainFunctionContent = styled.div`

`;
const ProjectImageBox = styled.div`
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 400px;
  margin-bottom: 32px;
  margin-left: 20px;
`;
const StyledImage = styled(Image)``;
const TechSkills = styled.ul`
  padding-left: 20px;
  color: var(--main-font-color);
`;
const TechSkill = styled.li`
  line-height: 24px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 20px;
  color: var(--main-font-color);
`;
const GitHubText = styled.div`
  display: inline-block;
  min-width: 65px;
  line-height: 23px;
  font-weight: 600;
  &::before {
    content: "";
    border-left: var(--main-border-left);
    padding-left: 4px;
  }
`;
const GitHubUrl = styled.div`
  line-height: 18px;
  color: var(--main-url-color);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
