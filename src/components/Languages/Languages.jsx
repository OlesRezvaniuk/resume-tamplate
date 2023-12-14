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
  LanguageItem,
  LanguageLevelListItem,
} from "./Languages.styled";

const languagesLevel = [
  "Beginner",
  "Elementary",
  "Pre-Intermediate",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
  "Proficiency",
];

export const Languages = ({ userData, setUserData, change, readyToSave }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    value: "",
    level: "",
    setLevel: false,
  });
  const [editData, setEditData] = useState(null);

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
        <ul
          style={{
            listStyle: "disc",
            listStylePosition: "inside",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {userData.languages.map((item) => {
            return (
              <LanguageItem
                $markerColor={userData.options.aColor}
                style={{ pointerEvents: "none" }}
                key={item.id}
              >
                <span>{item.value}</span>
                {item.level !== "" && " - "}
                <span>{item.level}</span>
              </LanguageItem>
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
                    $color={userData.options.bgColor}
                    onClick={() => {
                      const some = editData.some(
                        (i) => i.setLevel !== item.setLevel
                      );
                      if (some) {
                        console.log(some);
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
                          <LanguageLevelListItem
                            $bgColor={userData.options.bgColor}
                            key={`editLanguagesLevel-${item}`}
                          >
                            <LanguagesEditLevelItemButton
                              $bgColor={userData.options.bgColor}
                              onClick={async () => {
                                updateData[index].level = item;
                                updateData[index].setLevel = false;
                                await setEditData(updateData);
                              }}
                            >
                              {item}
                            </LanguagesEditLevelItemButton>
                          </LanguageLevelListItem>
                        );
                      })}
                    </LanguagesEditLevelList>
                  )}
                  <LanguageItemEditButton
                    $bgColor={userData.options.bgColor}
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
      {change && (
        <LanguagesAddButton
          $bgColor={userData.options.bgColor}
          onClick={() => {
            setUserData({
              ...userData,
              languages: [
                ...userData.languages,
                { id: nanoid(), value: "", setLevel: false, level: "" },
              ],
            });
          }}
        >
          +
        </LanguagesAddButton>
      )}
    </LanguagesContainer>
  );
};
