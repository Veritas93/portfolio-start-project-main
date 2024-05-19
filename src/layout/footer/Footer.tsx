import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "../header/headerMenu/Menu";
import { SocialIcon } from "../../components/socialIcon/SocialIkon";
import { Container } from "../../components/Container";
import { Accent } from "../../components/accent";

const Items = ["Home", "About", "Technologies", "Projects", "Contacts"];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo className="footerLogo" />
          <div className="wrapper">
            <NumberPhone>+7-921-656-83-84</NumberPhone>
            <Name>Sergey Kostin</Name>
            <SocialIcon />
          </div>
        </FlexWrapper>
        <FlexWrapper justify="space-between" align="end">
          <HeaderMenu MenuItems={Items} />
          <Copyright>
            @ 2024 Designed and built by <Accent>Sergey Kostin</Accent> with{" "}
            <Accent>Love</Accent> & <Accent>Coffee</Accent>.
          </Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  padding: 100px 0;

  color: ${Theme.colors.fontSection};
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;

  .wrapper {
    display: flex;
  }

  ${Container} {
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      background-color: ${Theme.colors.fontSection};
      opacity: 0.3;
      height: 1px;
      width: 100%;

      position: absolute;
      bottom: 45%;
      left: 50%;

      transform: translate(-50%);
    }

    .footerLogo {
    }
  }

  ${FlexWrapper} + ${FlexWrapper} {
    margin-top: 60px;
  }
`;

const Name = styled.span`
  margin-left: 60px;
  margin-right: 50px;
`;

const NumberPhone = styled.h2`
  position: relative;
  font-size: 18px;
  font-weight: 400;
  &::before {
    content: "📱";
    position: absolute;
    left: -30px;
    top: 8px;
  }
`;

const Copyright = styled.small`
  display: flex;
  ${Accent} {
    color: transparent;
    padding-left: 2px;
    padding-right: 2px;
  }
`;
