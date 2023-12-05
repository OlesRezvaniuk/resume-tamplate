import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { AddEducation } from "./AddEducation/AddEducation";
import { EditEducation } from "./EditEducation/EditEducation";
import { EducationTitle, EducationList } from "./Education.styled";

export const Education = ({ userData, setUserData, change }) => {
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(userData.education));
    change && setEditData(data);
    !change &&
      editData !== null &&
      setUserData({ ...userData, education: editData });
  }, [change, userData.education]);

  return (
    <div style={{ position: "relative" }}>
      <EducationTitle>Education</EducationTitle>
      {change && (
        <>
          <EditEducation
            userData={userData}
            setUserData={setUserData}
            editData={editData}
            setEditData={setEditData}
            change={change}
          />
          <AddEducation
            userData={userData}
            setUserData={setUserData}
            editData={editData}
            setEditData={setEditData}
            change={change}
          />
        </>
      )}
      {!change && userData.education.length > 0 && (
        <EducationList>
          {userData.education.map((item) => {
            return (
              <li key={item.id}>
                <h3 style={{ color: "#2e9aff" }}>{item.name}</h3>
                <span>
                  {item.startYear}
                  {" - "}
                  {item.endYear}
                </span>
                <p>{item.position}</p>
              </li>
            );
          })}
        </EducationList>
      )}
    </div>
  );
};
