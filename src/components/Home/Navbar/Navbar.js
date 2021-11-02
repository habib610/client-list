import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../context/useAuth";
import Logo from "./../../../images/logos/logo.png";
const Navbar = () => {
  const { loggedInUser, handleSingOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img className="w-25 img-fluid" src={Logo} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link mx-3" to="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <HashLink smooth="true" to="/#works" className="nav-link mx-3">
              Works
            </HashLink>
          </li>
          <li className="nav-item ">
            <HashLink smooth="true" className="nav-link mx-3" to="/#service">
              Service
            </HashLink>
          </li>
          <li className="nav-item ">
            <Link smooth="true" className="nav-link mx-3" to="/orderDashboard">
              Order
            </Link>
          </li>
          <li className="nav-item">
            <HashLink smooth="true" to="/#contact" className="nav-link mx-3" >
              Contact
            </HashLink>
          </li>
          <li className="nav-item">
            {loggedInUser ? (
              <div className="d-flex">
                {loggedInUser.userPhoto ? <img onClick={handleSingOut} style={{width: "40px", cursor: "pointer"}} className="rounded-circle" alt="user" src={loggedInUser.userPhoto} /> : <h6 className="mt-2">{loggedInUser.name}</h6>}
              </div>
            ) : (
              <Link className="btn common-btn ml-3" to="/dashboard">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
