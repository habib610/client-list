import {  faHdd, faPlus, faUserPlus,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div style={{height: '100vh'}} className="sidebar col-md-2 mx-0 bg-light text-success"> 

        <div className="d-flex justify-content-evenly align-items-center my-3">
        <FontAwesomeIcon icon={faHdd}className="mx-2 fa-lg " />
        <Link to="/admindashboard" className="text-dark">Service List</Link>
        </div>
        <div className="d-flex justify-content-evenly align-items-center my-3">
        <FontAwesomeIcon icon={faPlus}className="mx-2 fa-lg" />
        <Link to="/addService" className="text-dark">Add Service</Link>
        </div>
        <div className="d-flex justify-content-evenly align-items-center my-3">
        <FontAwesomeIcon icon={faUserPlus}className="mx-2 fa-lg" />
        <Link to="/makeAdimin" className="text-dark">Make Admin</Link>
        </div>
    </div>
    );
};

export default AdminSideBar;