import React from "react";
import { AboutSection } from "../StyledComponents/AboutElements";
import {
  MainSectionContainer,
  MainSection,
} from "../StyledComponents/ContentElements";
import Hero from "./Hero";

function Content() {
  return (
    <MainSectionContainer>
      <MainSection>
        <Hero />
      </MainSection>
      <AboutSection id="about" />
    </MainSectionContainer>
  );
}

export default Content;
