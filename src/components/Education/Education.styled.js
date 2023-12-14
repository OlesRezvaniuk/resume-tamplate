import styled from "styled-components";

export const EducationTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

export const EducationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  @media screen and (min-width: 1260px) {
    display: flex;
    gap: 60px;
    flex-direction: row-reverse;
  }
`;
