import styled from "styled-components";
import { ReactComponent as CheckIconPrimal } from "../icon/checkmark.svg";
import { ReactComponent as CrossIconPrimal } from "../icon/cross.svg";

export const CheckIcon = styled(CheckIconPrimal)`
  width: 18px;
  height: 18px;
  fill: inherit;
  color: inherit;

  * {
    fill: inherit;
    color: inherit;
  }
`;

export const CrossIcon = styled(CrossIconPrimal)`
  width: 16px;
  height: 16px;
  fill: inherit;
  color: inherit;

  * {
    fill: inherit;
    color: inherit;
  }
`;

export const AddProjectButtonsBox = styled.div`
  position: absolute;
  bottom: -30px;
  display: flex;
  right: 0;
  gap: 6px;
`;

export const AddProjectsConfirmButton = styled.button`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: none;
  outline: 1px solid lightgrey;
  border-radius: 2px;
  color: lightgrey;
  transition: 250ms;
  cursor: pointer;
  fill: lightgrey;
  &:hover,
  &:focus {
    background: none;
    outline: 1px solid #425168;
    color: #fff;
    fill: #425168;
  }
`;

export const AddButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: -30px;
  background: none;
  outline: 1px solid lightgrey;
  border-radius: 2px;
  color: lightgrey;
  transition: 250ms;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #425168;
    outline: 1px solid #425168;
    color: #fff;
  }
  right: 30px;
  @media screen and (min-width: 1260px) {
    right: 0;
  }
`;

export const AddProjectContainer = styled.div`
  height: 100px;
  padding: 10px 3px 10px 3px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  position: relative;
  margin-top: 8px;
`;

export const AddProjectInputsList = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  list-style: none;
`;

export const AddProjectInputsListItem = styled.li`
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

export const AddProjectInput = styled.input`
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
  &::placeholder {
    opacity: 0.5;
  }
`;

export const AddProjectTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: calc(100% - 19px);
  cursor: pointer;
  &::placeholder {
    opacity: 0.5;
  }
`;
