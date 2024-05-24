import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";

const Works = styled.section`
  min-height: 50vh;
  background-color: #c5b6d3;
  ${FlexWrapper} {
    gap: 30px;
  }
`;

// Work

const Description = styled.div`
  padding: 10px 30px;
`;

const Work = styled.div`
  background-color: ${Theme.colors.bacCard};
  width: 330px;
  flex-grow: 1;
  border-radius: 5%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 80px;
    }
  }

  @media ${Theme.media.desktop} {
    max-width: 540px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    border-radius: 5% 5% 0 0;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 5% 5% 0 0;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

// tabMenu

const TabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
    border: 2px solid red;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;

export const S = {
  Works,
  Description,
  Work,
  ImageWrapper,
  Image,
  Title,
  Text,
  ListItem,
  TabMenu,
};
