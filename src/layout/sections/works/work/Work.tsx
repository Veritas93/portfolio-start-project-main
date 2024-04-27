import styled from "styled-components";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="#">Live Preview</Link>
      <Link href="#">View Code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: bisque;
  max-width: 375px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260;
  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
