import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Sergey Kostin</Name>
        <SocialList>
          <SocialItem>
            <SocialIconLink>
              <Icon
                height={"30px"}
                width={"30px"}
                vieBox={"0 0 30px 30px"}
                iconId="twitter"
              />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink>
              <Icon
                height={"30px"}
                width={"30px"}
                vieBox={"0 0 30px 30px"}
                iconId="githublogo"
              />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink>
              <Icon
                height={"30px"}
                width={"30px"}
                vieBox={"0 0 30px 30px"}
                iconId="linkedln"
              />
            </SocialIconLink>
          </SocialItem>
        </SocialList>
        <Copyright>@ 2024 Sergey Kostin, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #ddbe86;
  min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialIconLink = styled.a``;

const Copyright = styled.small``;
