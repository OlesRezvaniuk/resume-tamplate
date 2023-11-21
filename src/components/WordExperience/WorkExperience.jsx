import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

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
    <section>
      <h2>Work Experince</h2>
      {userData.workExperience.length > 0 && (
        <ul>
          {userData.workExperience.map((item) => {
            return (
              <li key={item.id}>
                <button
                  onClick={() => {
                    console.log(item);
                  }}
                >
                  edit
                </button>
                <br />
                <strong>{item.company}</strong>
                <span>|{item.position}</span>
                <br />
                <span>{item.startYear}</span>
                <span>-{item.endYear}</span>
                {item.responsibilities.length > 0 && (
                  <ul>
                    {item.responsibilities.map((item) => {
                      return (
                        <li key={item.id}>
                          <p>{item.value}</p>
                        </li>
                      );
                    })}
                  </ul>
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
            }}
          >
            add
          </button>
          {templateData.data.company !== "" &&
            templateData.data.position !== "" &&
            templateData.data.startYear !== "" &&
            templateData.data.endYear !== "" && (
              <button
                onClick={() => {
                  setUserData({
                    ...userData,
                    workExperience: [
                      ...userData.workExperience,
                      { ...templateData.data, id: nanoid() },
                    ],
                  });
                  reset();
                }}
              >
                confirm
              </button>
            )}
        </div>
      )}
      {templateData.state && (
        <ul>
          {Object.keys(templateData.data).map((item) => {
            if (item !== "responsibilities") {
              return (
                <li key={`add-workExperience${item}`}>
                  <span>{item}</span>
                  <input
                    type="text"
                    name={item}
                    placeholder={item}
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
            } else {
              return (
                <li key={`add-workExperience${item}`}>
                  <span>{item}:</span>
                  <br />
                  <ul>
                    {templateData.data.responsibilities.map((item) => {
                      const findIndex =
                        templateData.data.responsibilities.findIndex(
                          (obj) => obj.id === item.id
                        );
                      return (
                        <li key={`work-resposibilities${item.id}`}>
                          <input
                            type="text"
                            name={item}
                            value={
                              templateData.data.responsibilities[findIndex]
                                .value
                            }
                            onChange={(e) => {
                              const updatedResponsibilities = [
                                ...templateData.data.responsibilities,
                              ];
                              updatedResponsibilities[findIndex].value =
                                e.target.value;
                              setTemplateData({
                                ...templateData,
                                data: {
                                  ...templateData.data,
                                  responsibilities: updatedResponsibilities,
                                },
                              });
                            }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    onClick={() => {
                      setTemplateData({
                        ...templateData,
                        data: {
                          ...templateData.data,
                          responsibilities: [
                            ...templateData.data.responsibilities,
                            { id: nanoid(), value: "dsadsa" },
                          ],
                        },
                      });
                    }}
                  >
                    +
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
};
