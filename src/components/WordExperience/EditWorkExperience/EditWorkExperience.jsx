import { nanoid } from "nanoid";
import {
  EditWorkExperienceList,
  EditWorkExperienceItem,
  EditWorkExperienceInputBox,
  EditWorkExperienceInput,
  DeleteIcon,
  DeleteButton,
  EditWorkExperienceInputsItem,
  AddResponsibilities,
  DeleteResponsibilities,
  ResponsibilitiesList,
  ResponsibilitiesBox,
  ResponsibilitiesItem,
} from "./EditWorkExperience.styled";

export const EditWorkExperience = ({
  userData,
  setUserData,
  editWorkExperience,
  setEditWorkExperience,
}) => {
  return (
    <EditWorkExperienceList>
      {editWorkExperience.map((item) => {
        const index = editWorkExperience.findIndex((i) => i.id === item.id);
        return (
          <EditWorkExperienceItem key={item.id}>
            <EditWorkExperienceInputBox>
              {Object.keys(editWorkExperience[0]).map((key) => {
                if (key !== "responsibilities" && key !== "id") {
                  return (
                    <EditWorkExperienceInputsItem
                      $text={key}
                      key={`editWorkExperienceInput-${key}`}
                    >
                      <EditWorkExperienceInput
                        type="text"
                        name={`editWorkExperienceInput-${key}`}
                        value={editWorkExperience[index][key]}
                        onChange={(e) => {
                          const updateData = [...editWorkExperience];
                          updateData[index][key] = e.target.value;
                          setEditWorkExperience(updateData);
                        }}
                        onBlur={() => {
                          setUserData({
                            ...userData,
                            workExperience: editWorkExperience,
                          });
                        }}
                      />
                    </EditWorkExperienceInputsItem>
                  );
                }
              })}
            </EditWorkExperienceInputBox>
            <ResponsibilitiesBox>
              <ResponsibilitiesList>
                {item.responsibilities.map((item) => {
                  const resIndx = editWorkExperience[
                    index
                  ].responsibilities.findIndex((index) => index.id === item.id);

                  return (
                    <ResponsibilitiesItem key={item.id}>
                      <EditWorkExperienceInput
                        $tp={true}
                        type="text"
                        name={`editResponsibilities-${item.id}`}
                        value={
                          editWorkExperience[index].responsibilities[resIndx]
                            .value
                        }
                        onChange={(e) => {
                          const updateData = [...editWorkExperience];

                          updateData[index].responsibilities[resIndx].value =
                            e.target.value;
                          setEditWorkExperience(updateData);
                        }}
                        onBlur={() => {
                          setUserData({
                            ...userData,
                            workExperience: editWorkExperience,
                          });
                        }}
                      />
                      <DeleteResponsibilities
                        onClick={() => {
                          const updateData = [...editWorkExperience];
                          const updateResponsibilities = updateData[
                            index
                          ].responsibilities.filter(
                            (obj) => obj.id !== item.id
                          );
                          updateData[index].responsibilities =
                            updateResponsibilities;
                          setEditWorkExperience(updateData);
                        }}
                      >
                        <DeleteIcon title="" $type="responsibilities" />
                      </DeleteResponsibilities>
                    </ResponsibilitiesItem>
                  );
                })}
              </ResponsibilitiesList>
              <AddResponsibilities
                onClick={() => {
                  const updateData = [...editWorkExperience];
                  updateData[index].responsibilities.push({
                    id: nanoid(),
                    value: "",
                  });
                  setEditWorkExperience(updateData);
                }}
              >
                +
              </AddResponsibilities>
            </ResponsibilitiesBox>
            <DeleteButton>
              <DeleteIcon />
            </DeleteButton>
          </EditWorkExperienceItem>
        );
      })}
    </EditWorkExperienceList>
  );
};
