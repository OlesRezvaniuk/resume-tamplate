import styled from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "./icon/delete.svg";

export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LanguagesTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;
  pointer-events: none;
`;

export const LanguagesAddButton = styled.button`
  margin-left: auto;
  width: 20px;
  height: 20px;
  background: ${(props) => props.$bgColor};
  color: #fff;
  transition: 250ms;
  cursor: pointer;
  margin-top: 8px;
  position: absolute;
  bottom: -30px;
  right: 0;
  border-radius: 2px;
  outline: 1px solid lightgrey;
  &:hover,
  &:focus {
    background: #fff;
    color: ${(props) => props.$bgColor};
    outline: 1px solid lightgrey;
  }
  height: 26px;
  width: 26px;
  @media screen and (min-width: 1260px) {
    bottom: -24px;
    width: 20px;
    height: 20px;
  }
`;

export const LanguagesSkillsListItem = styled.li`
  position: relative;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  transition: 250ms;
  z-index: ${(props) => (props.$setLevel ? 1 : 0)};
  box-shadow: 0px 0px 0px 1px lightgrey;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
  }
`;

export const DeleteIcon = styled(DeleteIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;

export const LanguageItemEditButton = styled.button`
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
  outline: 1px solid lightgrey;
  &:hover,
  &:focus {
    * {
      fill: ${(props) => props.$bgColor};
    }
    background: #fff;
    outline: 1px solid ${(props) => props.$bgColor};
  }
  height: 26px;
  width: 26px;
  @media screen and (min-width: 1260px) {
    width: 21px;
    height: 20px;
  }
`;

export const LanguagesEditInputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

export const LanguagesEditInput = styled.input`
  background: none;
  cursor: pointer;
  width: 100%;
  transition: 250ms;
  // &:hover,
  // &:focus {
  //   background: #fff;
  // }
`;

export const LanguagesEditLevelList = styled.ul`
  list-style: none;
  position: absolute;
  height: 68px;
  overflow: overlay;
  right: 0px;
  background: #fff;
  scroll-behavior: smooth;
  z-index: 1;
  width: 160px;
  box-shadow: 0px 0px 0px 1px lightgrey;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
  }
`;

export const LanguagesEditLevelItemButton = styled.button`
  background: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  text-align: start;
  transition: 250ms;
  &:hover,
  &:focus {
    color: ${(props) => props.$bgColor};
  }
`;

export const LanguagesEditSetLevelButton = styled.button`
  width: 180px;
  width: -webkit-fill-available;
  outline: 1px solid lightgrey;
  margin-right: 3px;
  transition: 250ms;
  cursor: pointer;
  color: #fff;
  background: none;
  &:hover,
  &:focus {
    background: #fff;
    color: ${(props) => props.$color};
    outline: 1px solid grey;
  }
`;

export const LanguageItem = styled.li`
  &::marker {
    color: ${(props) => props.$markerColor};
  }
`;

export const LanguageLevelListItem = styled.li`
  display: flex;
  padding: 0px 6px;
  transition: 250ms;
  cursor: pointer;
  color: #fff;
  background: ${(props) => props.$bgColor};
  &:hover,
  &:focus {
    background: #fff;
  }
`;
