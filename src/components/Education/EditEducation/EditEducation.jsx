import {
  EditEducationItem,
  EditEducationInputItem,
  DeleteButton,
  DeleteIcon,
} from "./EditEducation.styled";

export const EditEducation = ({
  userData,
  setUserData,
  editData,
  setEditData,
}) => {
  return (
    <>
      {editData && editData.length > 0 && (
        <ul style={{ listStyle: "none" }}>
          {editData.map((item) => {
            const index = editData.findIndex((i) => i.id === item.id);
            return (
              <EditEducationItem key={item.id}>
                <ul style={{ display: "flex", listStyle: "none" }}>
                  {Object.keys(editData[0]).map((key) => {
                    if (key !== "id") {
                      return (
                        <EditEducationInputItem
                          $text={key}
                          key={`${editData[index].id}-${key}`}
                        >
                          <input
                            type="text"
                            name={`editEducation-${item.id}-${key}`}
                            placeholder={key}
                            value={editData[index][key]}
                            onChange={(e) => {
                              const updateData = [...editData];
                              updateData[index][key] = e.target.value;
                              setEditData(updateData);
                            }}
                          />
                        </EditEducationInputItem>
                      );
                    }
                  })}
                </ul>
                <DeleteButton
                  onClick={() => {
                    const updateData = editData.filter(
                      (obj) => obj.id !== item.id
                    );
                    setEditData(updateData);
                    setUserData({ ...userData, education: updateData });
                  }}
                >
                  <DeleteIcon />
                </DeleteButton>
              </EditEducationItem>
            );
          })}
        </ul>
      )}
    </>
  );
};
