"use client";

import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  text: string;
  onClick?: () => void;
}

export default function IconButton({ text, onClick }: IconButtonProps) {
  return (
    <>
      <Button onClick={onClick}>
        <i className="material-symbols-outlined">{text}</i>
      </Button>
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
