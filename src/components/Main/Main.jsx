import { Specialty } from "../Specialty/Specialty";
import { Name } from "../Name/Name";
import { Info } from "../Info/Info";
import { Projects } from "../Projects/Projects";
import { WorkExperience } from "../WordExperience/WorkExperience";
import { Education } from "../Education/Education";
import { MainContainer } from "./Main.styled";

export const Main = ({
  userData,
  setUserData,
  change,
  setChange,
  bgColor,
  readyToSave,
}) => {
  return (
    <MainContainer $ready={readyToSave}>
      <Specialty
        usersData={userData}
        change={change}
        setUserData={setUserData}
        setChange={setChange}
        readyToSave={readyToSave}
      />
      <Name
        userData={userData}
        change={change}
        setUserData={setUserData}
        readyToSave={readyToSave}
      />
      <Info
        userData={userData}
        change={change}
        setUserData={setUserData}
        readyToSave={readyToSave}
      />
      <Projects
        userData={userData}
        change={change}
        setUserData={setUserData}
        readyToSave={readyToSave}
      />
      <WorkExperience
        userData={userData}
        setUserData={setUserData}
        change={change}
        bgColor={bgColor}
        readyToSave={readyToSave}
      />
      <Education
        userData={userData}
        setUserData={setUserData}
        change={change}
        bgColor={bgColor}
        readyToSave={readyToSave}
      />
    </MainContainer>
  );
};
