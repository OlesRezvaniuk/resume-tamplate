import styled, { css } from "styled-components";
import { ReactComponent as CrossIconPrimal } from "./icon/cross.svg";
import { ReactComponent as CheckmarkIconPrimal } from "./icon/checkmark.svg";
import { ReactComponent as DeleteIconPrimal } from "./icon/delete.svg";
import { ReactComponent as PencilIconPrimal } from "./icon/pencil.svg";

export const TechSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: ${(props) => props.$edit && "30px"};
  @media screen and (min-width: 1260px) {
    margin-top: 0;
  }
`;

export const TechSkillsTitle = styled.h2`
  pointer-events: none;
  margin-bottom: 8px;
`;

export const TechSkillsAddButton = styled.button`
  margin-left: auto;
  background: ${(props) => props.$bgColor};
  outline: 1px solid lightgrey;
  border-radius: 2px;

  color: #fff;
  transition: 250ms;
  cursor: pointer;
  position: absolute;
  right: 0;
  &:hover,
  &:focus {
    background: #fff;
    color: ${(props) => props.$bgColor};
    outline: 1px solid ${(props) => props.$bgColor};
  }
  bottom: -30px;
  height: 26px;
  width: 26px;
  @media screen and (min-width: 1260px) {
    bottom: -24px;
    width: 20px;
    height: 20px;
  }
`;

export const TechSkillsAddButtonBox = styled.div`
  position: absolute;
  right: 0;
  background: #425168;
  border-radius: 3px;
  width: 40px;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const CheckmarkIcon = styled(CheckmarkIconPrimal)`
  height: 16px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const CrossIcon = styled(CrossIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const DeleteIcon = styled(DeleteIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;
export const PencilIcon = styled(PencilIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;

export const TechSkillAddInputBox = styled.div`
  margin-top: 3px;
  position: relative;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  height: 20px;
`;

export const TechSkillsAddButtonVariant = styled.button`
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

export const TechSkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style-position: inside;
`;

export const TechSkillsListItem = styled.li`
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
  @media screen and (min-width: 1260px) {
    height: 20px;
  }
`;

export const TechSkillsItemEditBox = styled.div`
  margin-left: auto;
  width: 64px;
  display: flex;
  height: 20px;
  border-radius: 3px;
`;

export const TechSkillsItemEditButton = styled.button`
  fill: #fff;
  background: ${(props) => props.$fill};
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 250ms;
  border-left: 1px solid lightgrey;
  &:hover,
  &:focus {
    background: #fff;
    * {
      fill: ${(props) => props.$fill};
    }
  }
  height: 26px;
  width: 26px;
  @media screen and (min-width: 1260px) {
    width: 21px;
    height: 20px;
  }
`;

export const TechSkillsInput = styled.input`
  width: 100%;
  background: none;
  cursor: pointer;
`;

export const TechSkillsItem = styled.li`
  height: 20px;
  &::marker {
    color: ${(props) => props.$markerColor};
  }
`;
