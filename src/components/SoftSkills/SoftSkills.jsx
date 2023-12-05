import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import {
  SoftSkillsAddButton,
  SoftSkillsContainer,
  DeleteIcon,
  SoftSkillsItemEditButton,
  SoftSkillsListItem,
  SoftSkillsList,
  SoftSkillsInput,
  SoftSkillsAddButtonBox,
  SoftSkillsAddButtonVariant,
  SoftSkillAddInputBox,
  CheckmarkIcon,
  CrossIcon,
  SoftSkillsTitle,
  SoftSkillsAddInput,
} from "./SoftSkills.styled";

export const SoftSkills = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({ state: false, value: "" });
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    change ? setEditData(userData.softSkills) : setEditData(null);
    userData.softSkills && setEditData(userData.softSkills);
    !change && setTemplateData({ state: false, value: "" });
  }, [change, userData.softSkills]);

  return (
    <SoftSkillsContainer $change={change}>
      <SoftSkillsTitle>Soft Skills</SoftSkillsTitle>
      {change && editData ? (
        <SoftSkillsList>
          {editData.map((item) => {
            const index = editData.findIndex((i) => i.id === item.id);
            return (
              <SoftSkillsListItem key={item.id}>
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
        </SoftSkillsList>
      ) : (
        <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {userData.softSkills.map((item) => {
            return (
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
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
              </li>
            );
          })}
        </ul>
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
          <SoftSkillsAddButtonBox>
            <SoftSkillsAddButtonVariant
              onClick={() => {
                setUserData({
                  ...userData,
                  softSkills: [
                    ...userData.softSkills,
                    { id: nanoid(), value: templateData.value },
                  ],
                });
                setTemplateData({ state: false, value: "" });
              }}
            >
              <CheckmarkIcon title="" />
            </SoftSkillsAddButtonVariant>
            <SoftSkillsAddButtonVariant
              onClick={() => {
                setTemplateData({ state: false, value: "" });
              }}
            >
              <CrossIcon title="" />
            </SoftSkillsAddButtonVariant>
          </SoftSkillsAddButtonBox>
        </SoftSkillAddInputBox>
      )}
      {change && !templateData.state && (
        <SoftSkillsAddButton
          onClick={async () => {
            await setTemplateData({ ...templateData, state: true });
            const input = document.getElementById("techSkillsAddInput");
            input.focus();
          }}
        >
          +
        </SoftSkillsAddButton>
      )}
    </SoftSkillsContainer>
  );
};
