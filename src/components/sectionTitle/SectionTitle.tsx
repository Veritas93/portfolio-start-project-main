import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type SectionTitlePropsType = {
  sectionTitle: string;
  description?: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <div>
      <StyledSectionTitle>
        {props.sectionTitle}
        <h3>{props.description}</h3>
      </StyledSectionTitle>
    </div>
  );
};

const StyledSectionTitle = styled.h2`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0px;
  color: ${Theme.colors.fontSectionMain};
  text-align: center;
  margin-bottom: 90px;

  h3 {
    font-size: 32px;
    font-weight: 400;
    color: ${Theme.colors.fontSection};
  }
`;
