import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <Button>view project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">Live Preview</Link>
        <Link href="#">View Code</Link>
      </Description>
    </StyledWork>
  );
};

const Description = styled.div`
  padding: 10px 30px;
`;

const StyledWork = styled.div`
  background-color: ${Theme.colors.bacCard};
  max-width: 375px;
  width: 100%;
  border-radius: 5%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 80px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${Button} {
      opacity: 1;
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
    }
  }

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
