import styled from "styled-components";

export const SectionTitle = () => {
  return (
    <div>
      <StyledSectionTitle>
        My Tech Stack
        <h3>Technologies I've been working with recentl</h3>
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
