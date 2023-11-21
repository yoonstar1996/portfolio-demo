"use client";

import React from "react";
import styled from "styled-components";
import NavButton from "../Button/NavButton";
import IconButton from "../Button/IconButton";
import Image from "next/image";

interface NavProps {
  handleClickAboutMe: () => void;
  handleClickProject: () => void;
}

export default function Nav({
  handleClickAboutMe,
  handleClickProject,
}: NavProps) {
  const handleClickHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      {/* <ImageContainer>
        <Image src="/logo.png" alt="logo_image" fill property="100" />
      </ImageContainer> */}
      <div>로고</div>
      <Menu>
        <NavButton text="Home" onClick={handleClickHome} />
        <NavButton text="About Me" onClick={handleClickAboutMe} />
        <NavButton text="Project" onClick={handleClickProject} />
      </Menu>
      <SideMenu>
        <IconButton text="버튼1" />
        <IconButton text="버튼2" />
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
  background-color: var(--main-background-color);
  /* padding: var(--main-padding-col-size-2); */
  border-bottom: var(--main-nav-border-bottom);
  box-sizing: border-box;
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
