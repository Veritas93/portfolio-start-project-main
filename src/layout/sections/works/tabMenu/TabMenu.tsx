import styled from "styled-components";
import { Link } from "./../../../../components/Link";

export const TabMenu = (props: { MenuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.MenuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    justify-content: center;
    display: flex;
    gap: 30px;
  }
`;

const ListItem = styled.li``;
