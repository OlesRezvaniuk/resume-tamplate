import { nanoid } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import {
  AddProjectContainer,
  AddButton,
  AddProjectInputsList,
  AddProjectInputsListItem,
  AddProjectInput,
  AddProjectTextArea,
} from "./AddProject.styled";

function maxLength(item) {
  if (item === "name" || item === "technology") {
    return 25;
  }
}

export const AddProject = ({ change, userData, setUserData }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    data: {
      name: "",
      gitLink: "",
      lifeLink: "",
      technology: "",
      info: "",
    },
  });

  function reset() {
    setTemplateData({
      state: false,
      data: {
        name: "",
        gitLink: "",
        lifeLink: "",
        technology: "",
        info: "",
      },
    });
  }

  useEffect(() => {
    !change && reset();
  }, [change]);

  return (
    <div>
      {change && userData.projects.length <= 3 && (
        <AddButton
          onClick={() => {
            // setTemplateData({ ...templateData, state: true });
            setUserData({
              ...userData,
              projects: [
                ...userData.projects,
                { id: nanoid(), ...templateData.data },
              ],
            });
          }}
        >
          +
        </AddButton>
      )}
      {templateData.state && change && (
        <AddProjectContainer>
          <AddProjectInputsList>
            {Object.keys(templateData.data).map((item) => {
              console.log(item);
              if (item === "info") {
                return;
              } else {
                return (
                  <AddProjectInputsListItem
                    $text={item}
                    key={`addProject-${item}`}
                  >
                    <AddProjectInput
                      minLength="1"
                      maxLength={maxLength(item)}
                      type="text"
                      name={item}
                      placeholder={`project ${item}...`}
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
                  </AddProjectInputsListItem>
                );
              }
            })}
          </AddProjectInputsList>
          <AddProjectTextArea
            value={templateData.data.info}
            placeholder="project info..."
            onChange={(e) => {
              setTemplateData({
                ...templateData,
                data: {
                  ...templateData.data,
                  info: e.target.value,
                },
              });
            }}
          />
          {/* <AddProjectButtonsBox>
            <AddProjectsConfirmButton
              onClick={() => {
                if (userData.projects.length >= 4) {
                  console.log("maximum projects");
                  return;
                } else {
                  setUserData({
                    ...userData,
                    projects: [
                      ...userData.projects,
                      { id: nanoid(), ...templateData.data },
                    ],
                  });

                  reset();
                }
              }}
            >
              <CheckIcon />
            </AddProjectsConfirmButton>
            <AddProjectsConfirmButton
              onClick={() => {
                reset();
              }}
            >
              <CrossIcon />
            </AddProjectsConfirmButton>
          </AddProjectButtonsBox> */}
        </AddProjectContainer>
      )}
    </div>
  );
};
