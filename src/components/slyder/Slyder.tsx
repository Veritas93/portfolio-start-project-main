import { S } from "./Slider_Styles";
import { FlexWrapper } from "../FlexWrapper";

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <FlexWrapper>
        <S.Slide>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            suscipit obcaecati fugit facere repellendus quam placeat illo libero
            cupiditate accusamus facilis, repellat aliquid blanditiis minima
            temp
          </S.Text>
          <S.Name>@Ivan Ivanov</S.Name>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span> </span>
        <span className="active"> </span>
        <span> </span>
      </S.Pagination>
    </S.Slider>
  );
};
