import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme";

const Link = styled.a`
  font-family: "DM-Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${Theme.colors.fontSection};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const MenuItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${Theme.colors.fontSection};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skew(12deg) translateX(5px);
      color: ${Theme.colors.fontMain};
      & + ${Mask} {
        transform: skew(12deg) translateX(-5px);
      }
    }
  }
`;

// MobileMenu

const MobileMenu = styled.nav``;

const BurgerButton = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  height: 200px;
  width: 200px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.fontSection};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.fontSection};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 18px;
      height: 2px;
      background-color: ${Theme.colors.fontSection};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(36, 35, 35, 0.8);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  ul + ul {
    display: flex;
    flex-direction: row;
    margin-left: 0;
    padding-top: 20px;
  }
`;

// DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    justify-content: center;
    display: flex;
    gap: 30px;
  }

  @media ${Theme.media.mobile} {
    display: none;
  }
`;

export const S = {
  Link,
  MenuItem,
  Mask,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  DesktopMenu,
};
