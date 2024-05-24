import { S } from "./../HeaderMenu_Styles";
import { SocialIcon } from "../../../../components/socialIcon/SocialIkon";
import { Menu } from "../menu/Menu";

export const MobileMenu = (props: { MenuItems: Array<string> }) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu MenuItems={props.MenuItems} />
        <SocialIcon />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
