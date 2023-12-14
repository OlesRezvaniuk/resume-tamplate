import styled, { css } from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "./icon/delete.svg";
import { ReactComponent as CrossIconPrimal } from "./icon/cross.svg";
import { ReactComponent as CheckmarkIconPrimal } from "./icon/checkmark.svg";

export const SoftSkillsAddButton = styled.button`
  margin-left: auto;
  width: 20px;
  height: 20px;
  background: ${(props) => props.$bgColor};
  outline: 1px solid lightgrey;
  color: #fff;
  transition: 250ms;
  cursor: pointer;
  margin-top: 8px;
  position: absolute;
  bottom: -30px;
  right: 0;
  border-radius: 2px;
  &:hover,
  &:focus {
    background: #fff;
    color: ${(props) => props.$bgColor};
    outline: 1px solid ${(props) => props.$bgColor};
  }
  height: 26px;
  width: 26px;
  @media screen and (min-width: 1260px) {
    bottom: -24px;
    width: 20px;
    height: 20px;
  }
`;

export const SoftSkillsTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;
  pointer-events: none;
`;

export const SoftSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DeleteIcon = styled(DeleteIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;

export const CheckmarkIcon = styled(CheckmarkIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const CrossIcon = styled(CrossIconPrimal)`
  height: 12px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;

export const SoftSkillsListInput = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: disc;
`;
export const SoftSkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 15px;
`;

export const SoftSkillsListItem = styled.li`
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;

  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
  }
  height: 26px;
  ${(props) =>
    props.$ready &&
    css`
      height: 20px;
    `}
  @media screen and (min-width: 1260px) {
    height: 20px;
  }
`;

export const SoftSkillsInput = styled.input`
  width: 100%;
  background: none;
  cursor: pointer;
`;

export const SoftSkillsItemEditButton = styled.button`
  width: 21px;
  fill: #fff;
  background: ${(props) => props.$bgColor};
  border-left: 1px solid lightgrey;
  height: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    * {
      fill: ${(props) => props.$bgColor};
    }
    background: #fff;
    border-left: 1px solid lightgrey;
  }
  height: 26px;
  width: 26px;
  ${(props) =>
    props.$ready &&
    css`
      width: 21px;
      height: 20px;
    `}
  @media screen and (min-width: 1260px) {
    width: 21px;
    height: 20px;
  }
`;

export const SoftSkillsAddButtonBox = styled.div`
  position: absolute;
  right: 0;
  background: #425168;
  border-radius: 3px;
  width: 40px;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const SoftSkillsAddButtonVariant = styled.button`
  background: none;
  width: 20px;
  background: #425168;
  height: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 250ms;
  fill: #fff;
  &:hover,
  &:focus {
    background: #fff;
    fill: #425168;
    box-shadow: 0px 0px 1px #425168;
  }
`;

export const SoftSkillAddInputBox = styled.div`
  margin-top: 4px;
  position: relative;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  height: 20px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
  }
`;

export const SoftSkillsAddInput = styled.input`
  background: none;
  cursor: pointer;
  width: 100%;
`;

export const SoftSkillsItem = styled.li`
  height: 20px;
  &::marker {
    color: ${(props) => props.$markerColor};
  }
`;
