import { InfoContainer, InfoEditInput, InfoText } from "./Info.styled";
import { useState } from "react";

export const Info = ({ userData, change, setUserData }) => {
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
        <InfoText>{userData.info}</InfoText>
      )}
    </InfoContainer>
  );
};
