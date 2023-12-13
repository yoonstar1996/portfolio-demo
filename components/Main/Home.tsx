"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import HomeButton from "../Button/HomeButton";

interface HomeProps {
  handleClickAboutMe: () => void;
}

export default function Home({ handleClickAboutMe }: HomeProps) {
  return (
    <Container>
      <BackgroundAnimation />
      <Content>
        <Title>안녕하세요.</Title>
        <Title>성장 가능성이 많은 프론트엔드 개발자입니다.</Title>
        <Title>
          예민하고 꼼꼼한, 그리고 남에게 피해 주는 것을 싫어하는 성격이 저의
          장점입니다.
        </Title>
        <HomeButton text="About Me" onClick={handleClickAboutMe} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 58px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width:787px) {
    padding: 0 20px;
  }
`;

const animation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 58;
  left: 0;
  width: 100%;
  height: calc(100vh - 58px);
  background: var(--main-home-background-color);
  background-size: 600% 600%;
  animation: ${animation} 20s ease infinite;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff;
  @media all and (max-width:767px) {
    font-size: 1.1rem;
    line-height: 2rem;
  }
 `;

const Subtitle = styled.h2`
  font-size: 1.5em;
`;
