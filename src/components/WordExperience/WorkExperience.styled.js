import styled from "styled-components";

export const WorkExperienceContainer = styled.div`
  margin-bottom: 35px;
  position: relative;
`;

export const WorkExperienceTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

export const WorkExperiencePosition = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => (props.$variant ? "#2e9aff" : "inherit")};
`;

export const WorkExperienceYear = styled.span`
  opacity: 0.7;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export const WorkExperienceResponsibilitiesText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px; /* 171.429% */
`;

export const WorkExperienceREsponsibilitiesList = styled.ul`
  list-style: disc;
  margin-left: 24px;
`;

export const WorkExperienceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
