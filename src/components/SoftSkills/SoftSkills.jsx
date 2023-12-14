import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import {
  SoftSkillsAddButton,
  SoftSkillsContainer,
  DeleteIcon,
  SoftSkillsItemEditButton,
  SoftSkillsListItem,
  SoftSkillsListInput,
  SoftSkillsList,
  SoftSkillsInput,
  SoftSkillsAddButtonBox,
  SoftSkillsAddButtonVariant,
  SoftSkillAddInputBox,
  CheckmarkIcon,
  CrossIcon,
  SoftSkillsTitle,
  SoftSkillsAddInput,
  SoftSkillsItem,
} from "./SoftSkills.styled";

export const SoftSkills = ({ userData, setUserData, change, readyToSave }) => {
  const [templateData, setTemplateData] = useState({ state: false, value: "" });
  const [editData, setEditData] = useState(userData.softSkills);

  useEffect(() => {
    change ? setEditData(userData.softSkills) : setEditData(null);
    userData.softSkills && setEditData(userData.softSkills);
    !change && setTemplateData({ state: false, value: "" });
  }, [change, userData.softSkills]);

  return (
    <SoftSkillsContainer $change={change}>
      <SoftSkillsTitle>Soft Skills</SoftSkillsTitle>
      {change && editData ? (
        <SoftSkillsListInput>
          {editData.map((item) => {
            const index = editData.findIndex((i) => i.id === item.id);
            return (
              <SoftSkillsListItem $ready={readyToSave} key={item.id}>
                <SoftSkillsInput
                  type="text"
                  name={item.id}
                  value={editData[index].value}
                  onChange={(e) => {
                    const updateData = [...editData];
                    updateData[index].value = e.target.value;
                    setEditData(updateData);
                  }}
                  onBlur={() => {
                    setUserData({ ...userData, socialSkills: editData });
                  }}
                />
                <SoftSkillsItemEditButton
                  $ready={readyToSave}
                  $bgColor={userData.options.bgColor}
                  onClick={() => {
                    const updateData = userData.softSkills.filter(
                      (i) => i.id !== item.id
                    );
                    setUserData({ ...userData, softSkills: updateData });
                  }}
                >
                  <DeleteIcon />
                </SoftSkillsItemEditButton>
              </SoftSkillsListItem>
            );
          })}
        </SoftSkillsListInput>
      ) : (
        <SoftSkillsList>
          {userData.softSkills.map((item) => {
            return (
              <SoftSkillsItem
                $markerColor={userData.options.aColor}
                key={item.id}
              >
                <p style={{ pointerEvents: "none" }}>{item.value}</p>
                {change && (
                  <SoftSkillsAddButtonBox>
                    <SoftSkillsAddButtonVariant
                      onClick={() => {
                        setEditData(item);
                      }}
                    >
                      edit
                    </SoftSkillsAddButtonVariant>
                    <SoftSkillsAddButtonVariant
                      style={{ height: "max-content" }}
                      onClick={() => {
                        const updateData = userData.softSkills.filter(
                          (i) => i.id !== item.id
                        );
                        setUserData({
                          ...userData,
                          softSkills: updateData,
                        });
                      }}
                    >
                      X
                    </SoftSkillsAddButtonVariant>
                  </SoftSkillsAddButtonBox>
                )}
              </SoftSkillsItem>
            );
          })}
        </SoftSkillsList>
      )}

      {templateData.state && (
        <SoftSkillAddInputBox>
          <SoftSkillsAddInput
            type="text"
            name="addSoftSkillsInput"
            id="techSkillsAddInput"
            value={templateData.value}
            onChange={(e) => {
              setTemplateData({ ...templateData, value: e.target.value });
            }}
          />
        </SoftSkillAddInputBox>
      )}
      {change && !templateData.state && (
        <SoftSkillsAddButton
          $bgColor={userData.options.bgColor}
          onClick={async () => {
            setUserData({
              ...userData,
              softSkills: [...userData.softSkills, { id: nanoid(), value: "" }],
            });
          }}
        >
          +
        </SoftSkillsAddButton>
      )}
    </SoftSkillsContainer>
  );
};
