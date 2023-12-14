import styled, { css } from "styled-components";
import { ReactComponent as UserPlugIconPrimal } from "./icon/user.svg";

export const UserPlugIcon = styled(UserPlugIconPrimal)`
  width: 100%;
  height: 100%;
  * {
    fill: lightgrey;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  width: inherit;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 340px;
  left: -30px;
  // ${(props) =>
    props.$ready &&
    css`
      width: 370px;
      height: 370px;
    `}
  @media screen and (min-width: 1260px) {
    width: 370px;
    height: 370px;
  }
`;

export const AvatarPlugBox = styled.div`
  width: 100%;
  height: 370px;
  background: #425168;
  border-radius: 4px;
`;

export const AvatarImg = styled.img`
  // max-height: 370px;
  // width: 370px;
`;
