import styled from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "../icon/delete.svg";

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

export const DeleteButton = styled.button`
  fill: lightgrey;
  background: none;
  outline: 1px solid lightgrey;
  transition: 250ms;
  cursor: pointer;
  position: absolute;

  height: 30px;
  width: 30px;
  border-radius: 2px;
  top: 5px;
  right: -33px;
  &:hover,
  &:focus {
    fill: #425168;
    outline: 1px solid #425168;
  }
  @media screen and (min-width: 1260px) {
    width: 24px;
    height: 24px;
    top: 6px;
    right: -30px;
  }
`;

export const EditProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  width: calc(100% - 30px);
  @media screen and (min-width: 1260px) {
    width: auto;
    list-style: initial;
    display: flex;
  }
`;

export const EditProjectsListItem = styled.li`
  min-height: auto;
  padding: 10px 3px 10px 3px;
  position: relative;
  width: initial;
  border-bottom: 1px solid lightgrey;
  @media screen and (min-width: 1260px) {
    transition: 250ms;
    height: 100px;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid grey;
  }
`;

export const EditProjectsInputsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  list-style: none;
  @media screen and (min-width: 1260px) {
    display: flex;
    flex-direction: row;
  }
`;

export const EditProjectsInputsItem = styled.li`
  width: 100%;
  position: relative;
  opacity: 0.8;
  transition: 250ms;
  &::before {
    content: ${(props) => props.$text && `"${props.$text}"`};
    position: absolute;
    font-size: 10px;
    top: -10px;
    color: inherit;
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const EditProjectsTextInput = styled.textarea`
  position: relative;
  resize: none;
  width: 100%;
  cursor: pointer;
  height: 120px;
  @media screen and (min-width: 1260px) {
    height: calc(100% - 19px);
  }
  &::placeholder {
    content: "info";
  }
  @media screen and (min-width: 1260px) {
    height: 100px;
  }
`;

export const EditProjectsInput = styled.input`
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #425168;
  transition: 250ms;
  padding: 1px;
  padding-left: 4px;
  margin-bottom: 6px;
  border-bottom: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  width: 100%;
  height: 26px;
  &:hover,
  &:focus {
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
  }
  @media screen and (min-width: 1260px) {
    height: auto;
  }
`;
