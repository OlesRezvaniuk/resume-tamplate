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
  const [userData, setUserData] = useState({ specialty: "you'r specialty" });
  const dispatch = useDispatch();

  function handleSingInGoogle() {
    dispatch(singInGoogle());
  }

  useEffect(() => {
    !change && firebaseRequests.postUserData({ userId: auth.uid, userData });
  }, [change]);

  return (
    <div>
      <button onClick={handleSingInGoogle}>Auth</button>
      <button
        style={{ background: !change ? "#fff" : "green" }}
        onClick={() => {
          setChange(!change);
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
      </div>
    </div>
  );
}

export default ResumeTemplate;
