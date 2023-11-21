"use client";

import React from "react";
import styled from "styled-components";

interface NavButtonProps {
  text: string;
  onClick?: () => void;
}

export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
}

const Button = styled.button`
  margin: var(--main-margin-col-size-1);
  font-size: var(--main-font-size);
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
