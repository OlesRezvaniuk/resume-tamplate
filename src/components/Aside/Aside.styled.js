import styled, { css } from "styled-components";

export const AsideContainer = styled.aside`
  position: relative;
  // box-shadow: 0px 0px 4px grey;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 30px;
  padding-bottom: 40px;
  margin-top: 70px;
  background: ${(props) => props.$bgColor};
  min-height: auto;
  width: 100%;
  max-width: 480px;
  min-height: 1400px;
  ${(props) =>
    props.$ready &&
    css`
      margin-top: 0px;
      width: 370px;
      min-height: 1400px;
    `}
  @media screen and (min-width: 1260px) {
    margin-top: 0px;
    width: 370px;
  }
  * {
    color: ${(props) => props.$fColor};
    fill: ${(props) => props.$fColor};
  }
`;
