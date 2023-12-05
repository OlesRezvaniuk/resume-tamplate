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
import { Main } from "./Main/Main";
import { Aside } from "./Aside/Aside";

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
      const restoreData = JSON.parse(JSON.stringify(userData));
      setRestoreData(restoreData);
    }
  }, [!change]);

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
    <div style={{ maxWidth: 1200, margin: 30 }}>
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
        <Aside userData={userData} change={change} setUserData={setUserData} />
        <Main
          userData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
        />
      </div>
    </div>
  );
}

export default ResumeTemplate;
