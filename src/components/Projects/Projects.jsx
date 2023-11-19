import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import { useState } from "react";

export const Projects = ({ userData, change, setUserData, sendChanges }) => {
  // const [checked, setChecked] = useState(null);
  // const [changedItem, setChangedItem] = useState(null);
  const [changeProjectsModal, setChangeProjectsModal] = useState(false);

  function lattestFourProjects() {
    if (userData.projects.length <= 4) {
      return userData.projects;
    } else {
      const data = userData.projects.slice(
        userData.projects.length - 4,
        userData.projects.length
      );
      return data;
    }
  }

  // function selectProjects() {
  //   console.log(userData.projects);
  // }
  // selectProjects();

  const [addProject, setAddProject] = useState({
    state: false,
    data: {
      name: "",
      gitPage: "",
      lifePage: "",
      technology: "",
      info: "",
      checked: false,
      id: "",
    },
  });

  function handleChangeValue(e) {
    if (e.target.name === "name") {
      setAddProject({
        ...addProject,
        data: { ...addProject.data, name: e.target.value, id: nanoid() },
      });
    } else if (e.target.name === "gitPage") {
      setAddProject({
        ...addProject,
        data: { ...addProject.data, gitPage: e.target.value, id: nanoid() },
      });
    } else if (e.target.name === "lifePage") {
      setAddProject({
        ...addProject,
        data: { ...addProject.data, lifePage: e.target.value, id: nanoid() },
      });
    } else if (e.target.name === "technology") {
      setAddProject({
        ...addProject,
        data: { ...addProject.data, technology: e.target.value, id: nanoid() },
      });
    } else if (e.target.name === "info") {
      setAddProject({
        ...addProject,
        data: { ...addProject.data, info: e.target.value, id: nanoid() },
      });
    }
  }

  console.log(userData.selectedProjects);

  return (
    <div>
      <h2>Projects</h2>
      {change && (
        <div>
          <button
            onClick={() => {
              setChangeProjectsModal(!changeProjectsModal);
            }}
          >
            select projects
          </button>
          <button
            onClick={() => {
              setAddProject({ ...addProject, state: true });
            }}
          >
            add project
          </button>
        </div>
      )}

      {/* SELECT PROJECTS MODAL */}
      {changeProjectsModal && (
        <ul id="projectsList">
          {userData.projects.map((item) => {
            return (
              <li key={nanoid()}>
                <span
                  id={item.name}
                  onClick={(e) => {
                    if (
                      userData.selectedProjects.find(
                        (i) => i.name === item.name
                      )
                    ) {
                      console.log("this item is in selected");
                      const updatedArray = userData.selectedProjects.filter(
                        (i) => i.name !== item.name
                      );
                      setUserData({
                        ...userData,
                        selectedProjects: updatedArray,
                      });
                      console.log(updatedArray);
                    } else {
                      setUserData({
                        ...userData,
                        selectedProjects: [...userData.selectedProjects, item],
                      });
                    }
                  }}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      )}
      {/* SELECT PROJECTS MODAL */}

      {/* ADD PROJECT MODAL */}
      {addProject.state && (
        <div>
          <div>
            <input
              type="text"
              name="name"
              value={addProject.data.name}
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
            <input
              type="text"
              name="gitPage"
              value={addProject.data.gitPage}
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
            <input
              type="text"
              name="lifePage"
              value={addProject.data.lifePage}
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
            <input
              type="text"
              name="technology"
              value={addProject.data.technology}
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
            <input
              type="text"
              name="info"
              value={addProject.data.info}
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
          </div>

          <button
            onClick={() => {
              setUserData({
                ...userData,
                projects: [...userData.projects, addProject.data],
              });

              setAddProject({ ...addProject, state: false });
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              setAddProject({
                ...addProject,
                state: false,
                data: {
                  name: "",
                  gitPage: "",
                  lifePage: "",
                  technology: "",
                  info: "",
                },
              });
            }}
          >
            cancel
          </button>
        </div>
      )}
      {/* ADD PROJECT MODAL */}
      <ul>
        {userData.selectedProjects.map((item) => {
          return (
            <li key={nanoid()}>
              <div>
                <a href={item.gitPage}>{item.name}</a>
                <span>{` -> `}</span>
                <a href={item.lifePage}>Link </a>
                <strong>[{item.technology}]</strong>
                <br />
                {item.info}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
