import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const SocialList = styled.ul`
  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const SocialItem = styled.li`
  display: flex;
  gap: 30px;
  margin-left: 30px;
`;

const SocialIconLink = styled.a`
  display: flex;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const S = {
  SocialList,
  SocialItem,
  SocialIconLink,
};
