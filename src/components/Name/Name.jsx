import { NameBox, NameTitle, NameEditInput } from "./Name.styled";

export const Name = ({ userData, change, setUserData, readyToSave }) => {
  return (
    <NameBox $ready={readyToSave}>
      {change ? (
        <NameEditInput
          $ready={readyToSave}
          type="text"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
        />
      ) : (
        <NameTitle $ready={readyToSave}>
          {userData.name === "" ? "User name" : userData.name}
        </NameTitle>
      )}
    </NameBox>
  );
};
