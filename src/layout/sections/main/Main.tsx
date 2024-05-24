import { S } from "./Main_Styles";
import main from "./../../../assets/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Accent } from "../../../components/accent";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap">
          <Accent>
            <S.SmallText>Hi, My name is</S.SmallText>
            <S.Name>Sergey Kostin</S.Name>
            <S.MainTitle>A Web Developer</S.MainTitle>
          </Accent>
          <FlexWrapper justify="center" align="center">
            <S.Fon2>
              <S.Photo src={main} />
            </S.Fon2>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
