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
        <Title>안녕하세요, 신입 개발자 윤경민입니다.</Title>
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
  /* background: linear-gradient(45deg, #ff8a00, #e52e71, #00aaff, #7f00ff, #ff0086, #ff8a00); */
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a, #333333, #1a1a1a, #2a2a2a, #1a1a1a);
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
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
`;
