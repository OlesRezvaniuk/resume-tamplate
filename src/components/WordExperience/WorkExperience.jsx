import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  WorkExperienceContainer,
  WorkExperienceTitle,
  WorkExperiencePosition,
  WorkExperienceYear,
  WorkExperienceResponsibilitiesText,
  WorkExperienceREsponsibilitiesList,
  WorkExperienceList,
  WorkExperienceButtonsBox,
  WorkExperienceAddButton,
} from "./WorkExperience.styled";
import { AddWorkExperience } from "./AddWorkExperience/AddWorkExperience";
import { EditWorkExperience } from "./EditWorkExperience/EditWorkExperience";

export const WorkExperience = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    data: {
      company: "",
      position: "",
      startYear: "",
      endYear: "",
      responsibilities: [],
    },
  });
  const [editWorkExperience, setEditWorkExperience] = useState(null);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(userData.workExperience));
    change ? setEditWorkExperience(data) : setEditWorkExperience(null);
    !change &&
      editWorkExperience !== null &&
      setUserData({ ...userData, workExperience: editWorkExperience });
  }, [change, userData.workExperience]);

  function reset() {
    setTemplateData({
      state: false,
      data: {
        company: "",
        position: "",
        startYear: "",
        endYear: "",
        responsibilities: [],
      },
    });
  }

  return (
    <WorkExperienceContainer>
      <WorkExperienceTitle>Work Experince</WorkExperienceTitle>
      {editWorkExperience && (
        <EditWorkExperience
          userData={userData}
          setUserData={setUserData}
          editWorkExperience={editWorkExperience}
          setEditWorkExperience={setEditWorkExperience}
        />
      )}

      {userData.workExperience.length > 0 && !change && (
        <WorkExperienceList>
          {userData.workExperience.map((item) => {
            return (
              <li key={item.id}>
                <div style={{ marginBottom: 4 }}>
                  <WorkExperiencePosition>
                    {item.company}
                  </WorkExperiencePosition>
                  {" | "}
                  <WorkExperiencePosition $variant="true">
                    {item.position}
                  </WorkExperiencePosition>
                </div>
                <div style={{ marginBottom: 4 }}>
                  <WorkExperienceYear>{item.startYear}</WorkExperienceYear>
                  <WorkExperienceYear>
                    {" - "}
                    {item.endYear}
                  </WorkExperienceYear>
                </div>
                {item.responsibilities.length > 0 && (
                  <WorkExperienceREsponsibilitiesList>
                    {item.responsibilities.map((item) => {
                      return (
                        <li key={item.id}>
                          <WorkExperienceResponsibilitiesText>
                            {item.value}
                          </WorkExperienceResponsibilitiesText>
                        </li>
                      );
                    })}
                  </WorkExperienceREsponsibilitiesList>
                )}
                {change && (
                  <div>
                    <button
                      onClick={() => {
                        setEditWorkExperience(item);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        const updateData = userData.workExperience.filter(
                          (obj) => obj.id !== item.id
                        );

                        setUserData({
                          ...userData,
                          workExperience: updateData,
                        });
                      }}
                    >
                      delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </WorkExperienceList>
      )}

      <AddWorkExperience
        setUserData={setUserData}
        userData={userData}
        change={change}
        editWorkExperience={editWorkExperience}
        setEditWorkExperience={setEditWorkExperience}
      />
    </WorkExperienceContainer>
  );
};
