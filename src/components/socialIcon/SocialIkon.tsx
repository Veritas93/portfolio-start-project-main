import { S } from "./SocialIcon_Styles";
import { Icon } from "../icon/Icon";

const iconData = [
  {
    height: "30px",
    width: "30px",
    viewBox: "0 0 30px 30px",
    iconId: "githublogo",
  },

  {
    height: "30px",
    width: "30px",
    viewBox: "0 0 30px 30px",
    iconId: "twitter",
  },

  {
    height: "30px",
    width: "30px",
    viewBox: "0 0 30px 30px",
    iconId: "linkedln",
  },
];

export const SocialIcon: React.FC = () => {
  return (
    <S.SocialList>
      <S.SocialItem>
        {iconData.map((i, index) => {
          return (
            <S.SocialIconLink key={index}>
              <Icon
                height={i.height}
                width={i.width}
                viewBox={i.viewBox}
                iconId={i.iconId}
              />
            </S.SocialIconLink>
          );
        })}
      </S.SocialItem>
    </S.SocialList>
  );
};
