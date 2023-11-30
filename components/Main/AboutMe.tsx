"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import { handleClickUrl } from "../../common/function/handleClick";
interface AboutMeProps {
  isDarkMode: boolean;
  aboutMeRef: any;
  handleClickAboutMe: () => void;
}

export default function AboutMe({
  isDarkMode,
  aboutMeRef,
  handleClickAboutMe,
}: AboutMeProps) {
  const myRef = useRef(null);

  return (
    <Container ref={aboutMeRef}>
      <Title text="About Me" onClick={handleClickAboutMe} />
      <Information ref={myRef}>
        <ImageContainer>
          <Image src="/aboutMe/mypicture.jpg" alt="my_picture" fill />
        </ImageContainer>
        <Contact>
          <Name>윤경민</Name>
          <Phone>
            <Icon className="material-symbols-outlined">call</Icon>
            <Text>010-8950-0693</Text>
          </Phone>
          <Email>
            <Icon className="material-symbols-outlined">mail</Icon>
            <Text>yagobo1110@naver.com</Text>
          </Email>
          <Github>
            <Image
              src={
                isDarkMode
                  ? "/aboutMe/github-mark-white.png"
                  : "/aboutMe/github-mark.png"
              }
              alt="github_logo"
              width={30}
              height={30}
            />
            <GithubText
              onClick={() => handleClickUrl("https://github.com/yoonstar1996")}
            >
              https://github.com/yoonstar1996
            </GithubText>
          </Github>
        </Contact>
      </Information>
      <SkillBox>
        <Image
          src={"/aboutMe/html.png"}
          alt="html_logo"
          width={100}
          height={100}
        />
        <Image
          src={"/aboutMe/css.png"}
          alt="html_logo"
          width={100}
          height={100}
        />
      </SkillBox>
      <div className="소개글">
        <IntroductionText>
          안녕하세요. 프론트엔드 개발자 <strong>윤경민</strong>입니다.
        </IntroductionText>
        <IntroductionText>
          컴퓨터 공학 전공이 아닌 비전공자로 시작했지만, 작년 8월 국비지원을
          통해 개발의 세계에 발을 디뎠습니다. 눈에 띄는 노력으로 짧은 기간 동안
          많은 것을 배우고 성장할 수 있었습니다.
        </IntroductionText>
        <IntroductionText>
          (주)셀럽스타즈에서의 프론트엔드 개발자 인턴 경험을 통해 실무에서의
          도전과 성취를 맛보았습니다. 현재는 이러한 경험과 기술을 총망라하여
          나만의 포트폴리오를 작성 중이며, 끊임없는 자기개발을 통해 더 나은
          개발자로 성장하기 위해 노력하고 있습니다.
        </IntroductionText>
        <IntroductionText>
          성격적으로는 예민하면서도 꼼꼼한 성격을 가지고 있습니다. 일에 대한
          책임감과 성실함으로 주변과 협업하며 항상 최상의 결과물을 만들어내려고
          노력합니다. 뒤처지거나 남들에게 피해주는 것을 싫어하며, 항상
          긍정적이고 도전적인 마음가짐으로 일에 임하고 있습니다.
        </IntroductionText>
        <IntroductionText>
          더불어, 개인의 성장 뿐만 아니라 팀의 발전에도 기여하고자 합니다. 함께
          일하며 배우고 성장하는 과정에서 좋은 결과물을 만들어내기 위해
          노력하겠습니다.
        </IntroductionText>
        <IntroductionText> 감사합니다.</IntroductionText>
      </div>
    </Container>
  );
}
const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  height: calc(100% - 58px);
  background-color: var(--aboutme-background-color);
  padding: 20px 50px;
  box-sizing: border-box;
  @media all and (max-width:800px) {
    padding: 20px;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width:600px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width:400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 50px;
  @media all and (max-width:1200px) {
    max-width:300px;
    height: 300px;
  }
  @media all and (max-width:800px) {
    max-width:200px;
    min-width: 200px;
    height: 200px;
    margin-right: 30px;
  }
  @media all and (max-width:600px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`  
`;
const Name = styled.div`
  font-size: 2.5rem;
  color: var(--main-font-color);
  margin-bottom: 25px;
  @media all and (max-width:800px) {
    font-size: 2rem;
  }
`;
const Phone = styled(Flex)`
  color: var(--main-font-color);
  margin-bottom: 10px;
`;
const Text = styled.div`
  font-size: 1.2rem;
  margin-left: 10px;
  @media all and (max-width:800px) {
    font-size: 1.1rem;
  }
`;
const Email = styled(Phone)``;
const Github = styled(Email)``;
const Icon = styled.i`
  font-size: 30px;
  @media all and (max-width:800px) {
    font-size: 26px;
  }
`;
const GithubText = styled(Text)`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const SkillBox = styled.div`
  display: flex;
  align-items: center;
`;
const IntroductionText = styled.div`
  font-size: 1.2rem;
  color: var(--main-font-color);
  line-height: 30px;
  margin-bottom: 15px;
`;
