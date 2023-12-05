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

export const EditProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  // list-style: none;
`;

export const EditProjectsListItem = styled.li`
  width: max-content;
  height: 100px;
  padding: 10px 3px 10px 3px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  position: relative;
`;

export const EditProjectsInputsList = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  list-style: none;
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
  resize: none;
  width: 100%;
  height: calc(100% - 19px);
  cursor: pointer;
`;

export const EditProjectsInput = styled.input`
  outline: 1px solid #425168a8;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #425168;
  transition: 250ms;
  padding: 1px;
  padding-left: 4px;
  margin-bottom: 6px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 3px #425168;
  }
`;
