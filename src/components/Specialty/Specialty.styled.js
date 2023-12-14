import styled, { css } from "styled-components";

export const SpecialtyContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
  height: 20px;
  position: absolute;
  top: 55px;
  width: inherit;
  padding: 0px 15px;
  left: 0;
  ${(props) =>
    props.$ready &&
    css`
      position: static;
      top: auto;
    `}
  @media screen and (min-width: 1260px) {
    padding: initial;
    width: auto;
    position: static;
    top: auto;
    left: auto;
  }
`;

export const SpecialtyTitle = styled.h2`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  pointer-events: none;
`;

export const SpecialtyEditInput = styled.input`
  height: 100%;
  width: 100%;
  font-size: 100%;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  // box-shadow: 0px 0px 0px 1px lightgrey;
  // border-radius: 2px;
  transition: 250ms;
  cursor: pointer;
  font-size: 14px;
  border-bottom: 1px solid lightgrey;
  &:hover,
  &:focus {
    border-bottom: 1px solid grey;
  }
  // @media screen and (min-width: 1260px) {
  //   width: 300px;
  // }
`;
