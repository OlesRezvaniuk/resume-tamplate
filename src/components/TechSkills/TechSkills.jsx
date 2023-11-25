import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {
  TechSkillsContainer,
  TechSkillsTitle,
  TechSkillsAddButton,
  TechSkillAddInputBox,
  CheckmarkIcon,
  TechSkillsAddButtonBox,
  TechSkillsAddButtonVariant,
  CrossIcon,
  TechSkillsList,
  TechSkillsListItem,
  TechSkillsItemEditBox,
  TechSkillsItemEditButton,
  PencilIcon,
  DeleteIcon,
  TechSkillsInput,
} from "./TechSkills.styled";

export const TechSkills = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({ state: false, value: "" });
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    change ? setEditData(userData.techSkills) : setEditData(null);
    userData.techSkills && setEditData(userData.techSkills);
    !change && setTemplateData({ state: false, value: "" });
  }, [change, userData.techSkills]);

  return (
    <TechSkillsContainer>
      <TechSkillsTitle>TechSkills</TechSkillsTitle>
      {change ? (
        <TechSkillsList>
          {editData.map((item) => {
            const index = editData.findIndex((i) => i.id === item.id);
            return (
              <TechSkillsListItem key={`editTechSkill-${item.id}`}>
                <TechSkillsInput
                  type="text"
                  name={`editTechSkill-${item.id}`}
                  value={editData[index].value}
                  onChange={(e) => {
                    const updateData = [...editData];
                    updateData[index].value = e.target.value;
                    setEditData(updateData);
                  }}
                  onBlur={() => {
                    setUserData({ ...userData, techSkills: editData });
                  }}
                />

                <TechSkillsItemEditButton
                  onClick={() => {
                    const updateData = userData.techSkills.filter(
                      (i) => i.id !== item.id
                    );
                    setUserData({ ...userData, techSkills: updateData });
                  }}
                >
                  <DeleteIcon title="" />
                </TechSkillsItemEditButton>
              </TechSkillsListItem>
            );
          })}
        </TechSkillsList>
      ) : (
        <>
          {userData.techSkills.length > 0 && (
            <TechSkillsList>
              {userData.techSkills.map((item) => {
                return (
                  <li key={item.id}>
                    <span>{item.value}</span>
                  </li>
                );
              })}
            </TechSkillsList>
          )}
        </>
      )}
      {templateData.state && (
        <TechSkillAddInputBox>
          <TechSkillsInput
            type="text"
            name="techSkillsAddInput"
            id="techSkillsAddInput"
            value={templateData.value}
            onChange={(e) => {
              setTemplateData({ ...templateData, value: e.target.value });
            }}
          />
          <TechSkillsAddButtonBox>
            <TechSkillsAddButtonVariant
              onClick={() => {
                setUserData({
                  ...userData,
                  techSkills: [
                    ...userData.techSkills,
                    { id: nanoid(), value: templateData.value },
                  ],
                });
                setTemplateData({ state: false, value: "" });
              }}
            >
              <CheckmarkIcon title="" />
            </TechSkillsAddButtonVariant>
            <TechSkillsAddButtonVariant
              onClick={() => {
                setTemplateData({ state: false, value: "" });
              }}
            >
              <CrossIcon title="" />
            </TechSkillsAddButtonVariant>
          </TechSkillsAddButtonBox>
        </TechSkillAddInputBox>
      )}

      {change && !templateData.state && (
        <TechSkillsAddButton
          onClick={async () => {
            await setTemplateData({ ...templateData, state: true });
            const input = document.getElementById("techSkillsAddInput");
            input.focus();
          }}
        >
          +
        </TechSkillsAddButton>
      )}
    </TechSkillsContainer>
  );
};
