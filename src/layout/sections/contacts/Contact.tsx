import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle sectionTitle="Contact" />
        <StyledForm>
          <Field placeholder={"name"} />
          <Field placeholder={"subject"} />
          <Field placeholder={"message"} as={"textarea"} />
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
  textarea {
    resize: none;
    height: 155px;
  }
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
`;

const Field = styled.input`
  width: 100%;
  background-color: #2c2b2b;
  border: 1px solid grey;
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.colors.fontMain};
  &::placeholder {
    color: ${Theme.colors.placeholder};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid grey;
  }
`;
