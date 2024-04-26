import styled from "styled-components";
import main from "./../../../assets/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi, My name is</span>
          <h2>Sergey Kostin</h2>
          <h1>A Web Developer</h1>
        </div>
        <Photo src={main} />
      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 349px;
  height: 349px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: pink;
`;
