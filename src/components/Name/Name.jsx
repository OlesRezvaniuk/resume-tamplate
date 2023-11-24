export const Name = ({ userData, change, setUserData }) => {
  return (
    <>
      {change ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
        />
      ) : (
        <h1>{userData.name === "" ? "User name" : userData.name}</h1>
      )}
    </>
  );
};
