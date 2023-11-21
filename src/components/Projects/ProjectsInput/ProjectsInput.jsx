import { nanoid } from "@reduxjs/toolkit";
import { InputTemplate } from "./InputTemplate/InputTemplate";

export const ProjectsInput = ({
  addProject,
  item,
  setAddProject,
  editProject,
  setEditProject,
  value,
}) => {
  if (editProject) {
    return (
      <InputTemplate
        editProject={editProject}
        item={item}
        setEditProject={setEditProject}
        value={value}
      />
    );
  } else if (addProject) {
    const object = addProject.data.find((i) => i === item);
    return (
      <InputTemplate
        addProject={addProject}
        item={item}
        setAddProject={setAddProject}
        object={object}
      />
    );
  }
};
