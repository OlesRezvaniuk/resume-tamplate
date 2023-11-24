import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export const TechSkills = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({ state: false, value: "" });
  const [editData, setEditData] = useState(null);

  return (
    <div>
      <h2>TechSkills</h2>
      {editData && (
        <div>
          <input
            type="text"
            name="editTechSkillsInput"
            value={editData.value}
            onChange={(e) => {
              setEditData({ ...editData, value: e.target.value });
            }}
          />
          <button
            onClick={() => {
              const updateData = userData.techSkills;
              const findIndex = updateData.findIndex(
                (obj) => obj.id === editData.id
              );
              console.log(findIndex);
              updateData[findIndex] = editData;
              setUserData({ ...userData, techSkills: updateData });
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
      )}
      {userData.techSkills.length > 0 && (
        <div>
          <ul>
            {userData.techSkills.map((item) => {
              return (
                <li
                  key={item.id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p>{item.value}</p>
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
                        style={{ height: "max-content" }}
                        onClick={() => {
                          const updateData = userData.techSkills.filter(
                            (i) => i.id !== item.id
                          );
                          setUserData({ ...userData, techSkills: updateData });
                        }}
                      >
                        X
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {templateData.state && (
        <div>
          <input
            type="text"
            name="techSkillsAddInput"
            value={templateData.value}
            onChange={(e) => {
              setTemplateData({ ...templateData, value: e.target.value });
            }}
          />
          <button
            onClick={() => {
              setUserData({
                ...userData,
                techSkills: [
                  ...userData.techSkills,
                  { id: nanoid(), value: templateData.value },
                ],
              });
              setTemplateData({ state: false, value: "" });
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              setTemplateData({ state: false, value: "" });
            }}
          >
            cancel
          </button>
        </div>
      )}
      <br />
      {change && !templateData.state && (
        <button
          onClick={() => {
            setTemplateData({ ...templateData, state: true });
          }}
        >
          add
        </button>
      )}
    </div>
  );
};
