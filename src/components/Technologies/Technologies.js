import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      Ive worked with a range a technologies in the web development world.
      Mostly Front-End
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          Node and Databases
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
