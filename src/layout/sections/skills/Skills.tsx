import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle
        sectionTitle="My Tech Stack"
        description="Technologies I've been working with recentl"
      />
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill iconId={"css"} title={"css3"} />
        <Skill iconId={"react"} title={"react"} />
        <Skill iconId={"html"} title={"html5"} />
        <Skill iconId={"js"} title={"JS"} />
        <Skill iconId={"vector"} title={"VECTOR"} />
        <Skill iconId={"bootstrap"} title={"BOOTSTRAP"} />
        <Skill iconId={"tailwind"} title={"TAILWIND"} />
        <Skill iconId={"sass"} title={"SASS"} />
        <Skill iconId={"git"} title={"GIT"} />
        <Skill iconId={"greensock"} title={"GREENSOCK"} />
        <Skill iconId={"vscode"} title={"VSCODE"} />
        <Skill iconId={"github"} title={"GITHUB"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #a1eeee;
  min-height: 100vh;
`;
