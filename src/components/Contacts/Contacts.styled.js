import styled from "styled-components";

export const ContactsContainer = styled.div`
  padding: 0px 30px;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 700;
  pointer-events: none;
`;

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ContactsInputsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ContactsInputsListItem = styled.li`
  padding: 0px 0px 0px 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
  }
`;

export const ContactsInput = styled.input`
  cursor: pointer;
  width: 100%;
`;

export const ContactInputItemName = styled.span`
  background: #425168;
  min-width: 85px;
  text-align: center;
  pointer-events: none;
  font-weight: 700;
  color: #fff;
`;

export const ContactLink = styled.a`
  text-decoration: auto;
  position: relative;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
