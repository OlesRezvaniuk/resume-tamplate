import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  WorkExperienceContainer,
  WorkExperienceTitle,
  WorkExperiencePosition,
  WorkExperienceYear,
  WorkExperienceResponsibilitiesText,
  WorkExperienceREsponsibilitiesList,
  WorkExperienceList,
  WorkExperienceButtonsBox,
  WorkExperienceAddButton,
} from "./WorkExperience.styled";
import { AddWorkExperience } from "./AddWorkExperience/AddWorkExperience";
import { EditWorkExperience } from "./EditWorkExperience/EditWorkExperience";

export const WorkExperience = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    data: {
      company: "",
      position: "",
      startYear: "",
      endYear: "",
      responsibilities: [],
    },
  });
  const [editWorkExperience, setEditWorkExperience] = useState(null);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(userData.workExperience));
    change ? setEditWorkExperience(data) : setEditWorkExperience(null);
    !change &&
      editWorkExperience !== null &&
      setUserData({ ...userData, workExperience: editWorkExperience });
  }, [change, userData.workExperience]);

  function reset() {
    setTemplateData({
      state: false,
      data: {
        company: "",
        position: "",
        startYear: "",
        endYear: "",
        responsibilities: [],
      },
    });
  }

  return (
    <WorkExperienceContainer>
      <WorkExperienceTitle>Work Experince</WorkExperienceTitle>
      {editWorkExperience && (
        // <div>
        //   <button
        //     onClick={() => {
        //       const findIndex = userData.workExperience.findIndex(
        //         (index) => index.id === editWorkExperience.id
        //       );
        //       const updateWorkExperience = [...userData.workExperience];
        //       updateWorkExperience[findIndex] = editWorkExperience;
        //       setUserData({
        //         ...userData,
        //         workExperience: updateWorkExperience,
        //       });
        //       setEditWorkExperience(false);
        //     }}
        //   >
        //     ok
        //   </button>
        //   <button
        //     onClick={() => {
        //       setEditWorkExperience(null);
        //     }}
        //   >
        //     cancel
        //   </button>
        //   <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
        //     {Object.keys(editWorkExperience).map((item) => {
        //       if (item === "id") {
        //         return;
        //       } else if (item === "responsibilities") {
        //         return (
        //           <li key={`editWorkExpirience-${item}`}>
        //             <span>Responsibilities</span>
        //             <ul>
        //               {editWorkExperience.responsibilities.map((item) => {
        //                 const objIndex =
        //                   editWorkExperience.responsibilities.findIndex(
        //                     (index) => index.id === item.id
        //                   );

        //                 return (
        //                   <li key={item.id}>
        //                     <input
        //                       type="text"
        //                       name={item.id}
        //                       value={
        //                         editWorkExperience.responsibilities[objIndex]
        //                           .value
        //                       }
        //                       onChange={(e) => {
        //                         const newData = [
        //                           ...editWorkExperience.responsibilities,
        //                         ];
        //                         newData[objIndex].value = e.target.value;
        //                         setEditWorkExperience({
        //                           ...editWorkExperience,
        //                           responsibilities: newData,
        //                         });
        //                       }}
        //                     />
        //                     <button
        //                       onClick={() => {
        //                         console.log(editWorkExperience);
        //                         setEditWorkExperience({
        //                           ...editWorkExperience,
        //                           responsibilities: [
        //                             ...editWorkExperience.responsibilities,
        //                             { id: nanoid(), value: "" },
        //                           ],
        //                         });
        //                       }}
        //                     >
        //                       +
        //                     </button>
        //                     <button
        //                       onClick={() => {
        //                         const newArray =
        //                           editWorkExperience.responsibilities.filter(
        //                             (_, index) => index !== objIndex
        //                           );
        //                         setEditWorkExperience({
        //                           ...editWorkExperience,
        //                           responsibilities: newArray,
        //                         });
        //                       }}
        //                     >
        //                       x
        //                     </button>
        //                   </li>
        //                 );
        //               })}
        //             </ul>
        //           </li>
        //         );
        //       } else {
        //         return (
        //           <li key={`editWorkExpirience-${item}`}>
        //             <span>{item}</span>
        //             {" - "}
        //             <input
        //               type="text"
        //               value={editWorkExperience[item]}
        //               onChange={(e) => {
        //                 setEditWorkExperience({
        //                   ...editWorkExperience,
        //                   [item]: e.target.value,
        //                 });
        //               }}
        //             />
        //           </li>
        //         );
        //       }
        //     })}
        //   </ul>
        // </div>
        <EditWorkExperience
          userData={userData}
          setUserData={setUserData}
          editWorkExperience={editWorkExperience}
          setEditWorkExperience={setEditWorkExperience}
        />
      )}
      {userData.workExperience.length > 0 && !change && (
        <WorkExperienceList>
          {userData.workExperience.map((item) => {
            return (
              <li key={item.id}>
                <div style={{ marginBottom: 4 }}>
                  <WorkExperiencePosition>
                    {item.company}
                  </WorkExperiencePosition>
                  {" | "}
                  <WorkExperiencePosition $variant="true">
                    {item.position}
                  </WorkExperiencePosition>
                </div>
                <div style={{ marginBottom: 4 }}>
                  <WorkExperienceYear>{item.startYear}</WorkExperienceYear>
                  <WorkExperienceYear>
                    {" - "}
                    {item.endYear}
                  </WorkExperienceYear>
                </div>
                {item.responsibilities.length > 0 && (
                  <WorkExperienceREsponsibilitiesList>
                    {item.responsibilities.map((item) => {
                      return (
                        <li key={item.id}>
                          <WorkExperienceResponsibilitiesText>
                            {item.value}
                          </WorkExperienceResponsibilitiesText>
                        </li>
                      );
                    })}
                  </WorkExperienceREsponsibilitiesList>
                )}
                {change && (
                  <div>
                    <button
                      onClick={() => {
                        setEditWorkExperience(item);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        console.log(userData.workExperience);
                        const updateData = userData.workExperience.filter(
                          (obj) => obj.id !== item.id
                        );
                        console.log(updateData);
                        setUserData({
                          ...userData,
                          workExperience: updateData,
                        });
                      }}
                    >
                      delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </WorkExperienceList>
      )}

      <AddWorkExperience
        setUserData={setUserData}
        userData={userData}
        change={change}
        editWorkExperience={editWorkExperience}
        setEditWorkExperience={setEditWorkExperience}
      />
    </WorkExperienceContainer>
  );
};
