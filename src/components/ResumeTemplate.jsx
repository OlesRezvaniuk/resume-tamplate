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
import { nanoid } from "@reduxjs/toolkit";
import { ResumeTemplateContainer } from "./ResumeTemplate.styled";

function ResumeTemplate() {
  const { auth } = useSelector(authSelector);
  const [change, setChange] = useState(true);
  const [restoreData, setRestoreData] = useState(null);
  const [userData, setUserData] = useState({
    specialty: "you'r specialty",
    name: "you'r name",
    info: "Describe your work experience and your preferences...",
    projects: [
      {
        gitLink: "https://github.com/",
        lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
        id: nanoid(),
        name: "Project #1",
        technology: "project technology",
        info: "Describe this project in more detail",
      },
      {
        gitLink: "https://github.com/",
        lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
        id: nanoid(),
        name: "Project #2",
        technology: "project technology",
        info: "Describe this project in more detail",
      },
      {
        gitLink: "https://github.com/",
        lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
        id: nanoid(),
        name: "Project #3",
        technology: "project technology",
        info: "Describe this project in more detail",
      },
      {
        gitLink: "https://github.com/",
        lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
        id: nanoid(),
        name: "Project #4",
        technology: "project technology",
        info: "Describe this project in more detail",
      },
    ],
    workExperience: [
      {
        startYear: "0000",
        endYear: "0000",
        company: "Company #1",
        position: "Position #1",
        responsibilities: [{ id: nanoid(), value: "responsibilities #1" }],
        id: nanoid(),
      },
      {
        startYear: "0000",
        endYear: "0000",
        company: "Company #2",
        position: "Position #2",
        responsibilities: [{ id: nanoid(), value: "responsibilities #2" }],
        id: nanoid(),
      },
    ],
    education: [
      {
        startYear: "0000",
        endYear: "0000",
        name: "Institution #1",
        position: "Position #1",
        id: nanoid(),
      },
      {
        startYear: "0000",
        endYear: "0000",
        name: "Institution #2",
        position: "Position #2",
        id: nanoid(),
      },
    ],
    contacts: {
      tel: "+000000000000",
      email: "yourEmail@gmail.com",
      city: "yourCity",
    },
    social: {
      facebook: "facebookLink",
      telegram: "telegramLink",
      gitHub: "githubLink",
      LinkedIn: "LinkedinLink",
    },
    techSkills: [
      { id: nanoid(), value: "tech skill #1" },
      { id: nanoid(), value: "tech skill #2" },
      { id: nanoid(), value: "tech skill #3" },
      { id: nanoid(), value: "tech skill #4" },
      { id: nanoid(), value: "tech skill #5" },
      { id: nanoid(), value: "tech skill #6" },
    ],
    softSkills: [
      { id: nanoid(), value: "soft skill #1" },
      { id: nanoid(), value: "soft skill #2" },
      { id: nanoid(), value: "soft skill #3" },
      { id: nanoid(), value: "soft skill #4" },
      { id: nanoid(), value: "soft skill #5" },
      { id: nanoid(), value: "soft skill #6" },
    ],
    languages: [
      { id: nanoid(), value: "Language #1", level: "level?" },
      { id: nanoid(), value: "Language #2", level: "level?" },
      { id: nanoid(), value: "Language #3", level: "level?" },
      { id: nanoid(), value: "Language #4", level: "level?" },
    ],
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

  // const saveHTMLasPDF = () => {
  //   const element = document.getElementById("root"); // Замініть 'yourHTMLContent' на ідентифікатор вашого HTML вмісту
  //   html2pdf(element);
  // };

  return (
    <ResumeTemplateContainer>
      <div>
        <button
          onClick={() => {
            window.print();
          }}
        >
          PRINT
        </button>
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
          justifyContent: "center",
          boxShadow: "0px 0px 10px lightgrey",
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
    </ResumeTemplateContainer>
  );
}

export default ResumeTemplate;
