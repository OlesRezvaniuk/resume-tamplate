import { nanoid } from "@reduxjs/toolkit";
import { useReducer, useState } from "react";
import { ProjectsInput } from "../ProjectsInput/ProjectsInput";
import { EditProject } from "../EditProject/EditProject";

export const ProjectList = ({ userData, change, setUserData }) => {
  const [editProject, setEditProject] = useState(null);

  return (
    <>
      {editProject && (
        <EditProject
          editProject={editProject}
          setEditProject={setEditProject}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {userData.selectedProjects.map((item) => {
        return (
          <li key={nanoid()}>
            {change && (
              <button
                id={item.id}
                onClick={(e) => {
                  setEditProject(item);
                }}
              >
                edit
              </button>
            )}

            <a href={item.gitPage}>{item.name}</a>
            <span>{` -> `}</span>
            <a href={item.lifePage}>Link </a>
            <strong>[{item.technology}]</strong>
            <br />
            {item.info}
          </li>
        );
      })}
    </>
  );
};
