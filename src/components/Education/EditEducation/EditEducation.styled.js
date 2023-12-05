import styled from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "../icon/delete.svg";

export const EditEducationItem = styled.li`
  padding: 10px 3px 3px 3px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  position: relative;
`;

export const EditEducationInputItem = styled.li`
  position: relative;
  &::before {
    content: ${(props) => props.$text && `"${props.$text}"`};
    position: absolute;
    font-size: 10px;
    top: -10px;
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
