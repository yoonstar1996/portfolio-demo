"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface ReadMeProps {
  clickReadMe: boolean;
  handleClickREADME: () => void;
}

export default function ReadMe({
  clickReadMe,
  handleClickREADME,
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
        <Title>(주)셀럽스타즈</Title>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  overflow: hidden;
  transition: top 0.8S ease;
`;
const Header = styled.div`
  position: absolute;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-readme-header-background-color);
  padding: 0 10px;
  box-shadow: 0 1px 0.3rem hsla(0,0%,80%,.8);
  transition: top 0.8S ease;
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
  position: absolute;
  top: 58px;
  left: 0;
  width: 100%;
  z-index: 11;
  height: 100%;
  padding: 18px;
  background-color: var(--main-background-color-2);
  box-sizing: border-box;
`;
const Title = styled.div`
  
`;
