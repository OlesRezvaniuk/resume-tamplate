import styled from "styled-components";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  background: rgb(236, 238, 242);
  min-height: 1200px;
  width: 100%;
  max-width: 480px;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1260px) {
    width: 370px;
  }
`;
