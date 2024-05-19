import styled from "styled-components";
import IconLogo from "./../../assets/images/Icon.svg";

export const Logo = (props: any) => {
  return (
    <Link href="">
      <img src={IconLogo} alt="Logo" />
    </Link>
  );
};

const Link = styled.a``;
