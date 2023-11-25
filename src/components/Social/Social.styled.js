import styled from "styled-components";
import { ReactComponent as FacebookIconPrimal } from "./icon/facebook2.svg";
import { ReactComponent as LinkedinIconPrimal } from "./icon/linkedin.svg";
import { ReactComponent as GithubIconPrimal } from "./icon/github.svg";
import { ReactComponent as TelegramIconPrimal } from "./icon/telegram.svg";

export const SocialsContainer = styled.div`
  padding: 0px 30px;
  position: relative;
  height: 40px;
`;

export const FacebookIcon = styled(FacebookIconPrimal)`
  width: 32px;
  height: 32px;
  fill: #425168;
`;
export const LinkedinIcon = styled(LinkedinIconPrimal)`
  width: 32px;
  height: 32px;
  fill: #425168;
`;
export const GithubIcon = styled(GithubIconPrimal)`
  width: 32px;
  height: 32px;
  fill: #425168;
`;
export const TelegramIcon = styled(TelegramIconPrimal)`
  width: 32px;
  height: 32px;
  fill: #425168;
`;

export const SocialInputsListItem = styled.li`
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

export const SocialLinkInput = styled.input`
  cursor: pointer;
  width: 100%;
`;

export const SocialInputsList = styled.ul`
  position: absolute;
  width: calc(100% - 60px);
  left: 30px;
  top: -50%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const SocialInputItemName = styled.span`
  background: #425168;
  min-width: 85px;
  text-align: center;
  pointer-events: none;
  font-weight: 700;
  color: #fff;
`;

export const SocialLinkItem = styled.li`
  height: 32px;
  width: 32px;
  opacity: ${(props) => (props.$load ? 1 : 0.8)};
  transition: 250ms;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SocialLinksList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  justify-content: space-evenly;
`;
