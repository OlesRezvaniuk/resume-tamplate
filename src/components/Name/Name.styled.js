import styled, { css } from "styled-components";

export const NameBox = styled.div`
    display: flex;
    align-items: end;
    height: auto;
    margin-bottom: 30px;
    position: absolute;
    top: 80px;
    width: inherit;
    left: 0;
    padding: 0px 15px;
    ${(props) =>
      props.$ready &&
      css`
        height: 60px;
        position: static;
        top: auto;
        padding: initial;
      `}
    @media screen and (min-width: 1260px) {
      height: 60px;
      position: static;
      top: auto;
      left: auto;
      padding: initial;
  }
}`;

export const NameTitle = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${(props) =>
    props.$ready &&
    css`
      font-size: 45px;
    `}
  @media screen and (min-width: 1260px) {
    font-size: 45px;
  }
`;

export const NameEditInput = styled.input`
    padding: 0px 0px 0px 10px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    transition: 250ms;
    cursor: pointer;
    font-size: 14px;
    height: 100%;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
      ${(props) =>
        props.$ready &&
        css`
          font-size: 45px;
          width: 100%;
        `}
    @media screen and (min-width: 1260px) {
      font-size: 45px;
      width: 100%;
    }
    &:hover,
    &:focus {
      border-bottom: 1px solid grey;
    }
}`;
