import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Button } from "../../../components/Button";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SloganTitle>I Am Available For Freelance</SloganTitle>
          <ButtonWrapper>
            <Button>Loli@yandex.ru</Button>
          </ButtonWrapper>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const SloganTitle = styled.h2`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0px;
  color: ${Theme.colors.fontSectionMain};
  text-align: center;
`;

const StyledSlogan = styled.section`
  min-height: 30vh;
`;

const ButtonWrapper = styled.div`
  ${Button} {
    &:hover {
      &::before {
        height: 10px;
        width: 50%;
      }
    }
    font-family: DM Sans;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    color: transparent;
    text-transform: lowercase;
    height: 100px;
    width: 470px;
    background: linear-gradient(
      to right,
      ${Theme.colors.accent1} 3%,
      ${Theme.colors.accent2}
    );
    -webkit-background-clip: text;
  }
`;
