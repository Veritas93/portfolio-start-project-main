import styled from "styled-components";

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
  color: red;
  text-align: center;

  h3 {
    color: black;
  }
`;
