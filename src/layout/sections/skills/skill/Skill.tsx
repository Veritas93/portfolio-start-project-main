import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  title: string;
  description?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon
            iconId={props.iconId}
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
          />
        </IconWrapper>
        <StyledSkillTitle>{props.title}</StyledSkillTitle>
        <StyledSkillText />
      </FlexWrapper>
    </StyledSkill>
  );
};

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 100px;
    background: rgba(167, 167, 167, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

const StyledSkill = styled.div`
  width: 100px;
  padding: 30px 90px;
`;

const StyledSkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 10px 0 15px;
`;

const StyledSkillText = styled.p``;
