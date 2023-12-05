import styled from "styled-components";

export const AddWorkExperienceButtonsBox = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
  display: flex;
  gap: 6px;
`;

export const AddWorkExperienceAddButton = styled.button`
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
    background: #425168;
    outline: 1px solid #425168;
    color: #fff;
    fill: #425168;
  }
`;

export const AddWorkExperienceContainer = styled.div`
  height: 100px;
  padding: 10px 3px 10px 3px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  position: relative;
`;

export const AddWorkExperienceInput = styled.input`
  outline: 1px solid #425168a8;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #425168;
  transition: 250ms;
  padding: 1px;
  padding-left: 4px;
  margin-bottom: 6px;
  &::placeholder {
    transition: 250ms;
    opacity: 0.5;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 0px 3px #425168;
    &::placeholder {
      opacity: 0.8;
    }
  }
`;
