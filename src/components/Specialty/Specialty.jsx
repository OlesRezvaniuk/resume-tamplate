export const Specialty = ({ usersData, change, setUserData, setChange }) => {
  function handleSpecialtyChange(e) {
    setUserData({ ...usersData, specialty: e.target.value });
  }
  return (
    <>
      {change ? (
        <input
          type="text"
          value={usersData.specialty}
          onChange={(e) => {
            handleSpecialtyChange(e);
          }}
        />
      ) : (
        <span>{usersData.specialty}</span>
      )}
    </>
  );
};
