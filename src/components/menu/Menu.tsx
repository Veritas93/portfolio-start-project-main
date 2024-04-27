import styled from "styled-components";

export const Menu = (props: { MenuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.MenuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    justify-content: center;
    display: flex;
    gap: 30px;
  }
`;
