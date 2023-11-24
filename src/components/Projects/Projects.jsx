import { useState } from "react";
import { nanoid } from "nanoid";

export const Projects = ({ userData, setUserData, change }) => {
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
  const [editProject, setEditProject] = useState(null);

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

  return (
    <div>
      <h2>Projects</h2>
      {editProject && (
        <div>
          <ul>
            {Object.keys(editProject).map((item) => {
              if (item === "id") {
                return;
              } else {
                return (
                  <li key={`editProject-${item}`}>
                    <span>{item}</span>
                    {" - "}
                    <input
                      type="text"
                      name={item}
                      value={editProject[item]}
                      onChange={(e) => {
                        setEditProject({
                          ...editProject,
                          [item]: e.target.value,
                        });
                      }}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <button
            onClick={() => {
              const updateData = userData.projects;
              console.log(updateData);
              const findIndex = updateData.findIndex(
                (index) => index.id === editProject.id
              );
              updateData[findIndex] = editProject;
              setUserData({ ...userData, projects: updateData });
              setEditProject(null);
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              setEditProject(null);
            }}
          >
            cancel
          </button>
        </div>
      )}
      {userData.projects.length > 0 && (
        <ul>
          {userData.projects.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <a href={item.gitLink} target="_blank">
                    {item.name}
                  </a>
                  {" - "}
                  <a href={item.lifeLink} target="_blank">
                    Link
                  </a>
                  <span>{` [ ${item.technology} ]`}</span>
                  <p>{item.info}</p>
                </div>
                {change && (
                  <div>
                    <button
                      onClick={() => {
                        const updateData = userData.projects.filter(
                          (obj) => obj.id !== item.id
                        );
                        setUserData({ ...userData, projects: updateData });
                      }}
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        setEditProject(item);
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
      )}
      {change && (
        <button
          onClick={() => {
            setTemplateData({ ...templateData, state: !templateData.state });
          }}
        >
          add project
        </button>
      )}
      {templateData.state && (
        <div>
          <ul>
            {Object.keys(templateData.data).map((item) => {
              if (item === "info") {
                return (
                  <li key={`addProject-${item}`}>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
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
              } else {
                return (
                  <li key={`addProject-${item}`}>
                    <span>
                      {item}
                      {" - "}
                    </span>
                    <input
                      type="text"
                      name={item}
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
          <button
            onClick={() => {
              setUserData({
                ...userData,
                projects: [
                  ...userData.projects,
                  { id: nanoid(), ...templateData.data },
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
        </div>
      )}
    </div>
  );
};
