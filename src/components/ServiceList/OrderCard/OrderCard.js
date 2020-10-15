import React from 'react';
import './OrderCard.css'
const OrderCard = ({service}) => {
    const {icon, detail, name, status} = service;
    const {image} = icon;
    return (
 <div className="col-md-4 my-2 ml-5 py-md-5 d-flex justify-content-center">
            <div className="card ">
                <div className="card-body">
                    <div className="card-head d-flex justify-content-between align-items-center">
                    <img className="img-fluid w-25 my-3" src={`data:image/jpeg;base64,${image.img}`} alt=""/>
                    <div><p className={status}>{status}</p></div>
                    </div>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{detail}</p>
                </div>
            </div>
        </div>
    );
       
};

export default OrderCard;