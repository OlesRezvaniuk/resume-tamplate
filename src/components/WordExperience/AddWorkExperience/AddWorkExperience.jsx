import { nanoid } from "nanoid";
import { useState } from "react";
import {
  AddWorkExperienceContainer,
  AddWorkExperienceButtonsBox,
  AddWorkExperienceAddButton,
  AddWorkExperienceInput,
} from "./AddWorkExperience.styled";

export const AddWorkExperience = ({
  userData,
  setUserData,

  change,
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
  function reset() {
    setTemplateData({
      state: false,
      data: {
        position: "",
        company: "",
        startYear: "",
        endYear: "",
        responsibilities: [],
      },
    });
  }

  return (
    <>
      {templateData.state && change && (
        <AddWorkExperienceContainer>
          <ul>
            <li>
              <ul style={{ display: "flex" }}>
                {Object.keys(templateData.data).map((item) => {
                  if (item === "company" || item === "position") {
                    return (
                      <li key={`add-workExperience${item}`}>
                        <AddWorkExperienceInput
                          type="text"
                          name={item}
                          placeholder={`Work ${item}`}
                          value={templateData.data[item]}
                          onChange={(e) => {
                            setTemplateData({
                              ...templateData,
                              data: {
                                ...templateData.data,
                                [item]: e.target.value,
                              },
                            });
                          }}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
            <li>
              <ul style={{ display: "flex" }}>
                {Object.keys(templateData.data).map((item) => {
                  if (item === "startYear" || item === "endYear") {
                    return (
                      <li key={`add-workExperience${item}`}>
                        <AddWorkExperienceInput
                          type="text"
                          name={item}
                          placeholder={`Work ${item}`}
                          value={templateData.data[item]}
                          onChange={(e) => {
                            setTemplateData({
                              ...templateData,
                              data: {
                                ...templateData.data,
                                [item]: e.target.value,
                              },
                            });
                          }}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
            {Object.keys(templateData.data).map((item) => {
              if (item === "responsibilities") {
                return (
                  <li key={`add-workExperience${item}`}>
                    <span>{item}:</span>
                    <br />
                    <ul>
                      {templateData.data.responsibilities.map((item) => {
                        const findIndex =
                          templateData.data.responsibilities.findIndex(
                            (obj) => obj.id === item.id
                          );
                        return (
                          <li key={`work-resposibilities${item.id}`}>
                            <AddWorkExperienceInput
                              type="text"
                              name={item}
                              value={
                                templateData.data.responsibilities[findIndex]
                                  .value
                              }
                              onChange={(e) => {
                                const updatedResponsibilities = [
                                  ...templateData.data.responsibilities,
                                ];
                                updatedResponsibilities[findIndex].value =
                                  e.target.value;
                                setTemplateData({
                                  ...templateData,
                                  data: {
                                    ...templateData.data,
                                    responsibilities: updatedResponsibilities,
                                  },
                                });
                              }}
                            />
                            <button
                              onClick={() => {
                                const updateData =
                                  templateData.data.responsibilities.filter(
                                    (i) => i.id !== item.id
                                  );
                                setTemplateData({
                                  ...templateData,
                                  data: {
                                    ...templateData.data,
                                    responsibilities: updateData,
                                  },
                                });
                              }}
                            >
                              x
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      onClick={() => {
                        setTemplateData({
                          ...templateData,
                          data: {
                            ...templateData.data,
                            responsibilities: [
                              ...templateData.data.responsibilities,
                              { id: nanoid(), value: "dsadsa" },
                            ],
                          },
                        });
                      }}
                    >
                      +
                    </button>
                  </li>
                );
              }
            })}
          </ul>
          <button
            onClick={() => {
              setUserData({
                ...userData,
                workExperience: [
                  ...userData.workExperience,
                  { ...templateData.data, id: nanoid() },
                ],
              });
              reset();
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              reset();
            }}
          >
            cancel
          </button>
        </AddWorkExperienceContainer>
      )}
      {change && (
        <AddWorkExperienceButtonsBox>
          <AddWorkExperienceAddButton
            onClick={() => {
              setUserData({
                ...userData,
                workExperience: [
                  ...userData.workExperience,
                  { id: nanoid(), ...templateData.data },
                ],
              });
              // setTemplateData({ ...templateData, state: !templateData.state });
            }}
          >
            +
          </AddWorkExperienceAddButton>
        </AddWorkExperienceButtonsBox>
      )}
    </>
  );
};
