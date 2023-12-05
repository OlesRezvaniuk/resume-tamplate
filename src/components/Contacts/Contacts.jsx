import { useEffect, useState } from "react";
import {
  ContactsContainer,
  ContactTitle,
  ContactsList,
  ContactsInputsList,
  ContactsInputsListItem,
  ContactInputType,
  ContactsInput,
  ContactLink,
  LocationIcon,
  TelIcon,
  EmailIcon,
  ContactListItem,
} from "./Contacts.styled";

export const Contacts = ({ userData, setUserData, change }) => {
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (change) {
      setEditData(userData.contacts);
    } else {
      setEditData(null);
    }
  }, [change]);

  return (
    <ContactsContainer>
      <ContactTitle>Contacts</ContactTitle>
      {!editData && (
        <ContactsList>
          {Object.keys(userData.contacts).map((item) => {
            if (item === "tel" || item === "email") {
              return (
                <ContactListItem key={`contacts-${item}`}>
                  {userData.contacts[item] !== "" ? (
                    <ContactLink
                      href={
                        item === "tel"
                          ? `tel:${userData.contacts[item]}`
                          : `mailto:${userData.contacts[item]}`
                      }
                    >
                      {userData.contacts[item]}
                    </ContactLink>
                  ) : (
                    <div style={{ height: "19.5px", background: "#425168" }} />
                  )}
                </ContactListItem>
              );
            } else {
              return (
                <ContactListItem key={`contacts-${item}`}>
                  {userData.contacts[item] !== "" ? (
                    <span style={{ pointerEvents: "none" }}>
                      {userData.contacts[item]}
                    </span>
                  ) : (
                    <div style={{ height: "19.5px", background: "#425168" }} />
                  )}
                </ContactListItem>
              );
            }
          })}
        </ContactsList>
      )}
      {editData && (
        <div>
          <ContactsInputsList>
            {Object.keys(editData).map((item) => {
              return (
                <ContactsInputsListItem key={`editContacts-${item}`}>
                  <ContactInputType>
                    {item === "city" && <LocationIcon />}
                    {item === "tel" && <TelIcon />}
                    {item === "email" && <EmailIcon />}
                  </ContactInputType>
                  <ContactsInput
                    type="text"
                    name={item}
                    value={editData[item]}
                    onChange={(e) => {
                      setEditData({
                        ...editData,
                        [item]: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      setUserData({ ...userData, contacts: editData });
                    }}
                  />
                </ContactsInputsListItem>
              );
            })}
          </ContactsInputsList>
        </div>
      )}
    </ContactsContainer>
  );
};
