import { S } from "./Works_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import fon2 from "./../../../assets/images/fon2.webp";
import fon3 from "./../../../assets/images/fon3.webp";
import { Container } from "../../../components/Container";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];

const workData = [
  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon2,
  },

  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon3,
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle
          sectionTitle="Projects"
          description="Things I’ve built so far"
        />
        <TabMenu MenuItems={worksItems} />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {workData.map((w, index) => {
            return (
              <Work title={w.title} text={w.text} src={w.src} key={index} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
