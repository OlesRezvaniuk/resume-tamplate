import { useState, useEffect } from "react";
import {
  SocialsContainer,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  SocialInputsList,
  SocialInputsListItem,
  SocialInputItemName,
  SocialLinkInput,
  GithubIcon,
  SocialLinkItem,
  SocialLinksList,
} from "./Social.styled";

export const Social = ({ userData, setUserData, change, readyToSave }) => {
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (change) {
      setEditData(userData.social);
    } else {
      setEditData(null);
    }
  }, [change]);

  return (
    <SocialsContainer $isEdit={editData}>
      {editData ? (
        <SocialInputsList>
          {Object.keys(editData).map((item) => {
            return (
              <SocialInputsListItem
                $ready={readyToSave}
                key={`editSocialData-${item}`}
              >
                <SocialInputItemName>
                  {item === "facebook" && (
                    <FacebookIcon $editIcon="true" title="" />
                  )}
                  {item === "LinkedIn" && (
                    <LinkedinIcon $editIcon="true" title="" />
                  )}
                  {item === "gitHub" && (
                    <GithubIcon $editIcon="true" title="" />
                  )}
                  {item === "telegram" && (
                    <TelegramIcon $editIcon="true" title="" />
                  )}
                </SocialInputItemName>
                <SocialLinkInput
                  type="text"
                  name={item}
                  value={editData[item]}
                  onChange={(e) => {
                    setEditData({ ...editData, [item]: e.target.value });
                  }}
                  onBlur={() => {
                    setUserData({ ...userData, social: editData });
                  }}
                />
              </SocialInputsListItem>
            );
          })}
        </SocialInputsList>
      ) : (
        <SocialLinksList>
          {Object.keys(userData.social).map((item) => {
            if (userData.social[item] !== "") {
              return (
                <SocialLinkItem key={`socialLink-${item}`}>
                  <a
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      fill: userData.options.fColor,
                    }}
                    target="_blank"
                    href={
                      item === "telegram"
                        ? `https://t.me/${userData.social[item]}`
                        : `https://${userData.social[item]}`
                    }
                  >
                    {item === "facebook" && (
                      <FacebookIcon
                        title=""
                        style={{ fill: userData.options.fColor }}
                      />
                    )}
                    {item === "LinkedIn" && (
                      <LinkedinIcon
                        title=""
                        style={{ fill: userData.options.fColor }}
                      />
                    )}
                    {item === "gitHub" && (
                      <GithubIcon
                        title=""
                        style={{ fill: userData.options.fColor }}
                      />
                    )}
                    {item === "telegram" && (
                      <TelegramIcon
                        title=""
                        style={{ fill: userData.options.fColor }}
                      />
                    )}
                  </a>
                </SocialLinkItem>
              );
            } else {
              return (
                <SocialLinkItem key={`socialLink-${item}`} $load={true}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "#425168",
                      borderRadius: "3.3px",
                    }}
                  />
                </SocialLinkItem>
              );
            }
          })}
        </SocialLinksList>
      )}
    </SocialsContainer>
  );
};
