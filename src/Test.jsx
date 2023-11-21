import { useState } from "react";

const Input = ({ inputData, setInputData, item }) => {
  console.log(inputData);
  const object = inputData.find((i) => i.type === item.type);
  return (
    <input
      type="text"
      name={object.type}
      id={object.id}
      placeholder={object.text}
      value={object.text}
      onChange={(e) => {
        const updatedInputData = inputData.map((data) =>
          data.type === object.type ? { ...data, text: e.target.value } : data
        );
        setInputData(updatedInputData);
      }}
    />
  );
};

export const Test = () => {
  const [inputData, setInputData] = useState([
    { id: "1", type: "name", text: "bla bla bla" },
    { id: "2", type: "link", text: "piska piska" },
    { id: "3", type: "git", text: "pizda pizda" },
  ]);
  return (
    <>
      {inputData.map((item) => {
        return (
          <Input
            key={item.id}
            inputData={inputData}
            setInputData={setInputData}
            item={item}
          />
        );
      })}
    </>
  );
};
