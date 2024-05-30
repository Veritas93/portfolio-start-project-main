import { S } from "./SocialIcon_Styles";
import { Icon } from "../icon/Icon";

const iconData = [
  {
    height: "30px",
    width: "30px",
    viewBox: "0 0 30px 30px",
    iconId: "githublogo",
    href: "https://github.com/Veritas93",
  },

  {
    height: "30",
    width: "30",
    viewBox: "0 0 48 48",
    iconId: "telegram",
    href: "https://t.me/Serveritas96",
  },

  {
    height: "30px",
    width: "30px",
    viewBox: "0 0 30px 30px",
    iconId: "linkedln",
    href: "",
  },
];

export const SocialIcon: React.FC = () => {
  return (
    <S.SocialList>
      <S.SocialItem>
        {iconData.map((i, index) => {
          return (
            <S.SocialIconLink href={i.href} key={index}>
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
