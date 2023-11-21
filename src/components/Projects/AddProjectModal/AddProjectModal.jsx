import { ProjectsInput } from "../ProjectsInput/ProjectsInput";
import { nanoid } from "nanoid";

export const AddProjectModal = ({
  addProject,
  setAddProject,
  userData,
  setUserData,
}) => {
  return (
    <div>
      <ul>
        {addProject.data.map((item) => {
          return (
            <li key={`addInput-${item.id}`}>
              <ProjectsInput
                addProject={addProject}
                setAddProject={setAddProject}
                item={item}
              />
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          const transformedObject = addProject.data.reduce((acc, item) => {
            acc[item.type] = item.text;
            return acc;
          }, {});
          setAddProject({ ...addProject, state: false });
          setUserData({
            ...userData,
            projects: [
              ...userData.projects,
              { ...transformedObject, id: nanoid() },
            ],
          });
        }}
      >
        confirm
      </button>
      <button
        onClick={() => {
          setAddProject({
            ...addProject,
            state: false,
          });
        }}
      >
        cancel
      </button>
    </div>
  );
};
