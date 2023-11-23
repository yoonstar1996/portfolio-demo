"use client";

import React from "react";
import styled from "styled-components";

interface TitleProps {
  text: string;
  onClick: () => void;
}

export default function Title({ text, onClick }: TitleProps) {
  return (
    <>
      <Text>
        <LinkIcon className="material-symbols-outlined" onClick={onClick}>
          link
        </LinkIcon>
        <TitleText>{text}</TitleText>
      </Text>
    </>
  );
}
const Text = styled.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  font-size: 2rem;
  padding: 50px 0;
`;
const LinkIcon = styled.i`
  color: var(--main-font-color);
  font-size: 2rem;
  rotate: calc(-60deg);
  opacity: 0.8;
  margin-right: 1px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const TitleText = styled.div`
  border-bottom: 1.5px solid var(--main-font-color);
  padding-bottom: 8px;
`;
