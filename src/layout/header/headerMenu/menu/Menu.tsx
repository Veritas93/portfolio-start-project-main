import { S } from "./../HeaderMenu_Styles";

export const Menu: React.FC<{ MenuItems: Array<string> }> = (props: {
  MenuItems: Array<string>;
}) => {
  return (
    <ul>
      {props.MenuItems.map((item: string, index: number) => {
        return (
          <S.MenuItem key={index}>
            <S.Link href="">
              {item}
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
