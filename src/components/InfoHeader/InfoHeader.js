import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../context/useAuth';
import Logo from './../../images/logos/logo.png';

const InfoHeader = ({ info }) => {
    const { loggedInUser, handleSingOut } = useAuth();
    let history = useHistory();
    const goHome = () => {
        history.push("/home")
    }
    return (
        <div className="row my-2">
            <div className="col-md-2">
                <img onClick={goHome} src={Logo} className="w-50 img-fluid" alt="" />
            </div>
            <div className="col-md-7">
                <h4>{info}</h4>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
                <img src={loggedInUser.userPhoto} onClick={handleSingOut} style={{ width: '30px', height: '30px' }} className="img-fluid rounded-circle mx-2" alt="" />
                <h5>{loggedInUser.name}</h5>
            </div>
        </div>
    );
};

export default InfoHeader;