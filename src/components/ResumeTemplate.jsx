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

function ResumeTemplate() {
  const { auth } = useSelector(authSelector);
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState({
    specialty: "you'r specialty",
    name: "you'r first & last name",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quidem iste consequuntur laudantium vitae aliquid impedit iusto magni facere, voluptatum enim perferendis recusandae quasi molestiae totam illo eius temporibus ab inventore non nisi cumque quisquam. Similique quasi vero cumque sequi a, nulla ut? Autem esse dolorum nobis! Pariatur blanditiis eius dolorum doloribus tempore voluptatum quis, repudiandae eveniet ex dicta! A nemo, illum eum ipsum consequatur vitae maxime deserunt asperiores.",
    projects: [],
    selectedProjects: [],
  });
  const dispatch = useDispatch();

  function handleSingInGoogle() {
    dispatch(singInGoogle());
  }

  useEffect(() => {
    auth &&
      firebaseRequests.getUserData({ userId: auth.uid, setUserData, userData });
  }, [auth]);

  function sendChanges() {
    firebaseRequests.postUserData({ userId: auth.uid, userData });
  }

  return (
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Specialty
          usersData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
        />
        <Name
          userData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
        />
        <Info
          userData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
        />
        <Projects
          userData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
          sendChanges={sendChanges}
        />
      </div>
    </div>
  );
}

export default ResumeTemplate;
