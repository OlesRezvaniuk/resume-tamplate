export const ProjectsControls = ({
  setChangeProjectsModal,
  changeProjectsModal,
  setAddProject,
  addProject,
}) => {
  return (
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
  );
};
