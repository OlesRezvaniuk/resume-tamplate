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
  WorkExperienceItem,
  WorkExperienceItemResponsibilitieItem,
} from "./WorkExperience.styled";
import { AddWorkExperience } from "./AddWorkExperience/AddWorkExperience";
import { EditWorkExperience } from "./EditWorkExperience/EditWorkExperience";

export const WorkExperience = ({
  userData,
  setUserData,
  change,
  bgColor,
  readyToSave,
}) => {
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
      {change && (
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
              <WorkExperienceItem key={item.id}>
                <div
                  style={{
                    height: window.innerWidth < 1260 ? "auto" : 20,
                    marginBottom: 3,
                  }}
                >
                  <WorkExperiencePosition>
                    {item.company}
                  </WorkExperiencePosition>
                  {window.innerWidth < 1260 && !readyToSave ? (
                    <br />
                  ) : (
                    <>{" | "}</>
                  )}
                  <WorkExperiencePosition $color={userData.options.aColor}>
                    {item.position}
                  </WorkExperiencePosition>
                </div>
                <div
                  style={{
                    height: window.innerWidth < 1260 ? "auto" : 20,
                    marginBottom: 3,
                  }}
                >
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
                        <WorkExperienceItemResponsibilitieItem
                          $color={userData.options.aColor}
                          key={item.id}
                        >
                          <WorkExperienceResponsibilitiesText>
                            {item.value}
                          </WorkExperienceResponsibilitiesText>
                        </WorkExperienceItemResponsibilitieItem>
                      );
                    })}
                  </WorkExperienceREsponsibilitiesList>
                )}
              </WorkExperienceItem>
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
