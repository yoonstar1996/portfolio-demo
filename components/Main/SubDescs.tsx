"use client";

import React from "react";
import styled from "styled-components";

interface SubDescsProps {
  iconText: string;
  text: string;
  onClick?: (url: string) => void;
  url?: string;
  descText?: string;
}

export default function SubDescs({
  iconText,
  text,
  onClick,
  url,
  descText,
}: SubDescsProps) {
  return (
    <>
      <SubDesc>
        <Flex>
          <SubDescIcon className="material-symbols-outlined">
            {iconText}
          </SubDescIcon>
          <SubDescText>{text}</SubDescText>
        </Flex>
        {onClick && url ? (
          <>
            <SubDescUrl onClick={() => onClick(url)}>{url}</SubDescUrl>
          </>
        ) : (
          <>
            <SubDesc2>{descText}</SubDesc2>
          </>
        )}
      </SubDesc>
    </>
  );
}
const Flex = styled.div`
  display: flex;
  align-items: center;
  min-width: 110px;
  color: var(--main-font-color);
`;
const SubDesc = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
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
