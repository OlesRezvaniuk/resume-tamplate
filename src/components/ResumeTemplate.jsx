import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { singInGoogle } from "../redux/auth/authOperation";
import { Specialty } from "./Specialty/Specialty";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { authSelector } from "../redux/auth/authSelector";
import firebaseRequests from "../firebase/firebaseRuquests/firebaseRequests";
import { Name } from "./Name/Name";
import { Info } from "./Info/Info";
import { Projects } from "./Projects/Projects";
import { WorkExperience } from "./WordExperience/WorkExperience";
import { Education } from "./Education/Education";
import { Avatar } from "./Avatar/Avatar";
import { Contacts } from "./Contacts/Contacts";
import { Social } from "./Social/Social";
import { TechSkills } from "./TechSkills/TechSkills";
import { SoftSkills } from "./SoftSkills/SoftSkills";
import { Languages } from "./Languages/Languages";

function ResumeTemplate() {
  const { auth } = useSelector(authSelector);
  const [change, setChange] = useState(false);
  const [restoreData, setRestoreData] = useState(null);
  const [userData, setUserData] = useState({
    specialty: "you'r specialty",
    name: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quidem iste consequuntur laudantium vitae aliquid impedit iusto magni facere, voluptatum enim perferendis recusandae quasi molestiae totam illo eius temporibus ab inventore non nisi cumque quisquam. Similique quasi vero cumque sequi a, nulla ut? Autem esse dolorum nobis! Pariatur blanditiis eius dolorum doloribus tempore voluptatum quis, repudiandae eveniet ex dicta! A nemo, illum eum ipsum consequatur vitae maxime deserunt asperiores.",
    projects: [],
    selectedProjects: [],
    workExperience: [],
    education: [],
    contacts: {
      tel: "",
      email: "",
      city: "",
      country: "",
    },
    social: {
      facebook: "",
      telegram: "",
      gitHub: "",
      LinkedIn: "",
    },
    techSkills: [],
    softSkills: [],
    languages: [],
    avatar: null,
  });

  const dispatch = useDispatch();

  function handleSingInGoogle() {
    dispatch(singInGoogle());
  }

  useEffect(() => {
    if (change) {
      setRestoreData(userData);
    }
  }, [change]);

  useEffect(() => {
    auth &&
      firebaseRequests.getUserData({
        userId: auth.uid,
        setUserData,
        userData,
      });
  }, [auth]);

  function sendChanges() {
    firebaseRequests.postUserData({ userId: auth.uid, userData });
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            firebaseRequests.getUserData({ userId: auth.uid, setUserData });
          }}
        >
          getData
        </button>
        <button onClick={handleSingInGoogle}>Auth</button>
        <button
          style={{ background: !change ? "#fff" : "green" }}
          onClick={() => {
            setChange(!change);
            change && sendChanges();
          }}
        >
          {!change ? "change data" : "confirm"}
        </button>
        {change && (
          <button
            onClick={() => {
              setUserData(restoreData);
            }}
          >
            restoreData
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <aside
          style={{
            maxWidth: 370,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <Avatar
            userData={userData}
            setUserData={setUserData}
            change={change}
          />
          <Contacts
            userData={userData}
            setUserData={setUserData}
            change={change}
          />
          <Social
            userData={userData}
            setUserData={setUserData}
            change={change}
          />
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
        <div
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
          <Projects
            userData={userData}
            change={change}
            setUserData={setUserData}
          />
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
        </div>
      </div>
    </>
  );
}

export default ResumeTemplate;
