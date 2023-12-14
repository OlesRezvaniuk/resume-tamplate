import styled, { css } from "styled-components";

export const ResumeTemplateContainer = styled.div`
  padding-top: 45px;
  margin: auto;
  flex-direction: column;
  position: relative;
  width: 370px;
  ${(props) =>
    props.$ready &&
    css`
      width: 1200px;
    `}
  @media screen and (min-width: 1260px) {
    width: 1200px;
    padding-top: 15px;
  }
`;

export const ContentContainer = styled.div`
  padding: 15px;
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.$ready &&
    css`
      width: 1200px;
      flex-direction: row;
    `}
  @media screen and (min-width: 1260px) {
    width: 1200px;
    flex-direction: row;
  }
  ${(props) =>
    props.$auth === null &&
    css`
      pointer-events: none;
      user-select: none;
      filter: blur(10px);
    `}
  ${(props) =>
    props.$loading &&
    css`
      pointer-events: none;
      user-select: none;
      filter: blur(10px);
    `}
`;

export const ScaleSizeText = styled.span`
  position: fixed;
  top: 15px;
  left: 50%;
`;
