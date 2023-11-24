import { useEffect, useState } from "react";
import firebase from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/authSelector";
import { AvatarContainer, AvatarPlugBox, AvatarImg } from "./Avatar.styled";

export const Avatar = ({ userData, setUserData, change }) => {
  const [avatarFile, setAvatarFile] = useState(null);
  const { auth } = useSelector(authSelector);

  async function uploadAvatar() {
    if (auth && avatarFile) {
      const storageRef = ref(firebase.storage, `avatars/${auth.uid}-avatar`);
      await uploadBytes(storageRef, avatarFile);
      getDownloadURL(ref(firebase.storage, `avatars/${auth.uid}-avatar`)).then(
        (url) => {
          if (url) {
            setUserData({ ...userData, avatar: url });
          }
        }
      );
    }
  }

  useEffect(() => {
    avatarFile && uploadAvatar();
  }, [avatarFile]);

  return (
    <AvatarContainer>
      {userData.avatar ? (
        <AvatarImg src={userData.avatar} alt="avatarPlugData" />
      ) : (
        <AvatarPlugBox />
      )}

      {change && (
        <input
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: 370,
            width: "100%",
            opacity: 0,
            cursor: change ? "pointer" : "default",
          }}
          type="file"
          onChange={(e) => {
            setAvatarFile(e.target.files[0]);
          }}
        />
      )}
    </AvatarContainer>
  );
};
