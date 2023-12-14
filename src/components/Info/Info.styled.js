import styled, { css } from "styled-components";

export const InfoContainer = styled.div`
  margin-bottom: 20px;
  overflow-wrap: break-word;
  width: inherit;
  height: auto;
  overflow: hidden;
`;

export const InfoEditInput = styled.textarea`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  transition: 250ms;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  resize: none;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
  @media screen and (min-width: 1260px) {
    padding: 0px 0px 0px 10px;
    height: 120px;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid grey;
  }
  }`;

export const InfoText = styled.p`
  height: 300px;
  width: auto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  ${(props) =>
    props.$ready &&
    css`
      width: auto;
      height: 120px;
    `}
  @media screen and (min-width: 1260px) {
    width: auto;
    height: 120px;
  }
`;
