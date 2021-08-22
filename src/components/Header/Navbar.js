import React from "react";
import { english } from "../../data/data";
import { CgShapeHexagon } from "react-icons/cg";
import {
  NavbarContainer,
  HomeIconContainer,
  NavLinkContainer,
  NavOL,
  NavList,
  NavLinks,
  ResumeButton,
  ResumeRouterLink,
} from "../StyledComponents/NavbarElements";

function Navbar() {
  const { about, project, contact, resume } = english.navbar;
  return (
    <NavbarContainer>
      <HomeIconContainer>
        <CgShapeHexagon />
      </HomeIconContainer>
      <NavLinkContainer>
        <NavOL>
          <NavList>
            <NavLinks to="about">{about}</NavLinks>
          </NavList>
          <NavList>
            <NavLinks to="project">{project}</NavLinks>
          </NavList>
          <NavList>
            <NavLinks to="contact">{contact}</NavLinks>
          </NavList>
        </NavOL>
        <ResumeButton>
          <ResumeRouterLink to="/">{resume}</ResumeRouterLink>
        </ResumeButton>
      </NavLinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;
