import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import { primalTemplate } from "../../data/primalTempalte";
import { useState } from "react";

export const Projects = ({ userData, change, setUserData, sendChanges }) => {
  const [checked, setChecked] = useState(null);
  const [changedItem, setChangedItem] = useState(null);
  function lattestFourProjects() {
    if (userData.projects.length <= 4) {
      return userData.projects;
    } else {
      const data = userData.projects.slice(
        userData.projects.length - 4,
        userData.projects.length
      );
      return data;
    }
  }

  function test() {
    const name = "Resume";
    const find = userData.projects.findIndex((i) => i.name === name);
    console.log(find);
    userData.projects[find].name = "pizda";
    console.log(userData.projects[find]);
  }

  test();

  return (
    <div>
      <h2>Projects</h2>
      {change && (
        <button
          onClick={() => {
            setUserData({
              ...userData,
              projects: [...userData.projects, primalTemplate],
            });
          }}
        >
          add project
        </button>
      )}
      <ul>
        {lattestFourProjects().map((item) => {
          return (
            <li key={nanoid()}>
              <button
                onClick={() => {
                  checked ? setChecked(null) : setChecked(item);
                  setChangedItem(item);
                }}
                style={{ background: checked === item && "red" }}
              >
                edit
              </button>
              {item === checked ? (
                <div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <input
                        type="text"
                        value={changedItem.name}
                        onChange={(e) => {
                          setChangedItem({
                            ...changedItem,
                            name: e.target.value,
                          });
                        }}
                      />
                      <div>gitLink</div>
                    </div>
                    <div>
                      <div>lifePageName</div>
                      <div>lifePageLink</div>
                    </div>
                    <div>Technology</div>
                  </div>
                  <div>Info</div>
                </div>
              ) : (
                <div>
                  <a href={item.gitPage}>{item.name}</a>
                  <span>{` -> `}</span>
                  <a href={item.lifePage}>Link </a>
                  <strong>[{item.technology}]</strong>
                  <br />
                  {item.info}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
