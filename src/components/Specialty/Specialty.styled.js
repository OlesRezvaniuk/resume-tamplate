import styled from "styled-components";

export const SpecialtyContainer = styled.div`
  margin-bottom: 20px;
  height: 18px;
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
  width: 300px;
  height: 100%;
  font-size: 100%;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  cursor: pointer;
  font-size: 14px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px #425168;
  }
`;
