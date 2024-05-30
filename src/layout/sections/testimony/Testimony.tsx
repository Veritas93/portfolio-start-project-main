import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slyder/Slyder";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./../skills/Skills_Styles";
import { Container } from "../../../components/Container";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id="testimony">
      <Container>
        <SectionTitle sectionTitle="Testimony" />
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId="html" />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 20px 0 72px;
  }
`;
