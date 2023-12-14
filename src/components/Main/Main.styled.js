import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  // display: none;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 15px;
  ${(props) =>
    props.$ready &&
    css`
      padding: 40px 40px 40px 80px;
    `}
  @media screen and (min-width: 1260px) {
    padding: 40px 40px 40px 80px;
  }
`;
