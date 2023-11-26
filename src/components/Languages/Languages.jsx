import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {
  LanguagesContainer,
  LanguagesTitle,
  LanguagesAddButton,
  DeleteIcon,
  LanguageItemEditButton,
  LanguagesSkillsListItem,
  LanguagesEditInputList,
  LanguagesEditInput,
  LanguagesEditLevelList,
  LanguagesEditLevelItemButton,
  LanguagesEditSetLevelButton,
} from "./Languages.styled";

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
  const [modalSetLevel, setModalSetLevel] = useState(false);

  useEffect(() => {
    if (change) {
      setEditData(userData.languages);
    } else {
      setTemplateData({ ...templateData, state: false });
      setEditData(null);

      userData.languages.map((item) => {
        item.setLevel === true && reset(item);
      });
    }
  }, [change, userData.languages]);

  function reset(item) {
    const updateData = [...userData.languages];
    const index = updateData.findIndex((i) => i.id === item.id);
    updateData[index].setLevel = false;
    setUserData({ ...userData, languages: updateData });
  }

  return (
    <LanguagesContainer>
      <LanguagesTitle>Languages</LanguagesTitle>

      {userData.languages.length > 0 && !change && (
        <ul style={{ listStyle: "none" }}>
          {userData.languages.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.value}</span>
                {item.level !== "" && " - "}
                <span>{item.level}</span>
              </li>
            );
          })}
        </ul>
      )}
      {editData && (
        <div>
          <LanguagesEditInputList>
            {editData.map((item) => {
              const index = editData.findIndex((i) => i.id === item.id);
              const updateData = [...editData];
              return (
                <LanguagesSkillsListItem
                  key={item.id}
                  $setLevel={item.setLevel}
                >
                  <LanguagesEditInput
                    type="text"
                    name={`editLanguages-${item.id}`}
                    value={editData[index].value}
                    onChange={(e) => {
                      const updateData = [...editData];
                      updateData[index].value = e.target.value;
                      setEditData(updateData);
                    }}
                  />
                  <LanguagesEditSetLevelButton
                    onClick={() => {
                      const some = editData.some(
                        (i) => i.setLevel !== item.setLevel
                      );
                      if (some) {
                        return;
                      } else {
                        updateData[index].setLevel = true;
                        setEditData(updateData);
                      }
                    }}
                  >
                    {item.level ? item.level : "level?"}
                  </LanguagesEditSetLevelButton>
                  {item.setLevel && (
                    <LanguagesEditLevelList>
                      {languagesLevel.map((item) => {
                        return (
                          <li
                            key={`editLanguagesLevel-${item}`}
                            style={{ display: "flex" }}
                          >
                            <LanguagesEditLevelItemButton
                              onClick={async () => {
                                updateData[index].level = item;
                                updateData[index].setLevel = false;
                                await setEditData(updateData);
                              }}
                            >
                              {item}
                            </LanguagesEditLevelItemButton>
                          </li>
                        );
                      })}
                    </LanguagesEditLevelList>
                  )}
                  <LanguageItemEditButton
                    onClick={() => {
                      const updateData = userData.languages.filter(
                        (i) => i.id !== item.id
                      );
                      setUserData({ ...userData, languages: updateData });
                    }}
                  >
                    <DeleteIcon />
                  </LanguageItemEditButton>
                </LanguagesSkillsListItem>
              );
            })}
          </LanguagesEditInputList>
        </div>
      )}
      {/* {userData.languages.length > 0 && (
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
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )} */}
      {change && (
        <LanguagesAddButton
          onClick={() => {
            setTemplateData({ ...templateData, state: true });
          }}
        >
          +
        </LanguagesAddButton>
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
    </LanguagesContainer>
  );
};
