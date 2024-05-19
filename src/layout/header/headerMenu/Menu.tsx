import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { MenuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.MenuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="">
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    justify-content: center;
    display: flex;
    gap: 30px;
  }
`;

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

const ListItem = styled.li`
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
