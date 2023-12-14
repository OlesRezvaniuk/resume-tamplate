import styled from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "../icon/delete.svg";

export const EditEducationItem = styled.li`
  padding: 10px 3px 3px 3px;
  border-radius: 3px;
  position: relative;
  height: auto;
  @media screen and (min-widht: 1260px) {
    height: 40px;
  }
`;

export const EditEducationInputItem = styled.li`
  position: relative;
  width: 100%;

  position: relative;
  opacity: 0.8;
  transition: 250ms;
  height: 26px;
  &::before {
    content: ${(props) => props.$text && `"${props.$text}"`};
    position: absolute;
    font-size: 10px;
    top: -10px;
    color: inherit;
  }
  @media screen and (min-width: 1260px) {
    height: 20px;
  }
`;

export const DeleteButton = styled.button`
  fill: lightgrey;
  background: none;
  outline: 1px solid lightgrey;
  transition: 250ms;
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  top: 0;
  right: -30px;
  &:hover,
  &:focus {
    fill: #425168;
    outline: 1px solid #425168;
  }
`;

export const DeleteIcon = styled(DeleteIconPrimal)`
  width: 18px;
  height: 18px;
  fill: inherit;
  color: inherit;

  * {
    fill: inherit;
    color: inherit;
  }
`;

export const EditEducationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 6px;
  gap: 10px;
  @media screen and (min-width: 1260px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5px;
  }
`;

export const EditEducationInput = styled.input`
  border-bottom: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 2px;
  cursor: pointer;
  height: 26px;
  box-shadow: 0px 0px 0px #425168;
  transition: 250ms;
  padding: 1px;
  padding-left: 4px;
  width: 100%;
  @media screen and (min-width: 1260px) {
    display: flex;
    height: auto;
  }
`;
