import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            suscipit obcaecati fugit facere repellendus quam placeat illo libero
            cupiditate accusamus facilis, repellat aliquid blanditiis minima
            temp
          </Text>
          <Name>@Ivan Ivanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span> </span>
        <span className="active"> </span>
        <span> </span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const Name = styled.span`
  font-family: Dm Sans, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Theme.colors.fontMain};
  margin: 22px 0 22px;
  display: inline-block;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;

    background-color: ${Theme.colors.accent2};
    opacity: 0.7;
    border-radius: 50%;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${Theme.colors.accent1};
      width: 20px;
      border-radius: 20%;
    }
  }
`;
