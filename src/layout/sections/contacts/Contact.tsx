import { S } from "./Contacts_Styles";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <SectionTitle sectionTitle="Contact" />
        <S.Form>
          <S.Field placeholder={"name"} />
          <S.Field placeholder={"subject"} />
          <S.Field placeholder={"message"} as={"textarea"} />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
