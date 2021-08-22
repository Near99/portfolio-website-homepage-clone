import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 11;
  /* height: ${(props) => props.theme.navHeight}; */
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.pureWhite};
`;

export const HomeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.eBlueLight};
  font-size: 5rem;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavOL = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const NavList = styled.li`
  margin: 0px 20px;
  position: relative;
  counter-increment: item 1;
  cursor: pointer;
  font-size: ${(props) => props.theme.xs};

  &:hover {
    color: ${(props) => props.theme.eBlueLight};
  }
`;

export const NavLinks = styled(LinkS)`
  ::before {
    content: "0" counter(item) ".";
    margin-right: 5px;
    text-align: right;
    font-family: ${(props) => props.theme.forNumber};
    color: ${(props) => props.theme.eBlueLight};
  }
`;

export const ResumeButton = styled.button`
  color: ${(props) => props.theme.eBlueLight};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.eBlueLight};
  border-radius: 5px;
  padding: 0.75rem 1rem;
  line-height: 1;
  cursor: pointer;
  margin-left: 15px;
  font-size: ${(props) => props.theme.xs};

  &:hover {
    background-color: ${(props) => props.theme.greenTiny};
  }
`;

export const ResumeRouterLink = styled(LinkR)`
  color: ${(props) => props.theme.eBlueLight};
  text-decoration: none;
`;
