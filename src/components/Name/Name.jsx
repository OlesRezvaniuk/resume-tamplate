import { NameBox, NameTitle, NameEditInput } from "./Name.styled";

export const Name = ({ userData, change, setUserData }) => {
  return (
    <NameBox>
      {change ? (
        <NameEditInput
          type="text"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
        />
      ) : (
        <NameTitle>
          {userData.name === "" ? "User name" : userData.name}
        </NameTitle>
      )}
    </NameBox>
  );
};
