import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  HeroSection,
  LeftSection,
  RightSection,
  ImgContainer,
  Img,
} from "./HeroStyles";

import Headshot from "../../../public/images/headshot.jpg";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Bryan Cortina&apos;s <br />
        Web Portfolio
      </SectionTitle>
      <SectionText>
        I am a self-taught web developer. with 2-3 years of experience. Ive
        built 5+ personal projects.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/cortinabryan")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
