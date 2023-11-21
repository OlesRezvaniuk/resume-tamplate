import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { ProjectsInput } from "./ProjectsInput/ProjectsInput";
import { ProjectSeledtedModal } from "./ProjectsSelectedModal/ProjectsSelectedModal";
import { AddProjectModal } from "./AddProjectModal/AddProjectModal";
import { ProjectsControls } from "./ProjectsControls/ProjectsControls";
import { ProjectList } from "./ProjectList/ProjectList";

export const Projects = ({ userData, change, setUserData }) => {
  const [changeProjectsModal, setChangeProjectsModal] = useState(false);

  const [addProject, setAddProject] = useState({
    state: false,
    id: "",
    data: [
      { id: "1", type: "name", text: "qqqq" },
      { id: "2", type: "gitPage", text: "wwwww" },
      { id: "3", type: "lifePage", text: "eeeee" },
      { id: "4", type: "technology", text: "rrrrr" },
      { id: "5", type: "info", text: "tttt" },
    ],
  });

  return (
    <div>
      <h2>Projects</h2>
      {change && (
        <ProjectsControls
          setChangeProjectsModal={setChangeProjectsModal}
          changeProjectsModal={changeProjectsModal}
          setAddProject={setAddProject}
          addProject={addProject}
        />
      )}
      {changeProjectsModal && (
        <ul id="projectsList">
          {userData.projects.map((item) => {
            return (
              <ProjectSeledtedModal
                key={nanoid()}
                userData={userData}
                setUserData={setUserData}
                item={item}
              />
            );
          })}
        </ul>
      )}
      {addProject.state && (
        <AddProjectModal
          addProject={addProject}
          setAddProject={setAddProject}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      <ul>
        <ProjectList
          userData={userData}
          change={change}
          setUserData={setUserData}
        />
      </ul>
    </div>
  );
};
