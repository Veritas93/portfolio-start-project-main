import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
  description?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <StyledSkillTitle>{props.title}</StyledSkillTitle>
      <StyledSkillText />
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 15%;
  background-color: wheat;
  margin: 10px;
`;

const StyledSkillTitle = styled.h3``;

const StyledSkillText = styled.p``;
