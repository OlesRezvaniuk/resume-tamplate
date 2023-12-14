import styled, { css } from "styled-components";
import { ReactComponent as AuthIconPrimal } from "./icon/google.svg";
import { ReactComponent as DownloadIconPrimal } from "./icon/download.svg";
import { ReactComponent as SaveIconPrimal } from "./icon/save.svg";
import { ReactComponent as EditIconPrimal } from "./icon/edit.svg";
import { ReactComponent as ResetIconPrimal } from "./icon/reset.svg";
import { ReactComponent as ZoomPlusIconPrimal } from "./icon/zoom-in.svg";
import { ReactComponent as ZoomMinusIconPrimal } from "./icon/zoom-out.svg";

export const AuthIcon = styled(AuthIconPrimal)`
  height: 100%;
  width: 100%;
  * {
    fill: ${(props) => (props.$singed ? "auto" : "grey")};
  }
`;
export const DownloadIcon = styled(DownloadIconPrimal)`
  height: 100%;
  width: 100%;
  fill: inherit;
`;
export const ZoomPlusIcon = styled(ZoomPlusIconPrimal)`
  height: 100%;
  width: 100%;
  fill: inherit;
`;
export const ZoomMinusIcon = styled(ZoomMinusIconPrimal)`
  pointer-events: none;
  height: 100%;
  width: 100%;
  fill: inherit;
`;
export const ResetIcon = styled(ResetIconPrimal)`
  height: 100%;
  width: 100%;
  fill: inherit;
`;
export const SaveIcon = styled(SaveIconPrimal)`
  height: 100%;
  width: 100%;
  fill: inherit;
`;
export const EditIcon = styled(EditIconPrimal)`
  height: 100%;
  width: 100%;
  fill: inherit;
`;

export const ControlsContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: auto;
  margin-right: 15px;
  height: 36px;
  padding: 3px 15px;
  box-shadow: 0px 0px 3px lightgrey;
  z-index: 100;
  background: #ffffffde;
  backdrop-filter: blur(10px);
  display: flex;
  gap: 3px;

  width: 100%;
  @media screen and (min-width: 1260px) {
    right: ${(props) => props.$mr};
    left: auto;
    width: 340px;
    padding: 3px 3px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  ${(props) =>
    props.$bgColor &&
    css`
      background: ${props.$bgColor};
    `}
`;

export const ControlButton = styled.button`
  height: 100%;
  width: 30px;
  border-radius: 4px;
  padding: 3px;
  cursor: pointer;
  background: none;
  transition: 250ms;
  box-shadow: 0px 0px 3px lightgrey;
  background: #fff;
  fill: ${(props) => props.$fill};
  ${(props) =>
    props.$state &&
    css`
      background: ${(props) => props.$bgActive};
      fill: #fff;
    `}
  ${(props) =>
    props.$tp === "download" &&
    css`
      padding: 3px 2px 2px 4px;
    `}
      ${(props) =>
    props.$controls &&
    css`
      width: 24px;
      background: #ffffffde;
      backdrop-filter: blur(10px);
    `}
        &:hover,
        &:focus {
    box-shadow: 0px 0px 3px #fff;
  }
  ${(props) =>
    props.$colorPicker &&
    css`
      background: ${props.$color};
      border: 3px solid #fff;
    `}
`;

export const ControlsButtonsBox = styled.div`
  height: 100%;
  display: flex;
  gap: 3px;
  border-radius: 4px;
  margin-left: auto;
`;

export const UserName = styled.span`
  pointer-events: none;
  user-select: none;
  align-self: center;
  width: 120px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => (props.$color ? props.$color : "initial")};
  margin-left: 10px;
`;

export const ControlsBox = styled.div`
  position: absolute;
  display: flex;
  bottom: 0px;
  transform: translateY(100%);
  height: 30px;
  gap: 3px;
  padding: 3px;
  right: 0px;
`;
