export const InputTemplate = ({
  addProject,
  item,
  setAddProject,
  editProject,
  setEditProject,
  object,
  value,
}) => {
  return (
    <input
      type="text"
      name={item}
      placeholder={item}
      value={value}
      onChange={(e) => {
        if (editProject) {
          setEditProject({
            ...editProject,
            [item]: e.target.value,
          });
          console.log(editProject[item]);
        } else if (addProject) {
          const updatedInputData = addProject.data.map((data) =>
            data.type === object.type ? { ...data, text: e.target.value } : data
          );
          setAddProject({
            ...addProject,
            data: updatedInputData,
          });
        }
      }}
    />
  );
};
