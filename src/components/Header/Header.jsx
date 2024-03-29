import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { modifyName } from "../../store";
import { signOut } from "../../services/authentification.service";


export default function Header() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(modifyName({}));
    signOut();
  };
  
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!name.firstName && (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {name.firstName && (
          <NavLink className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {name.firstName} 
          </NavLink>
        )}
        {name.firstName &&
          (<Link className="main-nav-item" to="/" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>)
        }
      </div>
    </nav>
  );
}
