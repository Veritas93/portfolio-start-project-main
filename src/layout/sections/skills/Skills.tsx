import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle
          sectionTitle="My Tech Stack"
          description="Technologies I've been working with recentl"
        />
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Skill iconId={"css"} title={"css3"} viewBox="0 0 120 100" />
          <Skill iconId={"react"} title={"react"} viewBox="-5 -5 120 100" />
          <Skill iconId={"html"} title={"html5"} viewBox="0 0 120 100" />
          <Skill iconId={"js"} title={"JS"} viewBox="0 5 120 100" />
          <Skill iconId={"vector"} title={"VECTOR"} viewBox="0 3 105 100" />
          <Skill
            iconId={"bootstrap"}
            title={"BOOTSTRAP"}
            viewBox="0 -2 88 87"
          />
          <Skill
            iconId={"tailwind"}
            title={"TAILWIND"}
            viewBox="5 15 120 100"
          />
          <Skill iconId={"sass"} title={"SASS"} viewBox="0 -10 90 100" />
          <Skill iconId={"git"} title={"GIT"} viewBox="-3 -5 110 110" />
          <Skill
            iconId={"greensock"}
            title={"GREENSOCK"}
            viewBox="20 10 120 100"
          />
          <Skill iconId={"vscode"} title={"VSCODE"} viewBox="2 -2 120 100" />
          <Skill iconId={"github"} title={"GITHUB"} viewBox="-5 -10 100 100" />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #a1eeee;
  min-height: 100vh;
`;
