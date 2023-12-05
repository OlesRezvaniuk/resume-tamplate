import { Specialty } from "../Specialty/Specialty";
import { Name } from "../Name/Name";
import { Info } from "../Info/Info";
import { Projects } from "../Projects/Projects";
import { WorkExperience } from "../WordExperience/WorkExperience";
import { Education } from "../Education/Education";
import { MainContainer } from "./Main.styled";

export const Main = ({ userData, setUserData, change, setChange }) => {
  return (
    <MainContainer
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Specialty
        usersData={userData}
        change={change}
        setUserData={setUserData}
        setChange={setChange}
      />
      <Name userData={userData} change={change} setUserData={setUserData} />
      <Info userData={userData} change={change} setUserData={setUserData} />
      <Projects userData={userData} change={change} setUserData={setUserData} />
      <WorkExperience
        userData={userData}
        setUserData={setUserData}
        change={change}
      />
      <Education
        userData={userData}
        setUserData={setUserData}
        change={change}
      />
    </MainContainer>
  );
};
