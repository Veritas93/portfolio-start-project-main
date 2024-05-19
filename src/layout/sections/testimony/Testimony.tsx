import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slyder/Slyder";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle sectionTitle="Testimony" />
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId="html" />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;

  ${IconWrapper} {
    margin: 20px 0 72px;
  }
`;
