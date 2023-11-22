"use client";

import React from "react";
import styled from "styled-components";
import NavButton from "../Button/NavButton";
import IconButton from "../Button/IconButton";

interface NavProps {
  isDarkMode: boolean;
  handleDarkMode: () => void;
  handleClickAboutMe: () => void;
  handleClickProject: () => void;
}

export default function Nav({
  isDarkMode,
  handleDarkMode,
  handleClickAboutMe,
  handleClickProject,
}: NavProps) {
  const handleClickHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Logo onClick={handleClickHome}>{`Yoonstar's Portfolio`}</Logo>
      <Menu>
        <NavButton text="Home" onClick={handleClickHome} />
        <NavButton text="About Me" onClick={handleClickAboutMe} />
        <NavButton text="Project" onClick={handleClickProject} />
      </Menu>
      <SideMenu>
        <IconButton
          text={isDarkMode ? "dark_mode" : "light_mode"}
          onClick={handleDarkMode}
        />
        {/* <IconButton text="버튼2" /> */}
      </SideMenu>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-background-color-2);
  padding: 0 30px;
  border-bottom: var(--main-nav-border-bottom);
  box-sizing: border-box;
`;
const Logo = styled.div`
  color: var(--main-font-color);
  font-size: var(--main-font-size-20);
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const SideMenu = styled(Menu)`
`;
const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
`;
