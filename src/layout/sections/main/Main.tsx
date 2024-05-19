import styled from "styled-components";
import main from "./../../../assets/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import abstract from "./../../../assets/images/Abstract.png";
import { Accent } from "../../../components/accent";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <Accent>
            <SmallText>Hi, My name is</SmallText>
            <Name>Sergey Kostin</Name>
            <MainTitle>A Web Developer</MainTitle>
          </Accent>
          <FlexWrapper justify="center" align="center">
            <Fon2 />
            <Photo src={main} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const Fon2 = (props: any) => {
  return (
    <Fon22>
      <img src={abstract} />
    </Fon22>
  );
};

const Fon22 = styled.div`
  position: absolute;
  display: flex;
  height: 600px;
  width: 600px;
`;

const SmallText = styled.h2`
  font-family: Poppins;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  color: ${Theme.colors.fontMain};
`;

const Name = styled.a`
  font-family: Poppins;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  color: transparent;
`;

const MainTitle = styled.h1`
  font-family: Poppins;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  color: ${Theme.colors.fontMain};
`;

const Photo = styled.img`
  position: relative;
  width: 349px;
  height: 349px;
  border-radius: 50%;
  object-fit: cover;
  border: double 1em transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(${Theme.colors.accent1}, ${Theme.colors.accent2});
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`;
