import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/Menu";
import { SocialIcon } from "../../components/socialIcon/SocialIkon";

const Items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <div className="wrapper">
            <HeaderMenu MenuItems={Items} />
            <SocialIcon />
          </div>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${Theme.colors.primaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;

  .wrapper {
    display: flex;
  }
`;
