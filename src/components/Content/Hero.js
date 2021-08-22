import React from "react";
import { english } from "../../data/data";
import {
  HeroSection,
  HeroSectionContentContainer,
  WelcomeH1,
  NameH2,
  SlogonH3,
  DetailP,
  GetInTouchButton,
  GetInTouchLink,
} from "../StyledComponents/HeroElements";

function Hero() {
  const { title, name, slogn, brifIntro, mainSectionButton } =
    english.mainSection;
  return (
    <HeroSection>
      <HeroSectionContentContainer>
        <WelcomeH1>{title}</WelcomeH1>
      </HeroSectionContentContainer>
      <HeroSectionContentContainer>
        <NameH2>{name}</NameH2>
      </HeroSectionContentContainer>
      <HeroSectionContentContainer>
        <SlogonH3>{slogn}</SlogonH3>
      </HeroSectionContentContainer>
      <HeroSectionContentContainer>
        <DetailP>{brifIntro}</DetailP>
      </HeroSectionContentContainer>
      <GetInTouchButton>
        <GetInTouchLink to="about">{mainSectionButton}</GetInTouchLink>
      </GetInTouchButton>
    </HeroSection>
  );
}

export default Hero;
