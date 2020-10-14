import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Service = ({ service }) => {
    const {icon, description, name} = service;

    let history = useHistory();
    const handleCardClicked = ()=>{
        history.push(`/order/${name}`)
    }
    return (

<div onClick={handleCardClicked} className="col-md-4 my-5 py-md-5 d-flex justify-content-center">
            <div className="card card1 text-center">
                <div className="card-body">
                    <img className="img-fluid w-25 my-3" src={icon} alt=""/>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>

        
    );
};

export default Service;