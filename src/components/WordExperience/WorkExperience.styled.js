import styled, { css } from "styled-components";

export const WorkExperienceContainer = styled.div`
  margin-bottom: 35px;
  position: relative;
`;

export const WorkExperienceTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const WorkExperiencePosition = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: ${(props) => props.$color};
`;

export const WorkExperienceYear = styled.span`
  opacity: 0.7;
  font-weight: 400;
  font-size: 12px;
`;

export const WorkExperienceResponsibilitiesText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const WorkExperienceREsponsibilitiesList = styled.ul`
  list-style: disc;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const WorkExperienceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WorkExperienceItem = styled.li`
  border-bottom: 1px solid transparent;
`;

export const WorkExperienceItemResponsibilitieItem = styled.li`
  height: 37px;
  &::marker {
    color: ${(props) => props.$color};
  }
  ${(props) =>
    props.$readyToSave &&
    css`
      height: 20px;
    `}
  @media screen and (min-width: 1260px) {
    height: 20px;
  }
`;
