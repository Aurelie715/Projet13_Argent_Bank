import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import './Header.css'
import { useState } from 'react'
import { AuthContext } from '../../utils/context'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const {currentUser} = useContext(AuthContext);

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!currentUser && <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>}
        {currentUser && <NavLink to="/profile">{currentUser.firstName} {currentUser.lastName}</NavLink>}
      </div>
    </nav>
  )
}
