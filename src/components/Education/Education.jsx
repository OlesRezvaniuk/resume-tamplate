import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const Education = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    data: {
      name: "",
      position: "",
      startYear: "",
      endYear: "",
    },
  });
  const [editData, setEditData] = useState(null);

  console.log(editData);

  return (
    <section>
      <h2>Education</h2>
      {userData.education.length > 0 && (
        <ul>
          {userData.education.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <span>{item.startYear}</span>
                {" - "}
                <span>{item.endYear}</span>
                <p>{item.position}</p>
                {change && (
                  <div>
                    <button
                      onClick={() => {
                        setEditData(item);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        const updateData = userData.education.filter(
                          (obj) => obj.id !== item.id
                        );
                        setUserData({ ...userData, education: updateData });
                      }}
                    >
                      delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {change && (
        <div>
          <button
            onClick={() => {
              setTemplateData({ ...templateData, state: !templateData.state });
              templateData.state &&
                setTemplateData({
                  ...templateData,
                  data: {
                    name: "111",
                    position: "222",
                    startYear: "333",
                    endYear: "444",
                  },
                });
            }}
          >
            {templateData.state ? "cancel" : "add"}
          </button>
          {templateData.state && (
            <button
              onClick={() => {
                setUserData({
                  ...userData,
                  education: [
                    ...userData.education,
                    { ...templateData.data, id: nanoid() },
                  ],
                });
                setTemplateData({
                  state: false,
                  data: {
                    name: "",
                    position: "",
                    startYear: "",
                    endYear: "",
                  },
                });
              }}
            >
              ok
            </button>
          )}
        </div>
      )}
      {templateData.state && (
        <ul>
          {Object.keys(templateData.data).map((item) => {
            return (
              <li key={`editEductaion-${item}`}>
                <span>{item}</span>
                {" - "}
                <input
                  type="text"
                  name={item}
                  value={templateData.data[item]}
                  onChange={(e) => {
                    setTemplateData({
                      ...templateData,
                      data: { ...templateData.data, [item]: e.target.value },
                    });
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
      {editData && (
        <div>
          <ul>
            {Object.keys(editData).map((item) => {
              if (item !== "id") {
                return (
                  <li key={`editEducation-${item}`}>
                    <span>{item}</span>
                    {" - "}
                    <input
                      type="text"
                      name={item}
                      value={editData[item]}
                      onChange={(e) => {
                        setEditData({ ...editData, [item]: e.target.value });
                      }}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <div>
            <button
              onClick={() => {
                const updateData = userData.education;
                const index = updateData.findIndex(
                  (obj) => obj.id === editData.id
                );
                updateData[index] = editData;
                setUserData({ ...userData, education: updateData });
                setEditData(null);
              }}
            >
              ok
            </button>
            <button
              onClick={() => {
                setEditData(null);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
