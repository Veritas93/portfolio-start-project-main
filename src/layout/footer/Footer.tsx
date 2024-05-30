import { S } from "./Footer_Styles";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./../header/headerMenu/DesktopMenu/DesktopMenu";
import { SocialIcon } from "../../components/socialIcon/SocialIkon";
import { Container } from "../../components/Container";
import { Accent } from "../../components/accent";

const Items = [
  {
    title: "Home",
    href: "home",
  },

  {
    title: "Technologies",
    href: "tech stack",
  },

  {
    title: "Projects",
    href: "projects",
  },

  {
    title: "Testimony",
    href: "testimony",
  },

  {
    title: "Contacts",
    href: "contacts",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="center" direction="row">
          <Logo />
          <div className="wrapper">
            <S.NumberPhone>+7-921-656-83-84</S.NumberPhone>
            <S.Name>Sergey Kostin</S.Name>
            <SocialIcon />
          </div>
        </FlexWrapper>
        <FlexWrapper justify="center" align="end" wrap="wrap">
          <DesktopMenu items={Items} />
          <S.Copyright>
            @ 2024 Designed and built by <Accent>Sergey Kostin</Accent> with{" "}
            <Accent>Love</Accent> & <Accent>Coffee</Accent>.
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
