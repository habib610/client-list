import {  faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminSideBar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(()=>{
        fetch(`https://murmuring-everglades-58263.herokuapp.com/getAdmin?email=${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data))
    }, )


    return (
        <div style={{height: '100vh'}} className="sidebar col-md-2 mx-0 text-success"> 

{/* admin sidebar  */}

{
    admin ?
 <div className="AdminSidebar">
 <div className="d-flex justify-content-evenly align-items-center my-3">
 <FontAwesomeIcon icon={faHdd}className="mx-2 fa-lg " />
 <Link to="/dashboard" className="text-dark">Service List</Link>
 </div>
 <div className="d-flex justify-content-evenly align-items-center my-3">
 <FontAwesomeIcon icon={faPlus}className="mx-2 fa-lg" />
 <Link to="/addService" className="text-dark">Add Service</Link>
 </div>
 <div className="d-flex justify-content-evenly align-items-center my-3">
 <FontAwesomeIcon icon={faUserPlus}className="mx-2 fa-lg" />
 <Link to="/makeAdmin" className="text-dark">Make Admin</Link>
 </div>
 </div>

:

 <div className="customerDashboard">
 <div className="d-flex justify-content-evenly align-items-center my-3">
     <FontAwesomeIcon icon={faShoppingCart}className="mx-2 fa-lg " />
     <Link to="/orderDashboard" className="text-dark">Order</Link>
     </div>

     <div className="d-flex justify-content-evenly align-items-center my-3">
     <FontAwesomeIcon icon={faHdd}className="mx-2 fa-lg" />
     <Link to="/serviceList" className="text-dark">Service List</Link>
     </div>

     <div className="d-flex justify-content-evenly align-items-center my-3">
     <FontAwesomeIcon icon={faCommentDots}className="mx-2 fa-lg" />
     <Link to="/review" className="text-dark">Review</Link>
     </div>
 </div>

}
       

    </div>
    );
};

export default AdminSideBar;