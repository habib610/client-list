import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentDots,faHdd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{height: '100vh'}} className="sidebar col-md-2 mx-0 bg-light text-success"> 

            <div className="d-flex justify-content-evenly align-items-center my-3">
            <FontAwesomeIcon icon={faShoppingCart}className="mx-2 fa-lg " />
            <Link to="/order" className="text-dark">Order</Link>
            </div>
            <div className="d-flex justify-content-evenly align-items-center my-3">
            <FontAwesomeIcon icon={faCommentDots}className="mx-2 fa-lg" />
            <Link to="/serviceList" className="text-dark">Service List</Link>
            </div>
            <div className="d-flex justify-content-evenly align-items-center my-3">
            <FontAwesomeIcon icon={faHdd}className="mx-2 fa-lg" />
            <Link to="/review" className="text-dark">Review</Link>
            </div>
        </div>
    );
};

export default Sidebar;