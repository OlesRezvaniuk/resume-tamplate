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
  TechSkillsItem,
} from "./TechSkills.styled";

export const TechSkills = ({ userData, setUserData, change, readyToSave }) => {
  const [templateData, setTemplateData] = useState({ state: false, value: "" });
  const [editData, setEditData] = useState(userData.techSkills);

  useEffect(() => {
    change ? setEditData(userData.techSkills) : setEditData(null);
    userData.techSkills && setEditData(userData.techSkills);
    !change && setTemplateData({ state: false, value: "" });
  }, [change, userData.techSkills]);

  return (
    <TechSkillsContainer $edit={change}>
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
                  $fill={userData.options.bgColor}
                  onClick={() => {
                    const updateData = userData.techSkills.filter(
                      (i) => i.id !== item.id
                    );
                    setUserData({ ...userData, techSkills: updateData });
                  }}
                >
                  <DeleteIcon $fill={userData.options.bgColor} title="" />
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
                  <TechSkillsItem
                    $markerColor={userData.options.aColor}
                    key={item.id}
                  >
                    <span style={{ pointerEvents: "none" }}>{item.value}</span>
                  </TechSkillsItem>
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
        </TechSkillAddInputBox>
      )}

      {change && (
        <TechSkillsAddButton
          $bgColor={userData.options.bgColor}
          $ready={readyToSave}
          onClick={async () => {
            setUserData({
              ...userData,
              techSkills: [...userData.techSkills, { id: nanoid(), value: "" }],
            });
          }}
        >
          +
        </TechSkillsAddButton>
      )}
    </TechSkillsContainer>
  );
};
