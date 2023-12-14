import { useEffect, useState } from "react";
import firebase from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../../redux/auth/authSelector";
import { AvatarContainer, AvatarImg } from "./Avatar.styled";
import { getAvatar } from "../../redux/auth/authOperation";
import { UserPlugIcon } from "./Avatar.styled";

export const Avatar = ({
  userData,
  setUserData,
  change,
  readyToSave,
}) => {
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPath, setAvatarPath] = useState(null);
  const [imgAvatar, setImgAvatar] = useState(null);
  const { auth } = useSelector(authSelector);
  const { avatar } = useSelector(authSelector);
  const dispatch = useDispatch();

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

  async function blob() {
    setImgAvatar(userData.avatar);
    const imageUrl = userData.avatar;
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImgAvatar(base64data);
    };
  }

  useEffect(() => {
    blob();
  }, [userData.avatar]);

  useEffect(() => {
    avatarFile && uploadAvatar();
    avatarPath && dispatch(getAvatar({ file: avatarPath }));
  }, [avatarFile, avatarPath]);

  return (
    <AvatarContainer  $ready={readyToSave}>
      {userData.avatar ? <AvatarImg src={imgAvatar} /> : <UserPlugIcon />}
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
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setAvatarPath(imageUrl);
          }}
        />
      )}
    </AvatarContainer>
  );
};
