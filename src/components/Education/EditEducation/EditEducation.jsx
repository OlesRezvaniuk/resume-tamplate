import {
  EditEducationItem,
  EditEducationInputItem,
  DeleteButton,
  DeleteIcon,
  EditEducationList,
  EditEducationInput,
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
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {editData.map((item) => {
            const index = editData.findIndex((i) => i.id === item.id);
            return (
              <EditEducationItem key={item.id}>
                <EditEducationList>
                  {Object.keys(editData[0]).map((key) => {
                    if (key !== "id") {
                      return (
                        <EditEducationInputItem
                          $text={key}
                          key={`${editData[index].id}-${key}`}
                        >
                          <EditEducationInput
                            type="text"
                            name={`editEducation-${item.id}-${key}`}
                            placeholder={key}
                            value={editData[index][key]}
                            onChange={(e) => {
                              const updateData = [...editData];
                              updateData[index][key] = e.target.value;

                              setUserData({
                                ...userData,
                                education: updateData,
                              });
                            }}
                          />
                        </EditEducationInputItem>
                      );
                    }
                  })}
                </EditEducationList>
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
