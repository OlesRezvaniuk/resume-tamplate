import { Avatar } from "../Avatar/Avatar";
import { Contacts } from "../Contacts/Contacts";
import { Social } from "../Social/Social";
import { TechSkills } from "../TechSkills/TechSkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import { Languages } from "../Languages/Languages";
import { AsideContainer } from "./Aside.styled";
import { useEffect, useState } from "react";
import { ColorPicker } from "../ColorPicker/ColorPicker";

export const Aside = ({ userData, setUserData, change, readyToSave }) => {
  const [bgColor, setBgColor] = useState(userData.options.bgColor);

  return (
    <AsideContainer
      $ready={readyToSave}
      $bgColor={userData.options.bgColor}
      $fColor={userData.options.fColor}
    >
      <Avatar
        userData={userData}
        setUserData={setUserData}
        change={change}
        readyToSave={readyToSave}
      />
      <Contacts
        userData={userData}
        setUserData={setUserData}
        change={change}
        readyToSave={readyToSave}
      />
      <Social
        userData={userData}
        setUserData={setUserData}
        change={change}
        readyToSave={readyToSave}
      />
      <TechSkills
        userData={userData}
        setUserData={setUserData}
        change={change}
        readyToSave={readyToSave}
      />
      <SoftSkills
        userData={userData}
        setUserData={setUserData}
        change={change}
        readyToSave={readyToSave}
      />
      <Languages
        userData={userData}
        setUserData={setUserData}
        change={change}
        readyToSave={readyToSave}
      />
    </AsideContainer>
  );
};
