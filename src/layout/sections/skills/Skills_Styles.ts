import styled from "styled-components";

const Skills = styled.section`
  position: relative;
  background-color: #a1eeee;
  min-height: 50vh;
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 120px;
    height: 120px;

    background: rgba(167, 167, 167, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

const Skill = styled.div`
  width: 100px;
  padding: 30px 100px;
  margin-left: 10px;
  margin-right: 10px;
  flex-grow: 1;
`;

const SkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 10px 0 15px;
`;

const SkillText = styled.p``;

export const S = {
  Skills,
  SkillText,
  SkillTitle,
  Skill,
  IconWrapper,
};
