import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { singInGoogle } from "../redux/auth/authOperation";
import { authSelector } from "../redux/auth/authSelector";
import firebaseRequests from "../firebase/firebaseRuquests/firebaseRequests";
import { Main } from "./Main/Main";
import { Aside } from "./Aside/Aside";
import {
  ResumeTemplateContainer,
  ContentContainer,
  ScaleSizeText,
} from "./ResumeTemplate.styled";
import { data } from "./data/data";
import { Controls } from "./Controls/Controls";

function ResumeTemplate() {
  const { auth } = useSelector(authSelector);
  const [change, setChange] = useState(false);
  const [restoreData, setRestoreData] = useState(null);
  const [readyToSave, setReadyToSave] = useState(false);
  const [userData, setUserData] = useState(data);
  const [bgColor, setBgColor] = useState("");
  const [fColor, setFColor] = useState("");
  const [controlsPosition, setControlsPosition] = useState("auto");
  const [scale, setScale] = useState(1);
  const [sizeVisible, setSizeVisible] = useState(false);
  const [loading, setLoading] = useState(true);

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

  async function isLoading() {
    setLoading(true);
    await firebaseRequests.getUserData({
      userId: auth.uid,
      setUserData,
      userData,
    });
    setLoading(false);
  }

  useEffect(() => {
    if (auth) {
      isLoading();
    }
    auth && setChange(false);
    !auth && setUserData(data);
    !auth && setChange(false);
  }, [auth]);

  function sendChanges() {
    firebaseRequests.postUserData({ userId: auth.uid, userData });
  }

  function determinePosition() {
    const element = document.getElementById("mainContainer");
    const computedStyle = window.getComputedStyle(element);
    const marginRight = computedStyle.getPropertyValue("margin-right");
    setControlsPosition(marginRight);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      determinePosition();
    });
    controlsPosition === "auto" && determinePosition();
  }, [window.innerWidth, controlsPosition]);

  return (
    <ResumeTemplateContainer id="mainContainer" $ready={readyToSave}>
      <Controls
        userData={userData}
        setUserData={setUserData}
        controlsPosition={controlsPosition}
        change={change}
        setChange={setChange}
        readyToSave={readyToSave}
        setReadyToSave={setReadyToSave}
        restoreData={restoreData}
        scale={scale}
        setScale={setScale}
        setSizeVisible={setSizeVisible}
      />
      {sizeVisible && <ScaleSizeText>{scale * 100}%</ScaleSizeText>}
      <ContentContainer
        $auth={auth}
        $loading={loading}
        $ready={readyToSave}
        id="savePDFdoc"
      >
        <Aside
          userData={userData}
          change={change}
          setUserData={setUserData}
          bgColor={bgColor}
          setBgColor={setBgColor}
          fColor={fColor}
          setFColor={setFColor}
          readyToSave={readyToSave}
        />
        <Main
          userData={userData}
          change={change}
          setUserData={setUserData}
          setChange={setChange}
          bgColor={bgColor}
          readyToSave={readyToSave}
        />
      </ContentContainer>
    </ResumeTemplateContainer>
  );
}

export default ResumeTemplate;
