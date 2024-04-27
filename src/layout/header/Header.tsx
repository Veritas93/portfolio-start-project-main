import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const Items = [
  "Home",
  "About",
  "Tech Stack",
  "Projects",
  "Contacts",
  "Github",
  "Twiter",
  "Linkidn",
];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu MenuItems={Items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #bff1bf;
  display: flex;
  justify-content: space-between;
`;
