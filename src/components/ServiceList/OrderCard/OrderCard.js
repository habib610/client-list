import React from 'react';
import './OrderCard.css'
const OrderCard = ({service}) => {
    const {icon, description, name, status} = service;
    return (
        <div className="col-md-4 my-2 ml-5 py-md-5 d-flex justify-content-center">
            <div className="card ">
                <div className="card-body">
                    <div className="card-head d-flex justify-content-between align-items-center">
                    <img className="img-fluid w-25 my-3" src={icon} alt=""/>
                    <div><p className={status}>{status}</p></div>
                    </div>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;