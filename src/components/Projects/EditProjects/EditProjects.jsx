import {
  EditProjectsList,
  EditProjectsListItem,
  EditProjectsInputsList,
  EditProjectsInputsItem,
  EditProjectsTextInput,
  EditProjectsInput,
  DeleteButton,
  DeleteIcon,
} from "./EditProjects.styled";
import { nanoid } from "nanoid";

function maxLength(item) {
  if (item === "name" || item === "technology") {
    return 25;
  }
}

export const EditProjects = ({
  editData,
  setEditData,
  userData,
  setUserData,
}) => {
  return (
    <EditProjectsList>
      {editData.map((item) => {
        const index = editData.findIndex((i) => i.id === item.id);
        return (
          <EditProjectsListItem key={item.id}>
            <EditProjectsInputsList>
              {Object.keys(editData[0]).map((item) => {
                if (item === "id" || item === "info") {
                  return;
                } else {
                  return (
                    <EditProjectsInputsItem
                      $text={item}
                      key={`editProjectInput-${item}`}
                    >
                      <EditProjectsInput
                        minLength="1"
                        maxLength={maxLength(item)}
                        name={item}
                        type="text"
                        value={editData[index][item]}
                        onChange={(e) => {
                          const updateData = [...editData];
                          updateData[index][item] = e.target.value;
                          setEditData(updateData);
                        }}
                      />
                    </EditProjectsInputsItem>
                  );
                }
              })}
            </EditProjectsInputsList>
            <EditProjectsTextInput
              value={editData[index].info}
              placeholder="project info..."
              onChange={(e) => {
                const updateData = [...editData];
                updateData[index].info = e.target.value;
                setEditData(updateData);
              }}
            />
            <DeleteButton
              onClick={() => {
                const updateProjects = userData.projects.filter(
                  (i) => i.id !== item.id
                );
                setUserData({ ...userData, projects: updateProjects });
              }}
            >
              <DeleteIcon />
            </DeleteButton>
          </EditProjectsListItem>
        );
      })}
    </EditProjectsList>
  );
};
