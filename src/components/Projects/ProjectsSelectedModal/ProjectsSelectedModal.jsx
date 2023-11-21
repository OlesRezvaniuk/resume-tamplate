export const ProjectSeledtedModal = ({ userData, setUserData, item }) => {
  return (
    <li>
      <span
        id={item.name}
        onClick={(e) => {
          if (userData.selectedProjects.find((i) => i.name === item.name)) {
            console.log("this item is in selected");
            const updatedArray = userData.selectedProjects.filter(
              (i) => i.name !== item.name
            );
            setUserData({
              ...userData,
              selectedProjects: updatedArray,
            });
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
};
