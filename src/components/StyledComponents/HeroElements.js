import styled from "styled-components";
import { Link } from "react-scroll";

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
  margin: 0 auto;
  max-width: 1000px;
`;

export const HeroSectionContentContainer = styled.div``;

export const WelcomeH1 = styled.h1`
  margin: 0px 0px 30px 4px;
  color: ${(props) => props.theme.eBlueLight};
  font-family: ${(props) => props.theme.forNumber};
  /* font-size: ; */
  font-weight: 400;
`;

export const NameH2 = styled.h2`
  font-weight: 600;
  color: ${(props) => props.theme.lightSlate};
  line-height: 1.1;
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  padding-bottom: 10px;
`;

export const SlogonH3 = styled.h3`
  font-size: clamp(40px, 8vw, 80px);
  padding-bottom: 10px;
  font-weight: 600;
  line-height: 0.9;
  margin-top: 10px;
  color: #8892b0;
  margin: 0px;
`;

export const DetailP = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 20px 0px 0px;
  max-width: 600px;
  color: ${(props) => props.theme.textColor};
`;

export const GetInTouchButton = styled.button`
  color: ${(props) => props.theme.eBlueLight};
  border: 1px solid ${(props) => props.theme.eBlueLight};
  font-size: ${(props) => props.theme.xs};
  background-color: transparent;
  padding: 1.25rem 1.75rem;
  margin-top: 50px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.greenTiny};
  }
`;

export const GetInTouchLink = styled(Link)`
  text-decoration: none;
`;
