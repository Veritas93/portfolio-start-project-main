import { S } from "./../Works_Styles";
import { Link } from "./../../../../components/Link";

export const TabMenu = (props: { MenuItems: Array<string> }) => {
  return (
    <S.TabMenu>
      <ul>
        {props.MenuItems.map((item: string, index: number) => {
          return (
            <S.ListItem key={index}>
              <Link href="">{item}</Link>
            </S.ListItem>
          );
        })}
      </ul>
    </S.TabMenu>
  );
};
