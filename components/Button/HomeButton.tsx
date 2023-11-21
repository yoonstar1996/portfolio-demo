"use client";

import React from "react";
import styled from "styled-components";

interface HomeButtonProps {
  text: string;
  onClick?: () => void;
}

export default function HomeButton({ text, onClick }: HomeButtonProps) {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
}

const Button = styled.button`
  color: var(--main-font-color);
  margin: var(--main-margin-col-size-1);
  font-size: var(--main-font-size);
  border: var(--main-border-color);
  padding: var(--main-padding-size-2);
  border-radius: var(--main-border-radius);
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
