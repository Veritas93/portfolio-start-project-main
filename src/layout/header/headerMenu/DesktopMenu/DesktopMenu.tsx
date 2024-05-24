import { S } from "./../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const DesktopMenu: React.FC<{ MenuItems: Array<string> }> = (props: {
  MenuItems: Array<string>;
}) => {
  return (
    <S.DesktopMenu>
      <Menu MenuItems={props.MenuItems} />
    </S.DesktopMenu>
  );
};
