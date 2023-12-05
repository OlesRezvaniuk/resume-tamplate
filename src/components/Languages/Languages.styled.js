import styled from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "./icon/delete.svg";
import { ReactComponent as CrossIconPrimal } from "./icon/cross.svg";
import { ReactComponent as CheckmarkIconPrimal } from "./icon/checkmark.svg";

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

export const LanguagesAddButtonBox = styled.div`
  background: #425168;
  border-radius: 3px;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const LanguagesAddButtonVariant = styled.button`
  background: none;
  background: #425168;
  height: 100%;
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

export const LanguagesContainer = styled.div`
  padding: 0px 30px;
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
  background: #425168;
  color: #fff;
  transition: 250ms;
  cursor: pointer;
  margin-top: 8px;
  position: absolute;
  bottom: -30px;
  right: 30px;
  &:hover,
  &:focus {
    background: #fff;
    color: #425168;
    outline: 1px solid #425168;
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
    background: #fff;
  }
`;

export const DeleteIcon = styled(DeleteIconPrimal)`
  height: 14px;
  fill: inherit;
  pointer-events: none;
  margin-bottom: 1px;
`;

export const LanguageItemEditButton = styled.button`
  width: 20px;
  fill: #fff;
  background: #425168;
  height: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    fill: #425168;
    background: #fff;
    outline: 1px solid #425168;
  }
  height: 26px;
  width: 26px;
  @media screen and (min-width: 1260px) {
    width: 20px;
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
  &:hover,
  &:focus {
    background: #fff;
  }
`;
export const LanguagesAddInput = styled.input`
  background: none;
  cursor: pointer;
  width: 133.25px;
  transition: 250ms;
  &:hover,
  &:focus {
    background: #fff;
  }
`;

export const LanguagesEditLevelList = styled.ul`
  list-style: none;
  position: absolute;
  height: 60px;
  overflow: overlay;
  right: 64px;
  background: #425168;
  scroll-behavior: smooth;
  z-index: 1;
  width: 132.2px;
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
    background: #fff;
    color: #425168;
  }
`;

export const LanguagesEditSetLevelButton = styled.button`
  width: 180px;
  width: -webkit-fill-available;
  border: 1px solid #425168;
  transition: 250ms;
  cursor: pointer;
  color: #fff;
  background: #425168;
  &:hover,
  &:focus {
    background: none;
    color: #425168;
  }
`;

export const LanguagesAddBox = styled.div`
  margin-top: 3px;
  position: relative;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  height: 19px;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
    background: #fff;
  }
`;

export const LanguagesAddSetLevelButton = styled.button`
  background: lightgrey;
  width: 100%;
  cursor: pointer;
  background: #425168;
  color: #fff;
  transition: 250ms;
  &:hover,
  &:focus {
    background: #fff;
    color: #425168;
    border: 1px solid #425168;
  }
`;
