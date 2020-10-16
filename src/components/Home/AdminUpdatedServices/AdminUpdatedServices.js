import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminUpdatedServices = ({service}) => {
    const{name, description, title, image} = service;

    let history = useHistory();
    const handleCardClicked = ()=>{
        history.push(`/order/${title}`)
    }
    return (
        <div onClick={handleCardClicked} className="col-md-4 my-5 d-flex justify-content-center">
            <div className="card card1 text-center">
                <div className="card-body">
                    <img className="img-fluid w-25 my-3" src={`data:image/jpeg;base64,${image.img}`} alt=""/>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminUpdatedServices;