import { S } from "./Contacts_Styles";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef } from "react";

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_0g4001b", "template_bf0vfoh", form.current, {
        publicKey: "nr17GXPacCeUK7Wj3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle sectionTitle="Contact" />
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"name"} name={"user_name"} />
          <S.Field required placeholder={"email"} name={"email"} />
          <S.Field required placeholder={"subject"} name={"subject"} />
          <S.Field
            required
            placeholder={"message"}
            as={"textarea"}
            name={"message"}
          />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
