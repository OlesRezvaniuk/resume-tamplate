import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { singInGoogle } from "../redux/auth/authOperation";
import { Specialty } from "./Specialty/Specialty";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { authSelector } from "../redux/auth/authSelector";
import firebaseRequests from "../firebase/firebaseRuquests/firebaseRequests";

function ResumeTemplate() {
  const { auth } = useSelector(authSelector);
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState({
    specialty: "you'r specialty",
    name: "you'r first & last name",
  });
  const dispatch = useDispatch();

  function handleSingInGoogle() {
    dispatch(singInGoogle());
  }

  useEffect(() => {
    auth && firebaseRequests.getUserData({ userId: auth.uid, setUserData });
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
      <div>
        <Specialty
          usersData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
        />
        <h1>{userData.name}</h1>
      </div>
    </div>
  );
}

export default ResumeTemplate;
