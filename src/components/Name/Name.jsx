import firebaseRequests from "../../firebase/firebaseRuquests/firebaseRequests";

export const Name = ({ userData, controls, setUserData, user }) => {
  console.log(userData);
  return (
    <>
      <br />
      {controls ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
          onBlur={() => {
            firebaseRequests.postUserData({ userData, user });
          }}
        />
      ) : (
        <h1>{userData.name}</h1>
      )}
    </>
  );
};
