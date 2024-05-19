import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import fon2 from "./../../../assets/images/fon2.webp";
import fon3 from "./../../../assets/images/fon3.webp";
import { Container } from "../../../components/Container";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle
          sectionTitle="Projects"
          description="Things I’ve built so far"
        />
        <TabMenu MenuItems={worksItems} />
        <FlexWrapper justify="space-between" align="flex-start">
          <Work
            title="Project Tile goes here"
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            src={fon2}
          />
          <Work
            title="Project Tile goes here"
            text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            src={fon3}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #c5b6d3;
`;
