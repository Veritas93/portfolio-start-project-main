import { S } from "./Skills_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";

const SkillData = [
  {
    iconId: "css",
    title: "css3",
    viewBox: "0 0 120 100",
  },

  {
    iconId: "react",
    title: "react",
    viewBox: "-5 -5 120 100",
  },

  {
    iconId: "html",
    title: "html5",
    viewBox: "0 0 120 100",
  },

  {
    iconId: "js",
    title: "js",
    viewBox: "0 5 120 100",
  },

  {
    iconId: "vector",
    title: "vector",
    viewBox: "0 3 105 100",
  },

  {
    iconId: "bootstrap",
    title: "bootstrap",
    viewBox: "0 -2 88 87",
  },

  {
    iconId: "tailwind",
    title: "tailwind",
    viewBox: "5 15 120 100",
  },

  {
    iconId: "sass",
    title: "sass",
    viewBox: "0 -10 90 100",
  },

  {
    iconId: "git",
    title: "git",
    viewBox: "-3 -5 110 110",
  },

  {
    iconId: "greensock",
    title: "greensock",
    viewBox: "20 10 120 100",
  },

  {
    iconId: "vscode",
    title: "vscode",
    viewBox: "2 -2 120 100",
  },

  {
    iconId: "github",
    title: "github",
    viewBox: "-5 -10 100 100",
  },
];

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle
          sectionTitle="My Tech Stack"
          description="Technologies I've been working with recentl"
        />
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          {SkillData.map((s, index) => {
            return (
              <Skill
                iconId={s.iconId}
                key={index}
                title={s.title}
                viewBox={s.viewBox}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
