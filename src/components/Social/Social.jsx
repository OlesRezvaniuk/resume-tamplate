import { useState, useEffect } from "react";
import { FacebookIcon } from "./Social.styled";

export const Social = ({ userData, setUserData, change }) => {
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (change) {
      setEditData(userData.social);
    } else {
      setEditData(null);
    }
  }, [change]);

  return (
    <div
      style={{
        background: "#425168",
        height: 50,
        position: "relative",
        width: "100%",
      }}
    >
      {editData && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "-50%",
            background: "#425168",
          }}
        >
          <ul>
            {Object.keys(editData).map((item) => {
              return (
                <li key={`editSocialData-${item}`}>
                  <span style={{ color: "#fff" }}>{item}</span>
                  {" - "}
                  <input
                    type="text"
                    name={item}
                    value={editData[item]}
                    onChange={(e) => {
                      setEditData({ ...editData, [item]: e.target.value });
                    }}
                    onBlur={() => {
                      setUserData({ ...userData, social: editData });
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              console.log(editData);
              setUserData({ ...userData, social: editData });
              setEditData(null);
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              setEditData(null);
            }}
          >
            cancel
          </button>
        </div>
      )}
      <ul style={{ display: "flex", gap: 20 }}>
        {Object.keys(userData.social).map((item) => {
          if (userData.social[item] !== "") {
            return (
              <li key={`socialLink-${item}`}>
                <a
                  target="_blank"
                  href={
                    item === "telegram"
                      ? `https://t.me/${userData.social[item]}`
                      : `https://${userData.social[item]}`
                  }
                >
                  {item === "facebook" && <FacebookIcon title="" />}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
