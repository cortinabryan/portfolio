import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a self-taught web developer. with 2-3 years of experience. Ive
        built 5+ personal projects
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
