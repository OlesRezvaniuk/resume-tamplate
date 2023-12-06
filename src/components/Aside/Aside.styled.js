import styled from "styled-components";

export const AsideContainer = styled.aside`
  // box-shadow: 0px 0px 4px grey;
  border-right: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  // background: rgb(236, 238, 242);
  min-height: 1400px;
  width: 100%;
  max-width: 480px;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1260px) {
    width: 370px;
  }
`;
