import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./work/Work";
import fon2 from "./../../../assets/images/fon2.webp";
import fon3 from "./../../../assets/images/fon3.webp";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle
        sectionTitle="Projects"
        description="Things I’ve built so far"
      />
      <Menu MenuItems={worksItems} />
      <FlexWrapper justify="space-around">
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
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #c5b6d3;
`;
