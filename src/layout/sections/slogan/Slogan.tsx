import { S } from "./Slogan_Styles";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <S.Slogan>
      <Container>
        <FlexWrapper direction="column" align="center">
          <S.SloganTitle>I Am Available For Freelance</S.SloganTitle>
          <S.ButtonWrapper>
            <Button>serg.v.kostin@gmail.com</Button>
          </S.ButtonWrapper>
        </FlexWrapper>
      </Container>
    </S.Slogan>
  );
};
