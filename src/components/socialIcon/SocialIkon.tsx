import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const SocialIcon = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialIconLink>
          <Icon
            height={"30px"}
            width={"30px"}
            viewBox={"0 0 30px 30px"}
            iconId="githublogo"
          />
        </SocialIconLink>
      </SocialItem>

      <SocialItem>
        <SocialIconLink>
          <Icon
            height={"30px"}
            width={"30px"}
            viewBox={"0 0 30px 30px"}
            iconId="twitter"
          />
        </SocialIconLink>
      </SocialItem>

      <SocialItem>
        <SocialIconLink>
          <Icon
            height={"30px"}
            width={"30px"}
            viewBox={"0 0 30px 30px"}
            iconId="linkedln"
          />
        </SocialIconLink>
      </SocialItem>
    </SocialList>
  );
};

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  margin-left: 30px;
`;

const SocialItem = styled.li``;

const SocialIconLink = styled.a`
  display: flex;

  &:hover {
    transform: translateY(-4px);
  }
`;
