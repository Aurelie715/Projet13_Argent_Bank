import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import "./Header.css";
import { AuthContext } from "../../utils/context";


export default function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  
// ligne 27 au lieu d'aller cherhcer dans le context allez chercher dans redux toolkit
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!currentUser && (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {currentUser && (
          <NavLink className="main-nav-item" to="/profile">
            {currentUser.firstName} 
          </NavLink>
        )}
      </div>
        {currentUser &&
          (<Link className="main-nav-item" to="/" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>)
        }
    </nav>
  );
}
