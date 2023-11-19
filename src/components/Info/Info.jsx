export const Info = ({ userData, change, setUserData }) => {
  return (
    <div>
      {change ? (
        <textarea
          style={{ width: "100%", height: 80 }}
          value={userData.info}
          onChange={(e) => {
            setUserData({ ...userData, info: e.target.value });
          }}
        ></textarea>
      ) : (
        <p>{userData.info}</p>
      )}
    </div>
  );
};
