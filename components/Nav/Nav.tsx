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
        <NavButton text="Projects" onClick={handleClickProject} />
      </Menu>
      <SideMenu>
        <IconButton
          text={isDarkMode ? "light_mode" : "dark_mode"}
          onClick={handleDarkMode}
        />
        {/* <IconButton text="버튼2" /> */}
      </SideMenu>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-background-color-2);
  padding: 0 10px;
  box-shadow: 0 1px 0.3rem hsla(0,0%,80%,.8);
  box-sizing: border-box;
`;
const Logo = styled.div`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: #ff4848;
  }
  @media all and (max-width:767px) {
    font-size: 18px;
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const SideMenu = styled(Menu)`
`;
