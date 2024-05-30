import { S } from "./Works_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { StatusPropsType, TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import fon2 from "./../../../assets/images/fon2.webp";
import fon3 from "./../../../assets/images/fon3.webp";
import fon4 from "./../../../assets/images/fon4.webp";
import fon1 from "./../../../assets/images/fon1.webp";
import fon5 from "./../../../assets/images/fon5.webp";
import fon6 from "./../../../assets/images/fon6.webp";
import { Container } from "../../../components/Container";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../../styles/Slider.css";

const tabsItems: Array<{
  status: StatusPropsType;
  title: string;
}> = [
  {
    title: "ALL",
    status: "all",
  },

  {
    title: "LANDING PAGE",
    status: "landing page",
  },

  {
    title: "REACT",
    status: "react",
  },

  {
    title: "SPA",
    status: "spa",
  },
];

const workData = [
  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon2,
    type: "spa",
    id: 1,
  },

  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon3,
    type: "react",
    id: 2,
  },

  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon4,
    type: "spa",
    id: 3,
  },

  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon1,
    type: "react",
    id: 4,
  },

  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon5,
    type: "spa",
    id: 5,
  },

  {
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    src: fon6,
    type: "react",
    id: 6,
  },
];

export const Works: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 823;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Tab menu
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = workData;

  if (currentFilterStatus === "landing page") {
    filteredWorks = workData.filter((work) => work.type === "landing page");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = workData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = workData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: StatusPropsType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id="projects">
      <Container>
        <SectionTitle
          sectionTitle="Projects"
          description="Things I’ve built so far"
        />
        <TabMenu
          TabsItems={tabsItems}
          currentFilterStatus={currentFilterStatus}
          changeFilterStatus={changeFilterStatus}
        />
        {width > breakpoint ? (
          <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
            <AnimatePresence>
              {filteredWorks.map((w) => {
                return (
                  <motion.div
                    style={{
                      width: "373px",
                      flexGrow: 1,
                      maxWidth: "540px",
                    }}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={w.id}
                  >
                    <Work
                      title={w.title}
                      text={w.text}
                      src={w.src}
                      type={w.type}
                      key={w.id}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </FlexWrapper>
        ) : (
          <Slider />
        )}
      </Container>
    </S.Works>
  );
};

const SliderWorks = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const items = workData.map((wo) => {
  return (
    <Work
      title={wo.title}
      text={wo.text}
      src={wo.src}
      type={wo.type}
      key={wo.id}
    />
  );
});

export const Slider: React.FC = () => {
  return (
    <SliderWorks>
      <AliceCarousel mouseTracking items={items} />;
    </SliderWorks>
  );
};
