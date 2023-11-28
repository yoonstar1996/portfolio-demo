"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { handleClickUrl } from "../../common/function/handleClick";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <Container>
      <ImageContainer>
        <StyleImage
          src={
            isDarkMode
              ? "/aboutMe/github-mark-white.png"
              : "/aboutMe/github-mark-white.png"
          }
          alt="github_logo"
          width={44}
          height={44}
          onClick={() => handleClickUrl("https://github.com/yoonstar1996")}
        />
        <StyleImage
          src={
            isDarkMode ? "/sns/instagram-dark.png" : "/sns/instagram-dark.png"
          }
          alt="github_logo"
          width={44}
          height={44}
          isdarkmode={isDarkMode.toString()}
          onClick={() =>
            handleClickUrl("https://www.instagram.com/yoonstar96/")
          }
        />
      </ImageContainer>
      <CopyRight>
        ©{new Date().getFullYear()}. Yoon KyeongMin. All Rights Reserved.
      </CopyRight>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 11rem;
  text-align: center;
  background-color: #222;
  padding: 48px 0 0px;
  box-shadow: 0.3rem 1px 0 hsla(0,0%,80%,.8);
  box-sizing: border-box;
`;
const ImageContainer = styled.div`
  margin-bottom: 16px;
`;
const StyleImage = styled(Image)<{ isdarkmode: string }>`
  margin: 0 8px;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;
const CopyRight = styled.div`
  color: #fff;
  font-size: 14px;
`;
