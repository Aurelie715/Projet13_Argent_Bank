import React from "react";
import Account from "../../components/Account/Account";
import "./User.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyName } from "../../store";
import { updateProfile } from "../../services/user.service";

export default function User() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onFirstnameChange = (event) => {
    setFirstname(event.currentTarget.value)
  };

  const onLastnameChange = (event) => {
    setLastname(event.currentTarget.value)
  };

  const [editNameDisplay, setEditNameDisplay] = useState(false);

  const showFormEditName = () => {
    setEditNameDisplay((current) => !current);
  };

  const saveNewName = () => {
    showFormEditName();
    dispatch(modifyName({firstName: firstname, lastName: lastname}));
    updateProfile(firstname, lastname)
  }
  
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <span className={editNameDisplay ? "hidden" : ""}>{name.firstName} {name.lastName}!</span>
        </h1>
        <button id="edit-button" className={`edit-button ${editNameDisplay ? "hidden" : ""}`} onClick={showFormEditName}>
          Edit Name
        </button>
      </div>
      <div className={`edit-name ${editNameDisplay ? "" : "hidden"}`}>
        <div>
          <input type="text" className="input-name" placeholder={name.firstName} value={firstname} onChange={onFirstnameChange}/>
          <input type="text" className="input-name" placeholder={name.lastName} value={lastname} onChange={onLastnameChange}/>
        </div>
        <div>
          <button className="edit-button name-button" onClick={saveNewName}>Save</button>
          <button className="edit-button name-button" onClick={showFormEditName}>
            Cancel
          </button>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
}
