import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle sectionTitle="I Am Available For Freelance" />
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #52cccc;
`;
