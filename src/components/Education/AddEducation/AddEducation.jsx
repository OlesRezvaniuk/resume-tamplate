import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import {
  AddProjectButtonsBox,
  AddButton,
  CheckIcon,
  CrossIcon,
} from "./AddEducation.styled";

export const AddEducation = ({ editData, setEditData }) => {
  const [templateData, setTemplateData] = useState({
    state: false,
    data: {
      name: "",
      position: "",
      startYear: "",
      endYear: "",
    },
  });

  return (
    <AddProjectButtonsBox>
      <AddButton
        onClick={() => {
          setTemplateData({ ...templateData, state: !templateData.state });
          setEditData([...editData, { id: nanoid(), ...templateData.data }]);
        }}
      >
        {"+"}
      </AddButton>
    </AddProjectButtonsBox>
  );
};
