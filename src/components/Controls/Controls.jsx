import {
  ControlsContainer,
  ControlButton,
  AuthIcon,
  ControlsButtonsBox,
  UserName,
  DownloadIcon,
  SaveIcon,
  EditIcon,
  ControlsBox,
  ResetIcon,
  ZoomPlusIcon,
  ZoomMinusIcon,
} from "./Controls.styled";
import html2pdf from "html2pdf.js";
import { authSelector } from "../../redux/auth/authSelector";
import { useDispatch, useSelector } from "react-redux";
import { singInGoogle, logOutGoogle } from "../../redux/auth/authOperation";
import firebaseRequests from "../../firebase/firebaseRuquests/firebaseRequests";
import { useEffect, useState } from "react";
import { ColorPicker } from "../ColorPicker/ColorPicker";

export const Controls = ({
  userData,
  setUserData,
  controlsPosition,
  change,
  setChange,
  setReadyToSave,
  restoreData,
  scale,
  setScale,
  setSizeVisible,
}) => {
  const dispatch = useDispatch();
  const { auth } = useSelector(authSelector);

  function handleSingInGoogle() {
    if (auth) {
      dispatch(logOutGoogle());
    } else {
      dispatch(singInGoogle());
    }
  }

  function sendChanges() {
    firebaseRequests.postUserData({ userId: auth.uid, userData });
  }

  function handleEditButton() {
    if (auth) {
      setChange(!change);
      change && sendChanges();
    }
  }

  const downloadPDF = async () => {
    if (!change) {
      if (scale !== 1) {
        setScale(1);
        document.body.style.transform = `scale(1)`;
      }
      document.body.style = null;
      await setReadyToSave(true);
      const content = document.getElementById("savePDFdoc");
      const options = {
        margin: 0,
        filename: "document.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: [1075, 900], orientation: "portrait" },
      };
      try {
        await html2pdf().from(content).set(options).save();
      } catch (error) {
        console.log(error);
      }
      setReadyToSave(false);
    }
  };

  function resize(e) {
    document.body.style.transformOrigin = "top";
    document.body.style.height = "100%";

    if (e.target.id === "zoomMinusButton") {
      setScale(scale * 0.9);
      document.body.style.transform = `scale(${scale * 0.9})`;
    } else if (scale <= 0.9) {
      setScale(scale * 1.1);
      document.body.style.transform = `scale(${scale * 1.1})`;
    }
    e.target.focus();
  }

  useEffect(() => {
    setScale(parseFloat(scale.toFixed(1)));
    setSizeVisible(true);
    setTimeout(() => {
      setSizeVisible(false);
    }, 1000);
    if (scale === 1) {
      document.body.style = null;
    }
  }, [scale]);

  return (
    <ControlsContainer
      $bgColor={userData.options.bgColor}
      $mr={controlsPosition}
    >
      <ControlButton $tp="auth" onClick={handleSingInGoogle}>
        <AuthIcon $singed={auth} />
      </ControlButton>
      <UserName $color={userData.options.aColor}>
        {auth ? auth.displayName : "please login"}
      </UserName>
      <ControlsButtonsBox>
        {change && window.innerWidth < 1259 && (
          <>
            <ControlButton $color={userData.options.aColor} $colorPicker="true">
              <ColorPicker
                userData={userData}
                setUserData={setUserData}
                type="font"
              />
            </ControlButton>
            <ControlButton
              $color={userData.options.bgColor}
              $colorPicker="true"
            >
              <ColorPicker
                userData={userData}
                setUserData={setUserData}
                type="background"
              />
            </ControlButton>
            <ControlButton
              $fill={userData.options.bgColor}
              onClick={() => {
                setUserData(restoreData);
              }}
            >
              <ResetIcon />
            </ControlButton>
          </>
        )}
        <ControlButton
          $fill={userData.options.bgColor}
          $bgActive={userData.options.bgColor}
          $state={change}
          onClick={handleEditButton}
        >
          {change ? <SaveIcon /> : <EditIcon />}
        </ControlButton>
        <ControlButton
          $fill={userData.options.bgColor}
          id="downloadButton"
          $tp="download"
          onClick={downloadPDF}
        >
          <DownloadIcon />
        </ControlButton>
      </ControlsButtonsBox>
      {change && window.innerWidth > 1259 && (
        <ControlsBox>
          <ControlButton
            $color={userData.options.aColor}
            $colorPicker="true"
            $controls="true"
          >
            <ColorPicker
              userData={userData}
              setUserData={setUserData}
              type="font"
            />
          </ControlButton>
          <ControlButton
            $color={userData.options.bgColor}
            $colorPicker="true"
            $controls="true"
          >
            <ColorPicker
              userData={userData}
              setUserData={setUserData}
              type="background"
            />
          </ControlButton>
          <ControlButton
            $controls="true"
            $fill={userData.options.bgColor}
            onClick={() => {
              setUserData(restoreData);
            }}
          >
            <ResetIcon />
          </ControlButton>
          <ControlButton
            $fill={userData.options.bgColor}
            id="zoomPlusButton"
            $controls="true"
            onClick={(e) => {
              resize(e);
            }}
          >
            <ZoomPlusIcon />
          </ControlButton>
          <ControlButton
            $fill={userData.options.bgColor}
            id="zoomMinusButton"
            $controls="true"
            onClick={(e) => {
              resize(e);
            }}
          >
            <ZoomMinusIcon />
          </ControlButton>
        </ControlsBox>
      )}
    </ControlsContainer>
  );
};
