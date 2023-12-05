import {
  SpecialtyContainer,
  SpecialtyTitle,
  SpecialtyEditInput,
} from "./Specialty.styled";

export const Specialty = ({ usersData, change, setUserData, setChange }) => {
  function handleSpecialtyChange(e) {
    setUserData({ ...usersData, specialty: e.target.value });
  }
  return (
    <SpecialtyContainer>
      {change ? (
        <SpecialtyEditInput
          type="text"
          value={usersData.specialty}
          onChange={(e) => {
            handleSpecialtyChange(e);
          }}
        />
      ) : (
        <SpecialtyTitle>{usersData.specialty}</SpecialtyTitle>
      )}
    </SpecialtyContainer>
  );
};
