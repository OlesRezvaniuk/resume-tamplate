import { Avatar } from "../Avatar/Avatar";
import { Contacts } from "../Contacts/Contacts";
import { Social } from "../Social/Social";
import { TechSkills } from "../TechSkills/TechSkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import { Languages } from "../Languages/Languages";

export const Aside = ({ userData, setUserData, change }) => {
  return (
    <aside
      style={{
        width: 370,
        display: "flex",
        flexDirection: "column",
        gap: 40,
        paddingBottom: 40,
        background: "#eceef2",
        minHeight: 1200,
      }}
    >
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
    </aside>
  );
};
