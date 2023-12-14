import { InfoContainer, InfoEditInput, InfoText } from "./Info.styled";
import { useEffect, useState } from "react";

export const Info = ({ userData, change, setUserData, readyToSave }) => {
  return (
    <InfoContainer>
      {change ? (
        <InfoEditInput
          value={userData.info}
          onChange={(e) => {
            setUserData({ ...userData, info: e.target.value });
          }}
        ></InfoEditInput>
      ) : (
        <InfoText $ready={readyToSave}>{userData.info}</InfoText>
      )}
    </InfoContainer>
  );
};
