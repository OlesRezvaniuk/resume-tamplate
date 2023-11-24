import { nanoid } from "nanoid";
import { useState } from "react";

const languagesLevel = [
  "Beginner",
  "Elementary",
  "Pre-Intermediate",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
  "Proficiency",
  "Native",
];

export const Languages = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    value: "",
    level: "",
    setLevel: false,
  });
  const [editData, setEditData] = useState(null);
  const [editLanguage, setEditLanguage] = useState(false);

  return (
    <div>
      <h2>Languages</h2>
      {editData && (
        <div>
          <input
            type="text"
            name={`editLanguages-${editData.id}`}
            value={editData.value}
            onChange={(e) => {
              setEditData({ ...editData, value: e.target.value });
            }}
          />
          {" - "}
          <button
            onClick={() => {
              setEditLanguage(true);
            }}
          >
            {editData.level}
          </button>
          {editLanguage && (
            <ul>
              {languagesLevel.map((item) => {
                return (
                  <li key={`editLanguages-${item}-edit`}>
                    <button
                      onClick={() => {
                        setEditData({ ...editData, level: item });
                        setEditLanguage(false);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          <br />
          <button
            onClick={() => {
              const updateData = userData.languages;
              const index = updateData.findIndex((i) => i.id === editData.id);
              updateData[index] = editData;
              setUserData({ ...userData, languages: updateData });
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
      {userData.languages.length > 0 && (
        <div>
          <ul>
            {userData.languages.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.value}</span>
                  {" - "}
                  <span>{item.level}</span>
                  {change && (
                    <div>
                      <button
                        onClick={() => {
                          setEditData(item);
                        }}
                      >
                        edit
                      </button>
                      <button
                        onClick={() => {
                          const updateData = userData.languages.filter(
                            (item) => item.id !== editData.id
                          );

                          setUserData({ ...userData, languages: updateData });
                        }}
                      >
                        X
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {change && (
        <button
          onClick={() => {
            setTemplateData({ ...templateData, state: true });
          }}
        >
          add
        </button>
      )}
      {templateData.state && (
        <div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              name="addLanguagesInput"
              value={templateData.value}
              onChange={(e) => {
                setTemplateData({ ...templateData, value: e.target.value });
              }}
            />
            <div
              style={{ background: "lightgrey", height: 20, width: "100%" }}
              onClick={() => {
                setTemplateData({ ...templateData, setLevel: true });
              }}
            >
              {templateData.level}
            </div>
          </div>
          {templateData.setLevel && (
            <ul>
              {languagesLevel.map((item) => {
                console.log(item);
                return (
                  <li
                    onClick={() => {
                      setTemplateData({
                        ...templateData,
                        level: item,
                        setLevel: false,
                      });
                    }}
                    key={`languagesList-${item}`}
                  >
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          )}
          <button
            onClick={() => {
              setUserData({
                ...userData,
                languages: [
                  ...userData.languages,
                  {
                    id: nanoid(),
                    value: templateData.value,
                    level: templateData.level,
                  },
                ],
              });
              setTemplateData({
                state: false,
                value: "",
                level: "",
                setLevel: false,
              });
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              setTemplateData({
                state: false,
                value: "",
                level: "",
                setLevel: false,
              });
            }}
          >
            cancel
          </button>
        </div>
      )}
    </div>
  );
};
