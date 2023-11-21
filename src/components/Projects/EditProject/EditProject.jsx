import { ProjectsInput } from "../ProjectsInput/ProjectsInput";

export const EditProject = ({
  editProject,
  setEditProject,
  userData,
  setUserData,
}) => {
  return (
    <div>
      <ul>
        {Object.keys(editProject).map((item) => {
          if (item !== "id") {
            return (
              <li key={item}>
                <ProjectsInput
                  item={item}
                  value={editProject[item]}
                  editProject={editProject}
                  setEditProject={setEditProject}
                />
              </li>
            );
          }
        })}
      </ul>
      <button
        onClick={() => {
          const arr = userData.selectedProjects;
          const indexProject = arr.findIndex(
            (obj) => obj.id === editProject.id
          );
          arr[indexProject] = { ...editProject };
          setUserData({
            ...userData,
            projects: arr,
            selectedProjects: arr,
          });
          setEditProject(null);
        }}
      >
        ok
      </button>
    </div>
  );
};
