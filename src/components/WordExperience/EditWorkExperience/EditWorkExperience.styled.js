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

export const EditWorkExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`;

export const EditWorkExperienceItem = styled.li`
  padding: 10px 3px 3px 3px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  position: relative;
`;

export const EditWorkExperienceInputBox = styled.ul`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 6px;
}`;

export const EditWorkExperienceInput = styled.input`
  outline: 1px solid #425168a8;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #425168;
  transition: 250ms;
  padding: 1px;
  padding-left: 4px;
  width: ${(props) => props.$tp && "100%"};
`;

export const EditWorkExperienceInputsItem = styled.li`
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

export const AddResponsibilities = styled.button`
  width: 17px;
  height: 17px;
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
`;

export const DeleteResponsibilities = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 17px;
  border-radius: 2px;
  background: #fff;
  outline: 1px solid #425168a8;
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
`;

export const ResponsibilitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
`;

export const ResponsibilitiesItem = styled.li`
  position: relative;
  display: flex;
  height: 17px;
`;

export const ResponsibilitiesBox = styled.div`
  display: flex;
  flex-direction: column;
`;
