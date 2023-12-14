import styled, { css } from "styled-components";
import { ReactComponent as TelIconPrimal } from "./icon/mobile2.svg";
import { ReactComponent as EmailIconPrimal } from "./icon/envelop.svg";
import { ReactComponent as LocationIconPrimal } from "./icon/location.svg";

export const TelIcon = styled(TelIconPrimal)`
  width: 18px;
  height: 18px;
  fill: inherit;
  ${(props) =>
    props.$ready &&
    css`
      width: 18px;
      height: 18px;
    `}
  @media screen and (min-width: 1260px) {
    width: 18px;
    height: 18px;
  }
`;
export const EmailIcon = styled(EmailIconPrimal)`
  width: 18px;
  height: 18px;
  fill: inherit;
  ${(props) =>
    props.$ready &&
    css`
      width: 18px;
      height: 18px;
    `}
  @media screen and (min-width: 1260px) {
    width: 18px;
    height: 18px;
  }
`;

export const LocationIcon = styled(LocationIconPrimal)`
  width: 22px;
  height: 22px;
  fill: inherit;
  ${(props) =>
    props.$ready &&
    css`
      width: 18px;
      height: 18px;
    `}
  @media screen and (min-width: 1260px) {
    width: 18px;
    height: 18px;
  }
`;

export const ContactsContainer = styled.div``;

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
  gap: 4px;
`;

export const ContactsInputsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactsInputsListItem = styled.li`
  padding: 0px 0px 0px 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  transition: 250ms;
  fill: #425168;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px grey;
    fill: #425168;
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

export const ContactsInput = styled.input`
  cursor: pointer;
  width: 100%;
  background: none;
`;

export const ContactInputType = styled.span`
align-items: center;
  display: flex;
  background: none;
  text-align: center;
  pointer-events: none;
  font-weight: 700;
  color: #fff;
  padding: 1px;
}
`;

export const ContactLink = styled.a`
  text-decoration: auto;
  position: relative;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactListItem = styled.li`
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
