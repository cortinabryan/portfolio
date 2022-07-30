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
  HeadshotImg,
} from "./HeroPhotoStyles";

import { headshot } from "../../../public/images/headshot.jpg";

import Headshot from "../../../public/images/headshot.jpg";
import { ImageContainer } from "./../Technologies/TechnologiesStyles";

const HeroPhoto = (props) => (
  <Section>
    <LeftSection>
      <ImgContainer>{/* <HeadshotImg src={headshot} /> */}</ImgContainer>
    </LeftSection>
  </Section>
);

export default HeroPhoto;
