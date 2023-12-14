import styled from "styled-components";
import { ReactComponent as DeleteIconPrimal } from "../icon/delete.svg";

export const DeleteIcon = styled(DeleteIconPrimal)`
  width: ${(props) => (props.$type === "responsibilities" ? "12px" : "18px")};
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
  top: -5px;
  right: -36px;
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

export const EditWorkExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  width: calc(100% - 30px);
  @media screen and (min-width: 1260px) {
    width: initial;
  }
`;

export const EditWorkExperienceItem = styled.li`
  // padding: 10px 3px 3px 3px;
  min-height: 56px;
  border-bottom: 1px solid lightgrey;
  position: relative;
`;

export const EditWorkExperienceInputBox = styled.ul`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 6px;
    flex-direction: column;
    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }
}`;

export const EditWorkExperienceInput = styled.input`
  border-bottom: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #425168;
  transition: 250ms;
  padding: 1px;
  padding-left: 4px;
  width: 100%;
  height: 26px;
  width: ${(props) => props.$tp && "100%"};
  @media screen and (min-width: 1260px) {
    height: 20px;
  }
`;

export const EditWorkExperienceInputsItem = styled.li`
  width: 100%;
  position: relative;
  opacity: 0.8;
  transition: 250ms;
  height: 26px;
  margin-bottom: 4px;
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
  @media screen and (min-width: 1260px) {
    margin-bottom: initial;
    height: 20px;
  }
`;

export const AddResponsibilities = styled.button`
  margin-top: 3px;
  width: 24px;
  height: 24px;
  background: #fff;
  outline: 1px solid lightgrey;
  color: #fff;
  color: lightgrey;
  fill: #425168;
  cursor: pointer;
  border-radius: 2px;
  transition: 250ms;
  margin-left: auto;
  &:hover,
  &:focus {
    color: #fff;
    background: #425168;
    outline: 1px solid #425168;
  }
  @media screen and (min-width: 1260px) {
    width: 17px;
    height: 17px;
  }
`;

export const DeleteResponsibilities = styled.button`
  // position: absolute;
  // right: 0;
  // top: 0;
  margin-left: 3px;
  height: 100%;
  width: 26px;
  border-radius: 2px;
  background: #fff;
  outline: 1px solid lightgrey;
  cursor: pointer;
  transition: 250ms;
  color: lightgrey;
  fill: lightgrey;
  &:hover,
  &:focus {
    background: #425168;
    outline: 1px solid #425168;
    fill: #fff;
  }
  @media screen and (min-width: 1260px) {
    width: 17px;
  }
`;

export const ResponsibilitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  // margin-bottom: 4px;
`;

export const ResponsibilitiesItem = styled.li`
  position: relative;
  display: flex;
  height: 26px;
  @media screen and (min-width: 1260px) {
    height: 20px;
  }
`;

export const ResponsibilitiesBox = styled.div`
  display: flex;
  flex-direction: column;
`;
