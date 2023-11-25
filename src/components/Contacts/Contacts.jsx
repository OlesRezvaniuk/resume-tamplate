import { useEffect, useState } from "react";
import {
  ContactsContainer,
  ContactTitle,
  ContactsList,
  ContactsInputsList,
  ContactsInputsListItem,
  ContactInputItemName,
  ContactsInput,
  ContactLink,
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
                <li key={`contacts-${item}`}>
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
                </li>
              );
            } else {
              return (
                <li key={`contacts-${item}`}>
                  {userData.contacts[item] !== "" ? (
                    <span style={{ pointerEvents: "none" }}>
                      {userData.contacts[item]}
                    </span>
                  ) : (
                    <div style={{ height: "19.5px", background: "#425168" }} />
                  )}
                </li>
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
                  <ContactInputItemName>{item}</ContactInputItemName>

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
