import styled, { css } from "styled-components";
import { ReactComponent as FacebookIconPrimal } from "./icon/facebook2.svg";
import { ReactComponent as LinkedinIconPrimal } from "./icon/linkedin.svg";
import { ReactComponent as GithubIconPrimal } from "./icon/github.svg";
import { ReactComponent as TelegramIconPrimal } from "./icon/telegram.svg";

export const SocialsContainer = styled.div`
  position: relative;
  height: 40px;
`;

export const FacebookIcon = styled(FacebookIconPrimal)`
  width: inherit;
  height: inherit;
  fill: inherit;
  * {
    fill: inherit;
  }
`;
export const LinkedinIcon = styled(LinkedinIconPrimal)`
  width: inherit;
  height: inherit;
  fill: inherit;
  * {
    fill: inherit;
  }
`;
export const GithubIcon = styled(GithubIconPrimal)`
  width: inherit;
  height: inherit;
  fill: inherit;
  * {
    fill: inherit;
  }
`;
export const TelegramIcon = styled(TelegramIconPrimal)`
  width: inherit;
  height: inherit;
  fill: inherit;
  * {
    fill: inherit;
  }
`;

export const SocialInputsListItem = styled.li`
  padding: 0px 0px 0px 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 1px lightgrey;
  border-radius: 2px;
  align-items: center;
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

export const SocialLinkInput = styled.input`
  cursor: pointer;
  width: 100%;
  background: none;
`;

export const SocialInputsList = styled.ul`
  position: absolute;
  width: 100%;
  left: 0px;
  top: -50%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SocialInputItemName = styled.span`
  height: 20px;
  margin-right: 1px;
  @media screen and (min-width: 1260px) {
    height: 18px;
  }
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
