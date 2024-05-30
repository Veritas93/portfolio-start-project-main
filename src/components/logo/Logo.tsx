import styled from "styled-components";
import IconLogo from "./../../assets/images/Icon.svg";
import { animateScroll as scroll } from "react-scroll";

export const Logo: React.FC = (props: any) => {
  return (
    <Link
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <img src={IconLogo} alt="Logo" />
    </Link>
  );
};

const Link = styled.a``;
