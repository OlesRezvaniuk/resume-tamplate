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
  bottom: 0px;
  right: 0;
  display: flex;
  gap: 6px;
`;

export const AddButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: -30px;
  right: 0px;
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
`;
