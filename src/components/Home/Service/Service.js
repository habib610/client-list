import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const {icon, description, name} = service;
    return (
        <div className="col-md-4 my-5 py-md-5 d-flex justify-content-center">
            <div className="card text-center">
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