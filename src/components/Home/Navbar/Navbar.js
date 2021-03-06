import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from './../../../images/logos/logo.png'

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/"><img className="w-25 img-fluid" src={Logo} alt="" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link mx-3" to="#">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-3" to="#">Our Portfolio</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link mx-3" to="#">Our Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-3" to="#">Contact Us</Link>
          </li>
          <li className="nav-item">
            {loggedInUser.email ? <h6 className="mt-2">{loggedInUser.name}</h6> : <Link className="btn common-btn ml-3" to="/dashboard">Login</Link>}
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;