import React from "react";
import Account from "../../components/Account/Account";
import "./User.css";
import { useState } from "react";

export default function User() {
  const [editNameDisplay, setEditNameDisplay] = useState(false)

  const hideOrShowEditName = () => {
    setEditNameDisplay(current => !current);
  }
// TODO à la place de Tony Jarvis utiliser redux Toolkit allez chercher la valeur dans le store
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <span className={editNameDisplay ? "hidden" : ""}>Tony Jarvis!</span>
        </h1>
        <button id="edit-button" className={`edit-button ${editNameDisplay ? "hidden" : ""}`} onClick={hideOrShowEditName}>Edit Name</button>
      </div>
      <div className={`edit-name ${editNameDisplay ? "" : "hidden"}`}>
        <div>
          <input type="text" className="input-name"/>
          <input type="text" className="input-name"/>
        </div>
        <div>
          <button className="edit-button name-button">Save</button>
          <button className="edit-button name-button" onClick={hideOrShowEditName}>Cancel</button>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
}
