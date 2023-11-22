"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface AboutMeProps {
  isDarkMode: boolean;
  aboutMeRef: any;
}

export default function AboutMe({ isDarkMode, aboutMeRef }: AboutMeProps) {
  const handleClickGithub = () => {
    window.open("https://github.com/yoonstar1996", "_blank");
  };

  return (
    <Container ref={aboutMeRef}>
      <Information>
        <ImageContainer>
          <Image src="/mypicture.jpg" alt="my_picture" fill />
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
              src={isDarkMode ? "/github-mark-white.png" : "/github-mark.png"}
              alt="github_logo"
              width={30}
              height={30}
            />
            <GithubText onClick={handleClickGithub}>
              https://github.com/yoonstar1996
            </GithubText>
          </Github>
        </Contact>
      </Information>
      <div className="가운데"></div>
      <div className="소개글"></div>
    </Container>
  );
}
const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  /* position: relative; */
  height: calc(100vh - 58px);
  background-color: var(--main-background-color);
  padding: 50px 100px;
  box-sizing: border-box;
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 50px;
`;
const Contact = styled.div`  
`;
const Name = styled.div`
  font-size: 3rem;
  color: var(--main-font-color);
  margin-bottom: 25px;
`;
const Phone = styled(Flex)`
  color: var(--main-font-color);
  margin-bottom: 5px;
`;
const Text = styled.div`
  font-size: 1.5rem;
  margin-left: 10px;
`;
const Email = styled(Phone)``;
const Github = styled(Email)``;
const Icon = styled.i`
  font-size: 30px;
`;
const GithubText = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`;
