import { Avatar } from "../Avatar/Avatar";
import { Contacts } from "../Contacts/Contacts";
import { Social } from "../Social/Social";
import { TechSkills } from "../TechSkills/TechSkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import { Languages } from "../Languages/Languages";
import { AsideContainer } from "./Aside.styled";

export const Aside = ({ userData, setUserData, change }) => {
  return (
    <AsideContainer>
      <Avatar userData={userData} setUserData={setUserData} change={change} />
      <Contacts userData={userData} setUserData={setUserData} change={change} />
      <Social userData={userData} setUserData={setUserData} change={change} />
      <TechSkills
        userData={userData}
        setUserData={setUserData}
        change={change}
      />
      <SoftSkills
        userData={userData}
        setUserData={setUserData}
        change={change}
      />
      <Languages
        userData={userData}
        setUserData={setUserData}
        change={change}
      />
    </AsideContainer>
  );
};
