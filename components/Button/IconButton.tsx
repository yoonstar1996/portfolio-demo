"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface IconButtonProps {
  text: string;
  onClick?: () => void;
}

interface ButtonProps {
  isdarkmode: string;
}

export default function IconButton({ text, onClick }: IconButtonProps) {
  const [darkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (text === "dark_mode") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [text]);
  return (
    <>
      <Button onClick={onClick} isdarkmode={darkMode.toString()}>
        <i className="material-symbols-outlined">{text}</i>
      </Button>
    </>
  );
}

const Button = styled.button<ButtonProps>`
  color: var(--main-font-color);
  font-size: var(--main-font-size-20);
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.isdarkmode === "true" ? "#5448ff" : "#ffbf48")};
  }
`;
