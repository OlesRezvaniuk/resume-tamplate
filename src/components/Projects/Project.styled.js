import styled from "styled-components";

export const ProjectsTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

export const ProjectsText = styled.p`
  max-width: 710px;
  overflow-wrap: break-word;
`;

export const ProjectLink = styled.a`
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: ${(props) => props.$color};
`;

export const ProjectsList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  display: grid;
  list-style-position: inside;
`;

export const ProjectText = styled.p`
  width: 100%;
  min-height: 120px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 1260px) {
    min-height: 72px;
  }
`;

export const ProjectItem = styled.li`
  overflow: hidden;
  height: 288px;
  &::marker {
    font-weight: 700;
  }
  @media screen and (min-width: 1260px) {
    height: 100px;
  }
`;

export const ProjectTechnologyText = styled.span`
  display: flex;
  margin-top: 6px;
  margin-bottom: 24px;
`;
