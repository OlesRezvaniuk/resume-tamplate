import { nanoid } from "nanoid";
import { useState } from "react";

export const SoftSkills = ({ userData, setUserData, change }) => {
  const [templateData, setTemplateData] = useState({ state: false, value: "" });
  const [editData, setEditData] = useState(null);

  return (
    <div>
      <h2>Soft Skills</h2>
      {editData && (
        <div>
          <input
            type="text"
            name="editSoftSkillsInput"
            value={editData.value}
            onChange={(e) => {
              setEditData({ ...editData, value: e.target.value });
            }}
          />
          <button
            onClick={() => {
              const updateData = userData.softSkills;
              const index = updateData.findIndex((i) => i.id === editData.id);
              updateData[index] = editData;
              setUserData({
                ...userData,
                softSkills: updateData,
              });
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
      {userData.softSkills.length > 0 && (
        <ul>
          {userData.softSkills.map((item) => {
            return (
              <li
                style={{ display: "flex", alignItems: "center" }}
                key={item.id}
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
                        const updateData = userData.softSkills.filter(
                          (i) => i.id !== item.id
                        );
                        setUserData({
                          ...userData,
                          softSkills: updateData,
                        });
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
      )}
      {change && (
        <button
          onClick={() => {
            setTemplateData({ ...templateData, state: true });
          }}
        >
          add
        </button>
      )}
      {templateData.state && (
        <div>
          <input
            type="text"
            name="addSoftSkillsInput"
            value={templateData.value}
            onChange={(e) => {
              setTemplateData({ ...templateData, value: e.target.value });
            }}
          />
          <button
            onClick={() => {
              setUserData({
                ...userData,
                softSkills: [
                  ...userData.softSkills,
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
    </div>
  );
};
