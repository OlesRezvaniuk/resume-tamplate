import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import {
  ProjectsTitle,
  ProjectsText,
  ProjectLink,
  ProjectText,
  ProjectsList,
  ProjectItem,
} from "./Project.styled";
import { EditProjects } from "./EditProjects/EditProjects";
import { AddProject } from "./AddProject/AddProject";

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
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    change ? setEditData(userData.projects) : setEditData(null);
    userData.projects && setEditData(userData.projects);
  }, [change, userData.projects]);

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
    <div
      style={{
        overflowWrap: "break-word",
        position: "relative",
        marginBottom: 35,
      }}
    >
      <ProjectsTitle>Projects</ProjectsTitle>
      {change && editData && (
        <EditProjects
          editData={editData}
          setEditData={setEditData}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {userData.projects.length > 0 && !change && (
        <ProjectsList>
          {userData.projects.map((item) => {
            return (
              <ProjectItem
                key={item.id}
                style={{
                  height: 100,
                }}
              >
                <ProjectLink target="_blank" href={item.gitLink}>
                  {item.name}
                </ProjectLink>
                {" - "}
                <ProjectLink target="_blank" href={item.lifeLink}>
                  Link
                </ProjectLink>
                {" - "}
                {`[  ${item.technology}  ]`}
                <ProjectText>{item.info}</ProjectText>
              </ProjectItem>
            );
          })}
        </ProjectsList>
      )}
      <AddProject
        change={change}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
};
